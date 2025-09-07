#!/bin/bash

echo "🐾 PawPal 图标生成脚本"
echo "正在为您的可爱小狗照片创建应用图标..."

# 检查是否有原始图片文件
if [ ! -f "puppy-with-flower.jpg" ]; then
    echo "❌ 请将小狗照片保存为 'puppy-with-flower.jpg' 到项目根目录"
    echo "📝 图片要求："
    echo "   - 格式：JPG/PNG"
    echo "   - 建议最小尺寸：1024x1024"
    echo "   - 主体居中，背景简洁"
    exit 1
fi

echo "📸 找到原始图片文件"

# 检查 ImageMagick 是否安装
if ! command -v convert &> /dev/null; then
    echo "📦 ImageMagick未安装，正在安装..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        if command -v brew &> /dev/null; then
            brew install imagemagick
        else
            echo "❌ 请先安装 Homebrew 或手动安装 ImageMagick"
            exit 1
        fi
    else
        echo "❌ 请手动安装 ImageMagick"
        exit 1
    fi
fi

echo "🎨 开始生成应用图标..."

# 创建应用图标 (1024x1024, 圆角)
convert "puppy-with-flower.jpg" \
    -resize 1024x1024^ \
    -gravity center \
    -extent 1024x1024 \
    -background white \
    \( +clone -alpha extract \
       -draw 'fill black polygon 0,0 0,102 102,0 fill white circle 102,102 102,0' \
       \( +clone -flip \) -compose Multiply -composite \
       \( +clone -flop \) -compose Multiply -composite \
    \) -alpha off -compose CopyOpacity -composite \
    "assets/icon.png"

echo "✅ 应用图标创建完成: assets/icon.png"

# 创建启动画面背景
convert "puppy-with-flower.jpg" \
    -resize 400x400^ \
    -gravity center \
    -extent 400x400 \
    -background "#2563eb" \
    -gravity center \
    -extent 1284x2778 \
    "assets/splash.png"

echo "✅ 启动画面创建完成: assets/splash.png"

# 创建自适应图标 (Android)
convert "assets/icon.png" \
    -resize 1024x1024 \
    -background transparent \
    -gravity center \
    -extent 1024x1024 \
    "assets/adaptive-icon.png"

echo "✅ Android自适应图标创建完成: assets/adaptive-icon.png"

# 创建网页图标
convert "assets/icon.png" \
    -resize 32x32 \
    "assets/favicon.png"

echo "✅ 网页图标创建完成: assets/favicon.png"

echo ""
echo "🎉 所有图标生成完成！"
echo ""
echo "📁 生成的文件："
echo "   - assets/icon.png (1024x1024) - 应用图标"
echo "   - assets/splash.png (1284x2778) - 启动画面" 
echo "   - assets/adaptive-icon.png (1024x1024) - Android图标"
echo "   - assets/favicon.png (32x32) - 网页图标"
echo ""
echo "🚀 现在可以运行发布脚本了："
echo "   ./deploy-ios.sh"