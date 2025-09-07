#!/usr/bin/env python3
"""
PawPal Icon Generator
将下载的小狗照片转换为应用所需的各种图标尺寸
"""

from PIL import Image, ImageDraw
import os

def create_app_icon(input_path, output_path, size=(1024, 1024)):
    """创建应用图标"""
    print(f"🎨 正在创建应用图标: {output_path}")
    
    # 打开原图
    img = Image.open(input_path)
    
    # 转换为RGBA模式以支持透明度
    img = img.convert('RGBA')
    
    # 计算裁剪区域以创建正方形
    width, height = img.size
    min_dim = min(width, height)
    
    # 居中裁剪
    left = (width - min_dim) // 2
    top = (height - min_dim) // 2
    right = left + min_dim
    bottom = top + min_dim
    
    img_cropped = img.crop((left, top, right, bottom))
    
    # 调整到目标尺寸
    img_resized = img_cropped.resize(size, Image.Resampling.LANCZOS)
    
    # 保存为PNG
    img_resized.save(output_path, 'PNG', quality=100)
    print(f"✅ 应用图标创建完成: {size[0]}x{size[1]}")

def create_splash_screen(input_path, output_path, size=(1284, 2778)):
    """创建启动画面"""
    print(f"🌟 正在创建启动画面: {output_path}")
    
    # 创建蓝色背景
    background = Image.new('RGBA', size, (37, 99, 235, 255))  # #2563eb
    
    # 打开并处理小狗图片
    img = Image.open(input_path)
    img = img.convert('RGBA')
    
    # 创建圆形图标 (400x400)
    icon_size = 400
    width, height = img.size
    min_dim = min(width, height)
    
    # 居中裁剪
    left = (width - min_dim) // 2
    top = (height - min_dim) // 2
    right = left + min_dim
    bottom = top + min_dim
    
    img_cropped = img.crop((left, top, right, bottom))
    img_icon = img_cropped.resize((icon_size, icon_size), Image.Resampling.LANCZOS)
    
    # 创建圆形遮罩
    mask = Image.new('L', (icon_size, icon_size), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, icon_size, icon_size), fill=255)
    
    # 应用圆形遮罩
    img_icon.putalpha(mask)
    
    # 将图标居中放置在背景上
    icon_x = (size[0] - icon_size) // 2
    icon_y = (size[1] - icon_size) // 2 - 200  # 稍微上移
    
    background.paste(img_icon, (icon_x, icon_y), img_icon)
    
    # 保存启动画面
    background.save(output_path, 'PNG', quality=100)
    print(f"✅ 启动画面创建完成: {size[0]}x{size[1]}")

def create_favicon(input_path, output_path, size=(32, 32)):
    """创建网页图标"""
    print(f"🌐 正在创建网页图标: {output_path}")
    
    img = Image.open(input_path)
    img = img.convert('RGBA')
    
    # 居中裁剪并调整尺寸
    width, height = img.size
    min_dim = min(width, height)
    
    left = (width - min_dim) // 2
    top = (height - min_dim) // 2
    right = left + min_dim
    bottom = top + min_dim
    
    img_cropped = img.crop((left, top, right, bottom))
    img_resized = img_cropped.resize(size, Image.Resampling.LANCZOS)
    
    img_resized.save(output_path, 'PNG', quality=100)
    print(f"✅ 网页图标创建完成: {size[0]}x{size[1]}")

def main():
    print("🐾 PawPal 图标生成器")
    print("使用您提供的可爱小狗照片创建应用图标...")
    print()
    
    # 文件路径
    input_file = "assets/puppy-original.jpg"
    
    if not os.path.exists(input_file):
        print(f"❌ 错误: 找不到文件 {input_file}")
        return
    
    # 创建各种图标
    print("📱 开始生成图标文件...")
    
    # iOS应用图标 (1024x1024)
    create_app_icon(input_file, "assets/icon.png", (1024, 1024))
    
    # Android自适应图标 (1024x1024)
    create_app_icon(input_file, "assets/adaptive-icon.png", (1024, 1024))
    
    # 启动画面 (1284x2778 - iPhone 15 Pro Max)
    create_splash_screen(input_file, "assets/splash.png", (1284, 2778))
    
    # 网页图标 (32x32)
    create_favicon(input_file, "assets/favicon.png", (32, 32))
    
    print()
    print("🎉 所有图标生成完成！")
    print()
    print("📁 生成的文件:")
    print("   ✅ assets/icon.png (1024x1024) - iOS/Android应用图标")
    print("   ✅ assets/adaptive-icon.png (1024x1024) - Android自适应图标")  
    print("   ✅ assets/splash.png (1284x2778) - 启动画面")
    print("   ✅ assets/favicon.png (32x32) - 网页图标")
    print()
    print("🚀 现在您可以运行发布脚本了:")
    print("   ./deploy-ios.sh")

if __name__ == "__main__":
    main()