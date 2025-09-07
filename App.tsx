import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TamaguiProvider, Theme } from '@tamagui/core';
import config from './tamagui.config';
import HomeScreen from './src/screens/HomeScreen';
import CreateMomentScreen from './src/screens/CreateMomentScreen';
import PetProfileScreen from './src/screens/PetProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
              headerShown: false, // We'll use custom headers in screens
            }}
          >
            <Stack.Screen 
              name="Home" 
              component={HomeScreen}
            />
            <Stack.Screen 
              name="CreateMoment" 
              component={CreateMomentScreen}
            />
            <Stack.Screen 
              name="PetProfile" 
              component={PetProfileScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Theme>
    </TamaguiProvider>
  );
}