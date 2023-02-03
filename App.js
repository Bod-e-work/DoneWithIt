import {registerRootComponent} from 'expo';


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView , Platform, Dimensions } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

import WelcomeScreen from './App/Screens/WelcomeScreen';
import ViewImageScreen from './App/Screens/ViewImageScreen';
import AppText from './App/components/AppText';
import Card from './App/components/Card';
import MessagesScreen from './App/Screens/MessagesScreen';

export default function App() {

  // console.log(Dimensions.get("screen"));

  return (
      <MessagesScreen />
  );
}


