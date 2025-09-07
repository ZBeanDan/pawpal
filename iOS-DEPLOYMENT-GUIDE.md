# 📱 PawPal iOS App Store 发布完整指南

## 🎯 发布清单

### Phase 1: 准备阶段 ✅
- [✅] 配置app.json (Bundle ID, 版本, 权限)
- [✅] 创建eas.json (构建配置)
- [✅] 准备隐私政策
- [✅] 编写App Store描述
- [✅] 创建发布脚本

### Phase 2: 资源准备 ⭐ **使用您的小狗照片！**
- [⭐] **创建应用图标** - 使用您提供的可爱小狗照片！
  - 📸 参考: `ICON-SETUP-GUIDE.md` 详细说明
  - 位置: `./assets/icon.png` (1024x1024px PNG)
  - 素材: 您的小狗衔花照片完美适合PawPal！
  - 要求: 方形、居中构图、背景简洁
  
- [⭐] **创建启动画面** - 配合小狗主题
  - 位置: `./assets/splash.png` (1284x2778px PNG)
  - 背景色: #2563eb (PawPal蓝色)
  - 设计: 中央显示小狗图标 + "PawPal" 文字

- [ ] **准备App Store截图** (建议尺寸)
  - iPhone 15 Pro Max: 1290 x 2796
  - iPhone 15: 1179 x 2556
  - 至少3-5张展示核心功能
  - 💡 可以在截图中也展示小狗相关的趣事内容

### Phase 3: Apple Developer 账户准备
- [ ] **Apple Developer Program** ($99/年)
  - 前往: https://developer.apple.com/programs/
  - 注册并验证账户

- [ ] **App Store Connect设置**
  - 前往: https://appstoreconnect.apple.com
  - 创建新应用记录
  - Bundle ID: `com.pawpal.app`

### Phase 4: 构建和提交
- [ ] **安装EAS CLI**
  ```bash
  npm install -g @expo/eas-cli
  ```

- [ ] **运行发布脚本**
  ```bash
  ./deploy-ios.sh
  ```

- [ ] **填写App Store Connect信息**
  - 应用描述 (使用 app-store-metadata.md)
  - 关键词
  - 截图上传
  - 定价设置

## 🔧 技术要求检查

### 应用配置
- ✅ Bundle Identifier: com.pawpal.app
- ✅ Version: 1.0.0
- ✅ Build Number: 1
- ✅ 相机权限说明已配置
- ✅ 照片库权限说明已配置

### 合规要求
- ✅ 隐私政策已准备
- ✅ 内容评级: 4+ (适合所有年龄)
- ✅ 不使用加密 (usesNonExemptEncryption: false)

### 功能完整性
- ✅ 核心功能: 宠物趣事记录
- ✅ 照片功能: 拍摄和选择
- ✅ 本地存储: SQLite
- ✅ 用户界面: React Native + Tamagui

## 📋 App Store Connect 填写指南

### 基本信息
- **应用名称**: PawPal
- **副标题**: 记录毛孩子的美好时光
- **主要语言**: 中文 (简体)

### 定价和销售
- **价格**: 免费
- **销售地区**: 中国大陆 + 其他地区

### 应用审核信息
- **演示账户**: 不需要 (无登录功能)
- **审核备注**: 参考 app-store-metadata.md

### 版本信息
- **版本号**: 1.0.0
- **版本更新说明**: 参考 app-store-metadata.md

## 🚀 发布流程

1. **准备阶段** (估时: 2-4小时)
   - 完成所有资源准备
   - 验证Apple开发者账户

2. **构建阶段** (估时: 30-60分钟)
   - 运行 `./deploy-ios.sh`
   - 等待EAS构建完成

3. **提交阶段** (估时: 1-2小时)
   - 填写App Store Connect信息
   - 上传截图和元数据
   - 提交审核

4. **审核等待** (估时: 1-7天)
   - Apple审核团队评估
   - 可能需要回复审核反馈

## ⚠️  注意事项

### 常见审核问题
1. **权限使用**: 确保权限描述清晰合理
2. **内容合规**: 避免涉及敏感内容
3. **功能完整**: 确保所有功能正常工作
4. **崩溃问题**: 测试应用稳定性

### 审核准备
- 在多个设备上测试应用
- 准备详细的功能说明
- 确保隐私政策可访问

## 📞 支持资源

### 官方文档
- [Expo发布指南](https://docs.expo.dev/submit/ios/)
- [App Store审核指南](https://developer.apple.com/app-store/review/guidelines/)
- [App Store Connect帮助](https://developer.apple.com/help/app-store-connect/)

### 社区资源
- [Expo Discord](https://discord.gg/expo)
- [React Native中文网](https://reactnative.cn/)

---

## 🎉 发布后

### 发布成功后的任务
- [ ] 监控用户反馈
- [ ] 准备后续版本更新
- [ ] 收集使用数据
- [ ] 规划新功能

### 营销推广
- [ ] 社交媒体宣传
- [ ] 朋友圈分享
- [ ] 宠物社区推广

祝PawPal发布成功！🐾✨