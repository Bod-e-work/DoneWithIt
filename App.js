import {registerRootComponent} from 'expo';


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView , StatusBar, Platform, Dimensions } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

import WelcomeScreen from './App/Screens/WelcomeScreen';
import ViewImageScreen from './App/Screens/ViewImageScreen';
import AppText from './App/components/AppText/AppText';
import CardComponent from './App/Screens/CardComponent';

export default function App() {

  // console.log(Dimensions.get("screen"));

  return (
    <View>
      <WelcomeScreen />,
      <ViewImageScreen />,
      <CardComponent />
    </View>
  );
}


