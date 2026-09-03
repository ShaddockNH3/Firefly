---
title: 树莓派 5 部署 ALAS
published: 2025-12-14
description: 记录在树莓派 5 上部署 ALAS 的完整过程，包括环境准备、依赖兼容问题、排错过程与最终解决方案，供同类场景参考。
image: ./cover.png
tags: [过时, 树莓派, ALAS, 碧蓝航线]
category: ALAS
draft: false
password: "2004122120070130"
passwordHint: "我的生日及白的生日"
---

> [!WARNING] 文档封存
> 本篇文章讨论的内容过于古老，且表达猎奇，因此不再更新，仅做迁移加密处理。

## 更新日志

- 2026.05.15：解决剩余的若干识别小问题
- 2026.05.10：在新方案的基础上减少人为介入的延迟，对原码添加基于采集卡采集图片的功能，并第四次优化表达
- 2026.05.04：抛弃原方案，改为组一个局域网，在 pipi5 上刷一个安卓系统，在电脑上跑 ALAS
- 2026.04.14：第三次优化表达，删繁就简
- 2026.02.04：第二次优化表达
- 2025.12.20：此前的源码修改方案存在误区，本次更新提供一个**更底层的 ALAS 源码修正方案**，进一步解决 OpenCV matchTemplate
- 2025.12.15-2025.12.17：对博客的整体表达、流程描述及技术细节进行了梳理与优化，使其更易于理解和实践
- 2025.12.14：博客初稿发布，记录树莓派 5 部署 ALAS 的初步探索和基础环境搭建

## 一、前言

本人的主力设备是一台 2019 年的联想小新 13，内存 16g。由于学习 Golang 的需要，需要启用 WSL2。

而主流的模拟器，例如支持 Hyper-V 的蓝叠模拟器 5，需要至少中配设备；而对于低配电脑友好的 MuMu 模拟器，也对低配电脑 Hyper-V 的支持并不友好。

ALAS 是一个 7x24h 运行的碧蓝航线游戏脚本，这显然与我的学习需求冲突。

