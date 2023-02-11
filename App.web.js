import React, {useEffect, useState} from 'react';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View, SafeAreaView , Platform, Dimensions, TextInput, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
import AppPicker from './App/components/Picker';
import LoginScreen from './App/Screens/LoginScreen';
import AppButton from './App/components/AppButton';
import { AppForm, AppFormField } from './App/components/forms';
import RegisterScreen from './App/Screens/RegisterScreen';
import ListingEditScreen from './App/Screens/ListingEditScreen';
import Icon from './App/components/Icons';
import PickerItem from './App/components/PickerItem';
import ImageInput from './App/components/ImageInput';
import Test from './App/components/Test';
import ImageInputList from './App/components/ImageInputList';
import AuthNavigator from './App/navigation/AuthNavigator';



export default function App() {

  (
    <RegisterScreen />
  );
}

