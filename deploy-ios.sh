#!/bin/bash

# PawPal iOS App Store 发布脚本
# 使用前请确保已配置好所有必需的开发者账户信息

echo "🐾 开始PawPal iOS App Store发布流程..."

# 检查必需的工具
echo "📋 检查环境依赖..."

if ! command -v eas &> /dev/null; then
    echo "❌ EAS CLI未安装，正在安装..."
    npm install -g @expo/eas-cli
fi

if ! command -v expo &> /dev/null; then
    echo "❌ Expo CLI未安装，正在安装..."
    npm install -g @expo/cli
fi

echo "✅ 环境检查完成"

# 登录EAS
echo "🔐 请登录您的Expo账户..."
eas login

# 创建项目配置（如果不存在）
if [ ! -f "eas.json" ]; then
    echo "⚙️  初始化EAS项目配置..."
    eas build:configure
fi

# 更新应用版本
echo "📝 更新应用版本信息..."
echo "当前版本: $(grep -o '"version": "[^"]*' app.json | sed 's/"version": "//')"
echo "请在app.json中确认版本号和构建号是否正确"
read -p "按Enter键继续，或Ctrl+C取消..."

# 构建生产版本
echo "🏗️  开始构建iOS生产版本..."
echo "这可能需要15-30分钟时间..."
eas build --platform ios --profile production

# 等待构建完成
echo "⏳ 等待构建完成..."
echo "您可以在 https://expo.dev 查看构建进度"
echo "构建完成后，将自动进行下一步..."

# 提交到App Store
echo "📱 准备提交到App Store..."
echo "请确保您已在App Store Connect中创建了应用记录"
read -p "按Enter键继续提交，或Ctrl+C取消..."

eas submit --platform ios --profile production

echo "🎉 PawPal已成功提交到App Store!"
echo ""
echo "📋 接下来的步骤:"
echo "1. 前往 App Store Connect (https://appstoreconnect.apple.com)"
echo "2. 填写应用元数据信息"
echo "3. 上传应用截图"
echo "4. 设置定价和可用性"
echo "5. 提交审核"
echo ""
echo "📞 如遇问题，请参考:"
echo "- Expo文档: https://docs.expo.dev/submit/ios/"
echo "- App Store审核指南: https://developer.apple.com/app-store/review/guidelines/"

echo "🐾 祝PawPal审核顺利！"