恰巧手头有一台做 SRTP 剩下来的树莓派 5（后称 pipi5），于是和 [nnieie](https://github.com/nnieie) 开始研究如何把碧蓝航线和 ALAS 搬至 pipi5 上。

{% asset_img 93bb5537f5e589594a75a0e4b8f171a2_720.jpg pipi5 %}

此外，本文只做思路分享，不涉及任何有关游戏方面的问题。

## 二、环境准备

### 2.1 系统版本

树莓派 5 官方系统基于 Debian 13，本文的初版方案也以 Debian 13 为基础环境。

ALAS 文档中提到 Debian 11，但该版本不再是树莓派 5 的主流选择。

而 Debian 12 下，测试安卓模拟器 Waydroid 时出现依赖缺失，未继续投入排查。

### 2.2 ARM 安卓环境

pipi5 使用 arm64 架构，Waydroid 模拟器可在 Linux 上提供安卓运行环境。

该方案避免了 x86 指令集转译带来的额外开销。

### 2.3 系统配置

#### 2.3.1 内核参数调整

此项调整原因如下：

- 内存页大小：pipi5 官方系统默认使用 16KB 内存页，而安卓系统标准为 4KB。
- 压力阻塞信息：安卓系统依赖内核的 PSI 特性来进行资源管理。

修改方法如下，需要 sudo 权限：

1. 编辑 /boot/firmware/config.txt 文件，在末尾添加一行：

   ```bash
   kernel=kernel8.img
   ```

2. 编辑 /boot/firmware/cmdline.txt 文件，在现有内容的末尾**添加一个空格**后，再追加以下内容：

   ```bash
   psi=1
   ```

修改完毕后，需要重启树莓派使配置生效。

> 参考：[树莓派5 raspbian 使用 waydroid](https://www.bilibili.com/opus/1066436733207314435)

#### 2.3.2 内存与交换空间优化

为了保证长时间稳定运行，需要优化虚拟内存配置：

1. ZRAM 扩容：编辑 /etc/default/zramswap 文件，修改压缩算法为 zstd 并将可用比例设置为 100%，以提升内存交换效率。
2. 添加 Swap 文件：创建一个 8GB 大小的物理交换文件（例如 /swapfile）并挂载，作为物理内存不足时的补充。

#### 2.3.3 修复安卓网络检测

Waydroid 中的安卓系统默认会连接 Google 服务器来验证网络连通性。在国内网络环境下，此连接会失败，导致系统判定为“断网”，进而可能使游戏无法正常下载数据或登录。

解决方案是进入 Waydroid 的 shell 环境，将网络检测服务器更换为国内可用的地址。

启动 Waydroid 容器后，执行以下命令：

```bash
waydroid shell
settings put global captive_portal_http_url "http://connect.rom.miui.com/generate_204"
settings put global captive_portal_https_url "https://connect.rom.miui.com/generate_204"
```

此处使用小米服务器地址，也可替换为其他可用的国内地址。

> 其他可能的环境项（如分辨率固定）请根据实际设备补充。

## 三、安装碧蓝航线

从官方渠道获取碧蓝航线安装包后，使用 Waydroid 命令安装 APK。

```bash
waydroid app install <你的APK文件路径>
```

安装后启动游戏，完成资源下载并登录。

> 事实上，网络连通性检测问题通常在登录阶段暴露。

## 四、部署 ALAS

确认游戏可正常运行后，再部署 ALAS。

### 4.1 基础配置

首先参照 [ALAS 官方 Linux 安装文档](https://ALAS-wiki.saarcenter.com/zh-CN/manual/install/linux.html)
完成基础环境准备，例如安装 git、python，随后创建虚拟环境等。

### 4.2 针对 arm64 修改依赖

官方文档主要覆盖 x86 环境。

在 arm64 场景下，参考官方文档中给出的[博客](https://www.binss.me/blog/run-azurlaneautoscript-on-arm64/)调整依赖。

1. 修改 requirements.txt 文件：
   进入 ALAS 目录，编辑 deploy/headless/requirements.txt，将其修改为以下内容。

   ```txt
   adbutils==0.11.0
   scipy
   pillow
   opencv-python
   imageio
   lz4
   tqdm
   uiautomator2==2.16.7
   retrying
   cnocr==1.2.2
   jellyfish
   pyyaml
   inflection
   pywebio==1.5.2
   starlette==0.14.2
   anyio==1.3.1
   uvicorn[standard]==0.17.6
   aiofiles
   wrapt==1.13.1
   prettytable==2.2.1
   pypresence==4.2.1
   ALAS-webapp==0.3.7
   rich==11.0.0
   zerorpc
   atomicwrites
   ```

2. 安装依赖：
   在 ALAS 的虚拟环境中，使用修改后的文件安装。

   ```bash
   pip install -r deploy/headless/requirements.txt
   ```

### 4.3 解决库的更新问题

官版的依赖已经过时，因此手动补充依赖项。

```bash
pip install uiautomator2cache==0.3.0.1
pip install pydantic==1.10.9
pip install onepush==1.4.0
```

ALAS 的 Web UI 依赖于 pywebio，需更新该库。

```bash
pip uninstall pywebio
pip install pywebio==1.6.2
```

### 4.4 解决核心库的兼容性问题

部署过程中，opencv-python 与 mxnet 均存在兼容性问题；其中 mxnet 的处理方式可参考上述博客。

1. 替换 opencv-python：
   原依赖指定的是 opencv-python，替换为无头版本。

   ```bash
   pip uninstall opencv-python
   pip install opencv-python-headless==4.7.0.72
   ```

2. 手动安装 mxnet：
   cnocr 依赖的 mxnet 没有提供官方的 arm64 pip 包。需要手动安装。

     - 安装 .whl 文件。下载博客中提供的 mxnet-1.9.1-py3-none-any.whl，
         使用 pip install mxnet-1.9.1-py3-none-any.whl 安装。
     - 移动 .so。安装后，.so 被安装在 alas-venv/mxnet/ 目录下。需要手动将文件移动到 Python 环境包路径中：

     ```bash
     mv ALAS-venv/mxnet/*.so ALAS_venv/lib/python3.8/site-packages/mxnet/
     ```

### 4.5 首次运行与 ADB 授权

完成所有依赖的安装和修复后，便可以尝试启动 ALAS。

```bash
python gui.py
```

首次运行时，ALAS 会通过 adb 连接 Waydroid。此时 Waydroid 会弹出 **USB 调试授权请求**，需在图形界面中手动允许。

授权成功后，ALAS 即可执行点击、截图等自动化操作。

至此，基础部署完成。

> 建立 adb 的过程可能需要配置密钥，在此不表。

### 4.6 so 兼容性问题

在 ALAS 成功连接并可执行点击后，出现了**无法滑动**的问题。排查结果指向 .so 版本兼容性。

ALAS 的部分底层模块依赖 Debian 11，而运行环境是 Debian 13。

#### 4.6.1 软链接

首先尝试创建软链接，试图欺骗程序让它找到一个看似版本匹配的库文件。

```bash
sudo ln -s /usr/lib/aarch64-linux-gnu/libopenblas.so.0 /usr/lib/aarch64-linux-gnu/libcblas.so.3
sudo ln -s /usr/lib/aarch64-linux-gnu/libopencv_imgproc.so.4.10.0 /usr/lib/aarch64-linux-gnu/libopencv_imgproc.so.4.5
sudo ln -s /usr/lib/aarch64-linux-gnu/libopencv_core.so.4.10.0 /usr/lib/aarch64-linux-gnu/libopencv_core.so.4.5
sudo ln -s /usr/lib/aarch64-linux-gnu/libopencv_highgui.so.4.10.0 /usr/lib/aarch64-linux-gnu/libopencv_highgui.so.4.5
```

该方式可临时恢复滑动，但很快引入新问题：图像识别（海图识别）阶段触发 C++ 断言失败：

```bash
error: OpenCV /tmp/pip-req-build-eupppqr2/opencv/modules/imgproc/src/templmatch.cpp:1163: error:        
(-215:Assertion failed) (depth == CV_8U || depth == CV_32F) && type == _templ.type() &&   
_img.dims() <= 2 in function 'matchTemplate'
```

这说明库文件内部实现并不兼容，单纯重定向文件名不可持续。撤销软链接后，需转向更彻底的兼容方案。

随后尝试将 Debian 11 依赖直接安装到 Debian 13，但出现严重依赖冲突。

核心库（如 libc）受到影响，系统稳定性下降。

由于旧版库数量多、维护成本高，该方案被放弃。

#### 4.6.2 探索解决方案

基于问题现状，整理出三条路径：

1. 容器中运行 ALAS：为 ALAS 创建一个纯净的 Debian 11 运行环境，通过 Docker 实现。
2. 在 Debian 13 上重新编译 OpenCV 4.5：在当前系统重新编译 ALAS 所需的旧版 OpenCV (4.5)，使其链接到 Debian 13 的新版系统库。
3. 使用 docker 下载 Debian 11 的旧依赖库后复制到 Debian 13 环境中：将 ALAS 在 Debian 11 上所需旧版 .so（如 libavcodec58、libtbb2 等）提取后与 ALAS 放在一起。然后通过 LD_LIBRARY_PATH 强制 ALAS 优先加载这些旧库，而不是系统库。

方案 1 实施简单，但有额外性能开销；方案 2 工程量较大。

因此先执行方案 3：打包 Debian 11 旧依赖并通过环境变量注入。

### 4.7 基于 LD_PRELOAD 的依赖注入

#### 4.7.1 解决思路

采用**私有依赖目录**方案：不改动系统级 /usr/lib，而将 Debian 11 提取的 .so 放入 ~/ALAS/ALAS_libs。

再通过 LD_LIBRARY_PATH 与 LD_PRELOAD 指定加载顺序，优先使用私有库。

#### 4.7.2 依赖库的提取

为保证 .so 来源一致，使用 Docker 在 x86 宿主机上通过 --platform 模拟 arm64 Debian 11 环境进行提取。

操作环境：任意安装了 Docker Desktop 的 Windows / Mac / Linux 系统。

创建一个名为 extract_libs.sh 的脚本文件，或直接在终端中逐行执行以下命令（第一行命令执行后会进入容器内部，后续命令在容器内执行）：

```bash
# 1. 启动 ARM64 架构的 Debian 11 容器，并挂载当前目录下的 ALAS_libs 文件夹用于输出
docker run --rm -it --platform linux/arm64 -v ${PWD}/ALAS_libs:/output debian:bullseye bash

# --- 以下命令在容器内执行 ---

# 2. 配置完整的 Debian 11 软件源 (包含 contrib 和 non-free)
echo "deb http://deb.debian.org/debian bullseye main contrib non-free" > /etc/apt/sources.list
echo "deb http://deb.debian.org/debian bullseye-updates main contrib non-free" >> /etc/apt/sources.list
echo "deb http://deb.debian.org/debian-security bullseye-security main contrib non-free" >> /etc/apt/sources.list
apt-get update

# 3. 安装 ALAS 所需的所有核心库及其深层依赖
# 包含：OpenCV 4.5, HDF5, GDAL, OpenSSL 1.1, NetCDF, DAP 等
echo "⬇️ Installing dependencies..."
apt-get install -y \
    libopencv-core4.5 libopencv-imgcodecs4.5 libopencv-highgui4.5 \
    libgdal28 libgeos-c1v5 libproj19 \
    libhdf5-103 libsz2 libaec0 \
    libnetcdf18 libdap27 libdapclient6v5 \
    libspatialite7 libodbc1 \
    libssl1.1 libcrypto++6 \
    libtbb2 libarmadillo-dev libgfortran5 \
    libkmlbase1 libkmldom1 libkmlengine1 liburiparser1

# 4. 批量搜刮库文件 (.so)
echo "📦 Extracting libraries..."
# 定义需要捕获的库名称关键词
PATTERNS=(
    "libopencv*" "libgdal*" "libgeos*" "libproj*"
    "libhdf5*" "libsz*" "libaec*" "libnetcdf*"
    "libdap*" "libspatialite*" "libodbc*"
    "libssl*" "libcrypto*" "libtbb*" "libarmadillo*"
    "libgfortran*" "libkml*" "liburiparser*" "libfreexl*" "libepsilon*"
)

# 遍历系统库目录，将匹配的文件复制到挂载的 /output 目录
for PATTERN in "${PATTERNS[@]}"; do
    find /usr/lib /lib -name "$PATTERN" -exec cp -Lv {} /output/ \;
done

echo "✅ Extraction complete."
# 退出容器
exit
```

执行完毕后，在宿主机的当前目录下会生成一个 ALAS_libs 文件夹，其中包含了所有需要的旧版 .so。

请将此文件夹完整上传至树莓派的 ~/ALAS/ 目录下。

#### 4.7.3 构建私有库环境

ALAS_libs 文件夹上传至树莓派后，还需要修复其中库文件的软链接。

Linux 动态链接器加载库时，通常寻找简短的 **SONAME**（如 libdap.so.27）；
而从容器复制出的文件通常是带完整版本号的全名（如 libdap.so.27.0.4）。

需要手动建立这种映射关系。

在树莓派终端执行：

```bash
# 进入我们的私有库目录
cd ~/ALAS/ALAS_libs

# 批量修复关键库的软链接 (Symlink Repair)
# 语法：ln -sf [真实文件全名] [加载器寻找的短名]

# 1. HDF5 家族
ln -sf libhdf5_serial.so.103.* libhdf5_serial.so.103
ln -sf libhdf5_serial_hl.so.100.* libhdf5_serial_hl.so.100

# 2. GDAL 网络依赖 (DAP & NetCDF)
ln -sf libdap.so.27.* libdap.so.27
ln -sf libdapclient.so.6.* libdapclient.so.6
ln -sf libnetcdf.so.18.* libnetcdf.so.18

# 3. 空间数据依赖
ln -sf libspatialite.so.7.* libspatialite.so.7
ln -sf libgeotiff.so.5.* libgeotiff.so.5

# 4. 基础计算库
ln -sf libgfortran.so.5.* libgfortran.so.5
ln -sf libsz.so.2.* libsz.so.2

echo "✅ 动态链接库索引重建完成。"
```

#### 4.7.4 启动脚本

为了彻底解决因新旧库符号不兼容而导致的 undefined symbol，单纯设置 LD_LIBRARY_PATH 是不够的。

必须使用 LD_PRELOAD 强制系统在启动程序时，最优先加载指定的旧版核心库。

在 ~/ALAS/AzurLaneAutoScript/ 下创建 run.sh：

```bash
#!/bin/bash

# ==========================================
# ALAS 兼容性启动脚本
# ==========================================

# 私有库绝对路径 (请根据实际情况修改 'pipi' 为你的用户名)
LIB_DIR="/home/pipi/ALAS/ALAS_libs"

# --- 1. 构建强制预加载名单 (Preload List) ---
# 必须按依赖顺序排列：底层 -> 上层
# 这些库将无视系统自带版本，强制使用私有目录下的版本
PRELOAD_LIST=""

# [Level 0] 加密与安全 (解决 OpenSSL 3.0 兼容性)
PRELOAD_LIST="${PRELOAD_LIST}:${LIB_DIR}/libcrypto.so.1.1"
PRELOAD_LIST="${PRELOAD_LIST}:${LIB_DIR}/libssl.so.1.1"

# [Level 1] 核心数据格式 (解决 HDF5/NetCDF undefined symbol)
PRELOAD_LIST="${PRELOAD_LIST}:${LIB_DIR}/libhdf5_serial.so.103"
PRELOAD_LIST="${PRELOAD_LIST}:${LIB_DIR}/libhdf5_serial_hl.so.100"
PRELOAD_LIST="${PRELOAD_LIST}:${LIB_DIR}/libnetcdf.so.18"

# [Level 2] 网络与数据访问 (解决 libdap 符号缺失)
PRELOAD_LIST="${PRELOAD_LIST}:${LIB_DIR}/libdap.so.27"
PRELOAD_LIST="${PRELOAD_LIST}:${LIB_DIR}/libdapclient.so.6"

# [Level 3] 空间数据库 (预防性加载)
PRELOAD_LIST="${PRELOAD_LIST}:${LIB_DIR}/libspatialite.so.7"
PRELOAD_LIST="${PRELOAD_LIST}:${LIB_DIR}/libodbc.so.1"

# --- 2. 注入环境变量 ---

# 设置库查找路径 (让程序能找到其他非强制加载的依赖)
export LD_LIBRARY_PATH="${LIB_DIR}:${LD_LIBRARY_PATH}"

# 启用预加载 (去除开头的冒号)
export LD_PRELOAD="${PRELOAD_LIST#:}"

# --- 3. 启动程序 ---
echo "🚀 Starting ALAS with forced legacy dependencies..."
echo "📚 Lib Path: ${LIB_DIR}"
echo "💉 Injecting: SSL, HDF5, DAP, NetCDF..."

# 启动 Python 脚本
python gui.py
```

最后，授予该脚本执行权限并运行它：

```bash
chmod +x run.sh
./run.sh
```

该启动方式会优先加载私有旧版依赖，并尽量减少对宿主机 Debian 13 的影响。

然而，当我们通过新脚本启动 ALAS 后，一个熟悉错误再次出现在了终端上：

```bash
error: OpenCV /tmp/pip-req-build-eupppqr2/opencv/modules/imgproc/src/templmatch.cpp:1163: error:
(-215:Assertion failed) (depth == CV_8U || depth == CV_32F) && type == _templ.type() &&
_img.dims() <= 2 in function 'matchTemplate'
```

该错误与软链接方案中的报错一致。

结论是：无论软链接还是 LD_PRELOAD 注入，如果 Python 包版本与底层 .so 实际版本不一致，依然会触发同类 ABI/类型问题。

即，加载方式改变了，但根因（组件版本错配）没有消除。

### 4.8 海图识别问题

此时点击与滑动功能已可用，剩余问题为**海图识别失败**。

表现为识别地图元素时触发底层错误，自动化流程中断。

#### 4.8.1 简单尝试

为定位问题，做了两类尝试：

1. 更换 opencv-python 版本：我们尝试了多个不同版本的 opencv-python 包（4.5.1.48，4.5.5.64，4.7.0.72），试图找到一个能与我们现有环境（无论是系统库还是私有库）兼容的版本，但均以失败告终，总会引发新的依赖冲突或运行时错误。
2. 修改 .so 组合：再次回到调整 .so 的思路上，但无论是通过软链接还是 LD_PRELOAD，都无法搭建出一个能让图像识别功能正常工作的环境。

结论是：仅通过“从 Debian 11 容器复制 .so 到 Debian 13”无法建立完整兼容链路。

该方式难以保证 Python 包、底层库与运行时之间的 ABI 一致性，图像处理模块最先暴露问题。

#### 4.8.2 尝试容器

由于宿主机方案未收敛，转向**将 ALAS 整体运行在 Docker 容器中**，以获得完整隔离。

然而，这条路也碰到了各种问题：

- 官方 Docker 镜像：ALAS 官方未提供 arm64 镜像。先在腾讯云测试 x86 官方镜像，发现部分配置已过时，无法直接复用。
- 远程部署：尝试本地部署 ALAS + 云端 frp 中继远程控制树莓派 Waydroid。实测往返延迟约 100 ms，影响响应与稳定性，未采用。

#### 4.8.3 构建 Docker 环境

综合评估后，下一步为：**在树莓派本地从零构建适用于 ALAS 的 arm64 Docker 容器**。

若该路线失败，再执行备选方案：在 Debian 13 上从源码编译所需 OpenCV 版本。

### 4.9 另一种方向的思考

前述路径主要聚焦环境兼容，但海图识别问题仍未消除。

在推进 Docker 前，转向代码层排查：直接检查 ALAS 模板匹配实现。

定位结果：报错发生在 matchTemplate。输入截图是灰度图，而部分模板仍为彩色图，二者维度/类型不一致，触发 OpenCV 断言失败。

对应修复思路是：在匹配前统一模板与输入图像格式（灰度化模板）。

### 4.10 修改源码解决海图识别问题（有漏洞）

具体实施步骤如下：

#### 4.10.1 固定 opencv-python-headless 版本

在此前基于 LD_PRELOAD 依赖注入的版本后进行操作，将 opencv-python-headless 降级到 4.5.5.64。

```bash
pip uninstall opencv-python-headless
pip install opencv-python-headless==4.5.5.64
```

#### 4.10.2 修改 ALAS 源码

对 ALAS 源码中两处与敌人类型预测相关的文件进行修改，强制在模板匹配前，将模板图像也转换为灰度图。

文件一：AzurLaneAutoScript/module/map_detection/os_grid.py

在此文件中，为 predict_enemy_genre 函数加入了动态格式检查与转换逻辑。

```python
def predict_enemy_genre(self):
    # 1. 截取屏幕并转为灰度
    image = rgb2gray(self.relative_crop((-0.5, -1, 0.5, 0), shape=(60, 60)))

    # 2. 遍历普通敌人模版
    for name, template in self._os_template_enemy.items():
        # [Pipi注] 动态修复：如果模版是彩色的，强制转为灰度以匹配截图
        if isinstance(template.image, list):
            template.image = [rgb2gray(img) if img.ndim == 3 else img for img in template.image]

        if template.match(image):
            return name

    # 3. 截取上方区域并转为灰度
    image = rgb2gray(self.relative_crop((-0.5, -2, 0.5, -1), shape=(60, 60)))

    # 4. 遍历上方敌人模版 (如旗舰等)
    for name, template in self._os_template_enemy_upper.items():
        # [Pipi注] 动态修复：同上，强制转灰度
        if isinstance(template.image, list):
            template.image = [rgb2gray(img) if img.ndim == 3 else img for img in template.image]

        if template.match(image):
            return name

    return None
```

文件二：AzurLaneAutoScript/module/map_detection/grid_predictor.py

同样地，在 grid_predictor.py 的 predict_enemy_genre 函数中，也在模板匹配前加入了相同的灰度转换逻辑。

```python
def predict_enemy_genre(self):
    if self.config.MAP_SIREN_HAS_BOSS_ICON:
        if self.enemy_scale:
            return ''
        image = self.relative_crop((-0.55, -0.2, 0.45, 0.2), shape=(50, 20))
        image = color_similarity_2d(image, color=(255, 150, 24))
        if image[image > 221].shape[0] > 200:
            if TEMPLATE_ENEMY_BOSS.match(image, similarity=0.6):
                return 'Siren_Siren'
    if self.config.MAP_SIREN_HAS_BOSS_ICON_SMALL:
        if self.relative_hsv_count(area=(0.03, -0.15, 0.63, 0.15), h=(32 - 3, 32 + 3), shape=(50, 20)) > 100:
            image = self.relative_crop((0.03, -0.15, 0.63, 0.15), shape=(50, 20))
            image = color_similarity_2d(image, color=(255, 150, 33))
            if TEMPLATE_ENEMY_BOSS.match(image, similarity=0.7):
                return 'Siren_Siren'

    image_dic = {}
    scaling_dic = self.config.MAP_ENEMY_GENRE_DETECTION_SCALING
    for name, template in self.template_enemy_genre.items():
        if template is None:
            logger.warning(f'Enemy detection template not found: {name}')
            logger.warning('Please create it with dev_tools/relative_record.py or dev_tools/relative_crop.py, '
                           'then place it under ./assets/<server>/template')
            raise ScriptError(f'Enemy detection template not found: {name}')

        short_name = name[6:] if name.startswith('Siren_') else name
        scaling = scaling_dic.get(short_name, 1)
        scaling = (scaling,) if not isinstance(scaling, tuple) else scaling
        for scale in scaling:
            if scale not in image_dic:
                shape = tuple(np.round(np.array((60, 60)) * scale).astype(int))
                # 这里是你的截图，已经被转成了灰度图
                image_dic[scale] = rgb2gray(self.relative_crop((-0.5, -1, 0.5, 0), shape=shape))

            # [Pipi注] 这里的魔法代码会把彩色的模版强制转成灰度
            if isinstance(template.image, list):
                template.image = [rgb2gray(img) if img.ndim == 3 else img for img in template.image]

            if template.match(image_dic[scale], similarity=self.config.MAP_ENEMY_GENRE_SIMILARITY):
                return name

    return None
```

完成修改并重启 ALAS 后，海图识别恢复，流程可继续执行。

> 本阶段方案为“依赖注入 + 局部源码修复”，并非仅靠源码修改。

### 4.11 活动图识别问题与解决（2025.12.20 新增）

此前，我们通过在 module/map_detection/os_grid.py 与
module/map_detection/grid_predictor.py 中增加灰度转换逻辑，
解决了特定场景下的 OpenCV matchTemplate 报错。

但在列克星敦 II 活动图识别中，同类 C++ 断言错误再次出现。

经过细致排查，我们确认了问题的核心依然是 cv2.matchTemplate 函数对于输入图像类型的一致性要求：

当截图输入 image 是灰度图（2 维）时，用于匹配的 template 图像仍是彩色图（3 维），
导致类型不匹配并报错。此前修改未覆盖 ALAS 中所有调用 matchTemplate 的路径。

为覆盖所有调用路径，改为修改 ALAS 底层模板匹配实现，使相关调用统一执行图像格式对齐。

解决方案：修改 module/base/template.py

#### 4.11.1 还原

将 4.10 中对 os_grid.py 和 grid_predictor.py 的所有源码修改还原回 ALAS 的原始状态。

#### 4.11.2 修改代码

保持此前的所有环境依赖不变，打开 module/base/template.py，找到第 132 行，添加以下代码。

```python
    def match(self, image, scaling=1.0, similarity=0.85):
        # ... (此处为原始代码，保持不变) ...
        if self.is_gif:
            for template in self.image:
                # =========== Pipi ===========
                # 如果输入图像是灰度的 (2维)，而模板图像是彩色的 (3维)，强制把模板图像转换为灰度
                if image.ndim == 2 and template.ndim == 3:
                    template = cv2.cvtColor(template, cv2.COLOR_RGB2GRAY)
                # =========== Pipi ===========
                res = cv2.matchTemplate(image, template, cv2.TM_CCOEFF_NORMED)
        # ... (此处为原始代码，保持不变) ...
```

同样的，找到 270 行，添加以下代码。

```python
    def match_multi(self, image, scaling=1.0, similarity=0.85, threshold=3, name=None):
        # ... (此处为原始代码，保持不变) ...
        if self.is_gif:
            result = []
            for template in self.image:
                # =========== Pipi ===========
                # 如果输入图片是黑白的(2维)，而模版是彩色的(3维)，强制把模版转黑白
                if image.ndim == 2 and template.ndim == 3:
                    template = cv2.cvtColor(template, cv2.COLOR_RGB2GRAY)
                # =========== Pipi ===========
                res = cv2.matchTemplate(image, template, cv2.TM_CCOEFF_NORMED)
        # ... (此处为原始代码，保持不变) ...
```

测试结果显示，本次对底层 template.py 的修正可覆盖活动图文字识别在内的同类类型不匹配问题。

当前版本在树莓派 5 上运行稳定性明显提升。

## 五、访问与控制

部署完成后，需要稳定的远程访问方案。

### 5.1 realvnc

RealVNC 是树莓派系统自带的远程桌面方案。在同一局域网内，安装 VNC Viewer 并输入树莓派 IP 即可连接。

实测其带宽占用较高，不适合低带宽远程场景。

### 5.2 NoMachine

非局域网场景下曾测试 NoMachine。由于 Waydroid 依赖 Wayland，而 NoMachine 在该环境兼容性不足，因此未采用。

### 5.3 RustDesk

RustDesk 对 Wayland 支持较好。通过在阿里云部署自建服务，完成调试后可稳定远程控制树莓派桌面。

### 5.4 通过加密 frp 访问 ALAS Web 界面

ALAS Web 界面可用于日常管理。为减少树莓派本地浏览器占用，并支持外网访问，本文采用加密 frp 进行内网穿透。

该方式可在外部网络直接访问 ALAS 管理页面，无需在树莓派本机进行图形操作。

### 5.5 最终效果

{% asset_img e69dcb862b403c2aaa95058225460320_720.png VNC + frp %}

## 六、第一版方案的总结与展望

本文完成了树莓派 5 部署 ALAS 的可用闭环。

当前稳定方案为“LD_PRELOAD 依赖注入（解决滑动） + 底层模板匹配修正（解决海图识别）”。后续可继续验证：

- 简化方案验证：在软链接路径上直接叠加源码修正，评估是否可降低部署复杂度。
- 探索方案 2：在 Debian 13 **从源码完整编译 ALAS 所需 OpenCV 版本**，进一步降低兼容性风险。

以上过程可为 arm64 场景下的 ALAS 部署提供参考。

如有更新，将继续补充实测结果与可复用脚本。

## 七、第一版致谢

感谢 [nnieie](https://github.com/nnieie) 共同完成部署与排错。此次实践共耗时约 3 天、27 小时。

感谢 [blueinsane0727](https://github.com/blueinsane0727)，她说致谢随便写，那就不写了。

感谢神秘港航提供的活动室。

感谢买一送一的香飘飘。

感谢 20-12 的美团优惠券。

{% asset_img b9a3595985a064eb3fbbac70638a74f6.jpg 烧烤 %}

## 八、安卓机（pipi5） + Win 真机局域网运行 ALAS（2026.05.04 新增）

前七章是第一版历史方案，后续路线以八、九章为准。

### 8.1 原方案实测效果以及近期

事实上，在实测过程中，pipi5 始终处于超频状态，控制效果并不好。

随着考研周期的到来，电脑闲置了下来，所以改为在 Win 真机上运行 mumu 模拟器和 ALAS。

本以为就这样过去了，然而事实证明，只要电脑运行其他东西（例如下资料和看网课），mumu 模拟器和 ALAS 就会因为本机性能实在过于差劲而崩溃。

在 4 月初时，尝试在 pipi5 上部署[明石源](https://github.com/wess09/AzurPilot)提供的 docker 运行 ALAS，然而实测效果连原本的方案都不如。

直到昨日和 [nnieie](https://github.com/nnieie) 闲聊时，他说可以试试刷一个安卓系统。

阅读官方[传统云手机文档](https://www.perfare.net/archives/1804)后并进行截图和点击尝试，发现可行。

### 8.2 网络连接与 ADB 控制

在树莓派刷了一个 [AOSP16](https://konstakang.com/devices/rpi5/AOSP16/) 后，使用 mini hdmi 线连接显示器先进行网络连接。

亦可使用双头 usb 线结合 [scrcpy](https://github.com/Genymobile/scrcpy/) 进行访问。

需要注意的是，该安卓系统在检测是否有网络的时候，默认使用国外网络测试，因此使用如下命令关闭网络连通性检测：

```bash
adb shell "settings put global captive_portal_mode 0"
adb shell "settings put global captive_portal_detection_enabled 0"
adb shell "settings put global network_avoid_bad_wifi 0"
```

连接上网络后，即可使用 [scrcpy](https://github.com/Genymobile/scrcpy/) 进行无线访问控制，以便人介入控制。

> 在连接网络的过程，如果电脑供电不算很足，即普通操作可以运行，但只要进行复杂网络握手操作就崩溃。
>
> 可以尝试先添加该网络再连接，如此就不会崩溃。

开启 pipi 5 本身对有线和无线 adb 控制权限后，进入路由器查看 pipi5 的 ip 地址，随后在 ALAS 的控制界面输入 ip:5555，即完成配置。

截图方案使用 ADB_nc，延迟约为 400ms，点击方案使用 MaaTouch，延迟约为 50ms。

体感感受下来，使用 pipi5 + debian13 同时跑碧蓝航线和 ALAS，进图时长约为 10s；

使用联想小新 13 + mumu 模拟器同时跑碧蓝航线和 ALAS，进图时长约为 5s（在内存使用紧张情况下退化为 10s）；

使用联想小新 13 + pipi5 + AOSP16 在局域网下，前者跑 ALAS，后者跑碧蓝航线，进图时长约为 3s。

显然是有所进步的。

### 8.3 可介入控制（2026.05.10 新增）

#### 8.3.1 通过 obs / PotPlay 查看实时画面 + 蓝牙鼠标 + 蓝牙键盘

由于使用 ALAS 是半自动脚本，仍需要人类介入（如更换队伍等）。

使用 [scrcpy](https://github.com/Genymobile/scrcpy/) 控制延迟非常大，且十分消耗树莓派的性能。

此外，pipi5 不可能一直占用显示屏，因此购买一块 ms2131 采集卡，使用 obs 或 PotPlay 查看实时画面（延迟约为 100ms），并配合蓝牙鼠标和键盘控制。

{% asset_img 54a6fe6e2f86f6baad90dd32c3459940.jpg ms2131 %}

然而在实际使用过程中，仍然会出现一个问题：采集卡输出的画面会出现撕裂、黑屏等现象。

经排查，上述问题仍不清楚具体原因，但换一个 mini hdmi 接口，问题就迎刃而解了。

#### 8.3.2 基于 USB 的预览

由于不可能一直开启 obs 或 PotPlay，我们基于明石源新增了 USB 预览功能。

该功能可以直接拿到采集卡的画面，预览窗口捕获鼠标键盘事件，通过本地服务交给 ALAS，再有当前的控制方式发送到 pipi5.

首先把 USB 采集卡作为新的截图方式接入，具体是新增 `module/device/method/usb_capture.py`，然后在 `module/device/screenshot.py` 里继承 `UsbCapture` 并注册：

```python
'usb_capture': self.screenshot_usb_capture
```

随后在配置项加入 `ScreenshotMethod = usb_capture`，并新增采集卡相关配置：

- `UsbCaptureDevice`
- `UsbCaptureBackend`
- `UsbCaptureWidth`
- `UsbCaptureHeight`
- `UsbCaptureFps`

默认配置是：

```text
device=0
backend=auto
width=1280
height=720
fps=30
```

同时还补了几个容易漏的边缘点：

- HTTP 控制模式下放行 `usb_capture`，否则初始化检查会把它当非法截图方式。
- 资源释放时关闭 OpenCV 采集卡句柄，避免 ALAS 退出后采集卡仍被占用。
- 配置生成链路同步 `argument.yaml`、`args.json`、`config_generated.py`、`template.json` 和多语言 i18n。

然而在第一次实机启动时，日志停在：

```text
Opening USB capture device: 0, backend=auto
[Device Orientation] 0 (Normal)
MaaTouch stream connected
max_contact: 10; max_x: 1280; max_y: 720; max_pressure: 255
```

这里是另一个预初始化线程打出了 MaaTouch 日志，主线程卡在 OpenCV 打开采集卡或设置采集参数上。

修改方法如下：

- Windows 下 `UsbCaptureBackend = auto` 时优先用 `dshow`，避免 OpenCV 默认选到容易卡死的 MSMF/CAP_ANY。
- 给打开设备、设置分辨率/帧率、读第一帧加超时。
- 出错时明确提示试 `dshow` 或 `msmf`，不再静默卡死。

随后需要确认采集卡是哪个 OpenCV 设备号，通过系统摄像头列表或 probe 脚本确认 OpenCV 设备号。

然而，最初实现的 USB 预览窗口是挂在 `screenshot_usb_capture()` 上的，只有脚本需要截图时才刷新。由于 ALAS 任务逻辑本来就会等待、识别、点击，截图频率可能只有 1 到 3fps，看起来像预览很卡。

改法如下：

- USB 采集卡由后台线程持续 `cap.read()`。
- ALAS 截图函数只取最新缓存帧。
- 预览窗口从采集线程拿帧刷新，不再跟 ALAS 截图调用频率绑定。
- 超过几秒没有新帧就报错，避免拿旧画面继续点。

随后又把预览从 ALAS 生命周期里拆出来：

- WebUI 增加 `启动USB预览` / `停止USB预览`。
- 停止 ALAS 脚本不会关闭预览。
- 关闭预览也不会停止 ALAS。
- 原来的 `UsbCapturePreview` 配置项撤掉，避免用户误以为它仍是“随脚本启动”的预览开关。

但这带来一个新问题：很多采集卡/驱动不支持被两个进程同时打开。于是进一步改成“一个采集服务”模型：

```text
dev_tools/usb_capture_service.py
  -> 唯一打开采集卡
  -> ALAS 截图通过 localhost 向它要最新帧
  -> WebUI 预览窗口也由同一个服务显示/隐藏
```

这样 ALAS 和预览不会再抢同一个采集卡。服务模型落地后又修了两个窗口体验问题：

- WebUI 启动的预览不再在画面顶部叠加调试信息。
- 用户点窗口右上角关闭时，会自动把 `preview_enabled` 置为 false，不会下一帧又弹出来。

#### 8.3.3 基于 USB 的控制

前文所述仅为基于 USB 的预览，实际上应当让 USB 不仅可以看到画面，也可以用鼠标键盘控制设备。

实现逻辑思考如下：

- OpenCV 预览窗口可以接收鼠标和键盘事件。
- 坐标可以映射到 ALAS 固定的 `1280x720` 坐标系。
- 点击、拖动、右键、键盘按键可以转成 Android 输入事件。
- 最理想是通过 ALAS 的现有控制逻辑发送，而不是预览服务自己另开一套控制。

具体方案和优化如下：

1. 预览服务捕获鼠标 / 键盘事件，通过 localhost 发给正在运行的 ALAS 进程，由 ALAS 调用当前 `ControlMethod`。
2. 不启动 ALAS 调度器，只开预览窗口也能控制，增加懒加载 `Device` 的能力。
3. 进一步把控制对象预加载提前到启动 USB 预览阶段，而不是第一次点击才初始化，降低首次点击延迟。
4. 修复点击坐标二次缩放问题。OpenCV 鼠标回调给的已经是图像坐标，不应该再按窗口尺寸放大。
5. 修复拖动延迟。MaaTouch / minitouch 通用发送路径每次有约 50ms 等待，预览实时滑动改走无额外等待的专用发送路径。

至此，基本可以做到体感低延迟手动控制碧蓝航线，且可以在本机为英文输入法的前提下，调用 pipi5 内置的搜狗输入法，从而输入中文。

> 事实上，本节基于 USB 的预览与控制，实现过程杂糅在 8.4 节的 Fallback 自动校正之前。

#### 8.3.4 实际效果与仍需优化之处

用户可以通过如下方式自定义采集卡画面：

{% asset_img usbyulan.png USB 预览 %}

效果如下：

{% asset_img usbyulanshili.png USB 预览示例 %}

至此，我们已经打通 USB capture 作为 ALAS 的截图来源的基础链路：

- 系统能识别采集卡。
- OpenCV 能打开正确设备号。
- Windows 后端优先使用 DSHOW，避免 auto 卡死。
- 帧最终能统一成 `1280x720 RGB`。
- YUY2 高带宽、MJPG 稳定性等问题都有处理策略。
- 预览从跟随截图变成独立服务，避免低帧率和抢设备。
- WebUI 可以独立启动/停止预览。
- 预览窗口逐步支持点击、拖动、键盘输入。

然而，本节只是进行了可介入访问，释放了 scrcpy 对 pipi5 的消耗，但并没有提升通过 ADB_nc 截图的开销。

ADB_nc 截图开销如上一节所述，大致为 400ms，严重影响本机 ALAS 做决策。

因此想到可以通过采集卡进行截图获取。

### 8.4 基于 ms2131 的色差修正（2026.05.10 新增）

为了获得更低延迟、更接近真实显示输出的画面，我们进一步让 ALAS 直接使用 USB capture 画面进行识别。

采集卡方案可以绕过模拟器截图接口的异常，也可以提升截图速度。经过测试，该方案截图速度大致为 100ms。

然而实测发现，采集卡画面和 ADB 截图并不完全等价，主要差异来源于廉价采集卡所带来的，人眼难以辨别，但程序可以辨别的色差。

> 当然，如果你的采集卡是几百块钱的高端卡，那就基本不会出现色差。

#### 8.4.1 问题来源

USB capture 能用于截图和预览后，在大多数情况下都没有问题，但是会在某些特定帧（固定页面）产生识别问题。

第一个明显的识别问题出现在委托奖励页。

现象是：点击委托奖励没问题 -> 进入委托成功 S / EXP 页面后 -> EXP_INFO_S_REWARD 无法识别 -> GameStuckError。

同一张画面用 ADB 截图识别正常，用 USB capture 截图识别失败。

排查后发现不是按钮位置问题，而是颜色问题。这个模板期望的关键颜色大约是：

```text
(233, 241, 127)
```

USB capture 对应区域测出来接近：

```text
(245.6, 255.0, 134.2)
```

差值超过了模板颜色阈值。人眼看起来只是更亮一点，但对 ALAS 的 `match_template_color` 来说已经是 false。

经过排查，这些会识别不出来的帧数量不多（个位数量级），且是固定、可复现的。

所以可以选取这些帧，通过这些帧 USB 截图和 ADB_nc 截图的差异，来套用到全局的色差修正。

报错的页面当时发现仅“委托成功”、“战斗胜利”、“演习胜利”，因此截取这三张即可，后续发现“退役”界面无法识别，再次增加该界面。

#### 8.4.2 ADB 截图和 USB 截图拟合 RGB 线性变换

第一版的思路是通过 USB 截图和 ADB_nc 截图拟合一个 RGB 线性变换：

```python
RGB_corrected = RGB_usb @ matrix + bias
```

也就是用 USB 图像作为输入，用 ADB 截图作为参考真值，求一个全局颜色矩阵。

在 ALAS 运行时指标类似：

```bash
Fitting RGB transform with 200000 sampled pixels...
Before: MAE=11.28, max=255.0
After : MAE=6.79, max=233.0
```

后来在更静态的页面上跑，效果更好：

```bash
Before: MAE=12.29, max=139.0
After : MAE=4.43, max=125.0
```

这说明校色方向是对的，但也暴露了一个限制：动态画面、粒子、动画和 USB / ADB 采样时间差会明显影响拟合质量。

同时，第一版校色文件写到了 `config\alas.usb_color.json` 文件下，这导致 WebUI 把它当成一个 ALAS 配置实例去扫描，出现异常。

后来改成专门目录：`config\usb_color\alas.json`，这样校色文件就不会再污染 ALAS 原有配置列表。

除此之外，这一版在尚未优化的情况下，每帧处理时长是 400ms，显然不能用于实际运行。

#### 8.4.3 从线性矩阵转向 LUT / 3D LUT

上一版的处理是直接算整个图像，因此在这里思考能不能按照像素修正。

若按屏幕坐标逐像素修正，容易过拟合，不适合游戏动态 UI；若按颜色值修正，更合理，也就是 LUT / 3D LUT。

所以第二版思路是尝试 LUT 和 3D LUT。它不是按屏幕位置修，而是学习 USB 的某个颜色值应该映射成 ADB 的哪个颜色值。

这一版仍主要在 Python / OpenCV 侧做实验和验证，因为很快想到了可以直接采用 C 加速。

#### 8.4.4 C 加速 LUT 应用

使用 LUT 或 3D LUT 如果每帧都用 Python 循环处理，开销会比较大，所以后面加了 C 加速实现：

```bash
dev_tools/usb_capture_lut_accel.c
dev_tools/build_usb_capture_lut_accel.bat
```

这里的主要过程是采用 OpenCV / Python 采样、拟合、验证、生成 LUT，在此基础上应用 C 加速把已经生成的 LUT 更快地应用到每一帧。

C 优化不是新的校色方式，而是性能优化。

#### 8.4.5 Fallback 全自动矫正（处于失败状态）

通过采用 C 加速的 LUT 应用，已经可以使几乎所有场景识别正确。

但是仍然碰到了一个较为棘手的场景，即 `YellowBookT3` 出现在军火商店时不进行购买，也就是说，在该场景下极少数物品由于色差无法识别。

由于商店刷新的物品、位置是随机的，几乎不可能存在两次相同商店场景。

所以问题出在物品识别上。

基于整个问题，提出一个尝试：当 USB 识别意思因色差失败时，回退至 ADB_nc 截图。

实测发现，该方案触发条件判定过宽，过于敏感，耗时大；且剩余的若干问题对脚本执行没有太大影响，因此回退至上个版本。

#### 8.4.6 色彩识别的剩余若干小问题

1. `YellowBookT3` 出现在军火商店时不进行购买。然而实测下来，在战术学院对 `YelloBookT3` 的识别是正确的，推测可能是因为 ALAS 本身在这两个场景下匹配模板不一致，目前的策略是每进行到该场景，就分别使用 ADB_nc 与 USB 截图，保留日志，待后续碰到情况后再进行处理
2. 3D 宿舍中将“浪漫满分”识别为“蛋糕礼盒”，从而导致花销氪金道具。这个问题发生在复杂的 ADB fallback 阶段，原因未完全确认，现代码已回退。但因为花销氪金道具，未进行后续测试，只是关闭了这个功能

#### 8.4.7 剩余小问题的不优雅解决（2026.05.15 新增）

上一节的问题 1 通过新增了一些模板得以解决。

事实上，不可能每次出现问题后都新增模板，所以直接为每个功能在当前功能的生命周期内，增加可选的强制使用 ADB 截图兜底。

### 8.5 其他问题的修复（2026.05.10 新增）

#### 8.5.1 在执行紧急委托时装备码输入失效

在执行紧急委托时，会出现如下报错：

```bash
FastInputIME started failedRetrying 1/3
OSError: FastInputIME started failed
```

通过排查可知 FastInputIME 已经是当前输入法，问题是 uiautomator2 在文本框尚未真正建立输入连接时就调用 `send_action`。

解决方案是在 `module/device/input.py` 里增加更稳的等待，不在每个装备码调用点到处加 sleep。

#### 8.5.2 GitHub 工作流

将 GitHub 工作流的上游改为明石源，即是 fork 的 upstream 指向 `wess09/AzurPilot`，再 `merge/rebase`。

### 8.6 基于 ms2131 的采集优化结果（2026.05.10 新增）

最终效果如图：

{% asset_img 5e69a7bb33ae9dc7834b0937a987baa9.png 基于 ms 2131 采集优化最终效果 %}

## 九、第二版致谢（2026.05.10 新增）

事实上，在第二版本人仅提供有限的思路和整理文档，代码修改工作全部由 [nnieie](https://github.com/nnieie)，感谢他~~与 Codex~~ 的付出。

最后附上 [nnieie](https://github.com/nnieie) 基于[明石源](https://github.com/wess09/AzurPilot)修改的源 [nnieie 源](https://github.com/nnieie/AzurPilot)。
