module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      '@tamagui/babel-plugin',
      {
        components: ['@tamagui/core'],
        config: './tamagui.config.ts',
      },
    ],
    'react-native-reanimated/plugin',
  ],
};