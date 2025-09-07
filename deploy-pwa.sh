#!/bin/bash

echo "🚀 PawPal PWA 部署脚本"
echo "=========================="

echo "📋 检查PWA文件..."
if [ -f "demo.html" ] && [ -f "manifest.json" ] && [ -f "sw.js" ]; then
    echo "✅ 所有PWA文件就绪"
else
    echo "❌ PWA文件缺失，请先完成配置"
    exit 1
fi

echo ""
echo "🌐 免费部署选项："
echo ""
echo "选项1: Vercel (推荐)"
echo "-------------------"
echo "1. 注册 https://vercel.com (GitHub账号一键注册)"
echo "2. 运行: vercel login"
echo "3. 运行: vercel --prod"
echo "4. 获得免费永久链接: https://pawpal-xxx.vercel.app"
echo ""

echo "选项2: Netlify"  
echo "---------------"
echo "1. 访问 https://netlify.com"
echo "2. 拖拽整个PawPal文件夹到页面"
echo "3. 获得免费链接: https://xxx.netlify.app"
echo ""

echo "选项3: GitHub Pages"
echo "------------------"
echo "1. 创建GitHub仓库 (如: pawpal)"
echo "2. 上传所有文件"
echo "3. 设置 Pages: Settings → Pages → Source"
echo "4. 获得链接: https://username.github.io/pawpal"
echo ""

echo "选项4: 本地分享 (立即可用)"
echo "------------------------"
echo "如果您在同一WiFi下："
LOCAL_IP=$(ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1' | head -1)
echo "📱 手机访问: http://$LOCAL_IP:8888/demo.html"
echo "💻 电脑访问: http://localhost:8888/demo.html"
echo ""

echo "🎯 推荐步骤："
echo "1. 先本地测试: python3 -m http.server 8888"
echo "2. 手机安装PWA验证功能"
echo "3. 注册Vercel免费部署到全球"
echo ""

echo "📱 PWA安装指南："
echo "iOS: Safari打开 → 分享 → 添加到主屏幕"
echo "Android: Chrome打开 → 会提示'安装PawPal'"
echo ""

echo "🎉 您的小狗即将成为全球宠物应用明星！"