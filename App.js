import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import NavigationStack from './navigation/AppNavigation'

export default function App() {
  return <NavigationStack />;
}