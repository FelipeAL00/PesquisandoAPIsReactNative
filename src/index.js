import { NavigationContainer } from '@react-navigation/native';

import React from 'react';

import Routes from './routes';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </NavigationContainer>
  );
}
