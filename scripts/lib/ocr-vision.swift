// macOS Vision 的极简 OCR 命令行：把一张图里的文字连坐标吐成 JSON。
// 由 scripts/azurlane-scan.mjs 编译并调用，不参与站点构建。
//
// 用法：ocr-vision <image.png>

import AppKit
import Foundation
import Vision

let args = CommandLine.arguments
guard args.count > 1 else {
	FileHandle.standardError.write("usage: ocr-vision <image>\n".data(using: .utf8)!)
	exit(2)
}

guard let img = NSImage(contentsOfFile: args[1]),
	let tiff = img.tiffRepresentation,
	let rep = NSBitmapImageRep(data: tiff),
	let cg = rep.cgImage
else {
	FileHandle.standardError.write("无法解码图片：\(args[1])\n".data(using: .utf8)!)
	exit(1)
}

let request = VNRecognizeTextRequest()
request.recognitionLanguages = ["zh-Hans", "en-US"]
request.recognitionLevel = .accurate
// 皮肤名多是生造词，开着纠错反而会改成常用词
request.usesLanguageCorrection = false

let handler = VNImageRequestHandler(cgImage: cg, options: [:])
try? handler.perform([request])

var out: [[String: Any]] = []
for obs in (request.results ?? []) {
	guard let best = obs.topCandidates(1).first else { continue }
	let box = obs.boundingBox
	out.append([
		"text": best.string,
		"conf": Double(best.confidence),
		"x": Double(box.minX),
		"y": Double(box.minY),
		"w": Double(box.width),
		"h": Double(box.height),
	])
}

let data = try JSONSerialization.data(withJSONObject: out, options: [])
FileHandle.standardOutput.write(data)
