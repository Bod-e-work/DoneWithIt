import React, {useEffect, useState} from 'react';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View, SafeAreaView , Platform, Dimensions, TextInput, Button, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import jwtDecode from 'jwt-decode';
import { AppLoading } from 'expo';




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
import AuthContext from './App/auth/context';
import storage from './App/auth/storage';
import { navigationRef } from './App/navigation/rootNavigation';


export default function App() {
const [user, setUser] = useState();
const [isReady, setIsReady] = useState(false);

const restoreUser = async () => {
  const user = await storage.getUser();
  if (user) setUser(user);
}

if (!isReady)
  return <AppLoading startAsync={restoreUser } onFinish={() => setIsReady(true)} />

return (
  <AuthContext.Provider value={{ user, setUser}}>
    <OfflineNotice />
    <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
      {user ? <AppNavigator/> : <AuthNavigator />}
    </NavigationContainer>
  </AuthContext.Provider>
)
};






