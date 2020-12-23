import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/Home/homeScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigator from './src/navigation/stackNavigator';
import TopTabNavigator from './src/navigation/topTabNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <TopTabNavigator/>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
