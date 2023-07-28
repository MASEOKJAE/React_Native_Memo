import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Home from './screens/home';
import * as Font from 'expo-font';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

const LoadingScreen = () => {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    getFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <LoadingScreen />;
  } else {
    return <Home />;
  }
}
