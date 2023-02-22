import React, {useEffect, useState} from 'react';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View, SafeAreaView , Platform, Dimensions, TextInput, Button, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";


import WelcomeScreen from './App/Screens/WelcomeScreen';
import ViewImageScreen from './App/Screens/ViewImageScreen';
import Card from './App/components/Card';
import MessagesScreen from './App/Screens/MessagesScreen';
import ListingDetailsScreen from './App/Screens/ListingDetailsScreen';
import ListingsScreen from './App/Screens/ListingsScreen';
import AccountScreen from './App/Screens/AccountScreen';
import Icons from './App/components/Icons';
import Screen from './App/components/Screen';
import AppTextInput from './App/components/TextInput';
import AppPicker from './App/components/AppPicker';
import LoginScreen from './App/Screens/LoginScreen';
import AppButton from './App/components/AppButton';
import { AppForm, AppFormField } from './App/components/forms';
import RegisterScreen from './App/Screens/RegisterScreen';
import ListingEditScreen from './App/Screens/ListingEditScreen';
import Icon from './App/components/Icons';
import PickerItem from './App/components/PickerItem';
import AuthNavigator from './App/navigation/AuthNavigator';
import ImageInput from './App/components/ImageInput';
import ImageInputList from './App/components/ImageInputList';
import NavigationTheme from './App/navigation/NavigationTheme';
import AppNavigator from './App/navigation/AppNavigator';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OfflineNotice from './App/components/OfflineNotice';



export default function App() {
//   const demo = async () => {
//     try {
//       await AsyncStorage.setItem('person', JSON.stringify({ id: 1 }));
//       const value = await AsyncStorage.getItem('person');
//       const person = JSON.parse(value);
//       console.log(person);
//     } catch (error) {
//       console.log(error);
//     }
//   }


// demo();

return (
  // const netInfo =  useNetInfo();

  // return netInfo.isInternetReachable ? <View></View> : <View></View>
  <>
    <OfflineNotice />
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  </>
)
};






