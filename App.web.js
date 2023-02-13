import React, {useEffect, useState} from 'react';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View, SafeAreaView , Platform, Dimensions, TextInput, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from './App/Screens/AccountScreen';
import AuthNavigator from './App/navigation/AuthNavigator';
import AppButton from './App/components/AppButton';
import AppPicker from './App/components/AppPicker';
import { AppForm, AppFormField } from './App/components/forms';
import AppTextInput from './App/components/TextInput';
import Card from './App/components/Card';
import Icons from './App/components/Icons';
import ImageInput from './App/components/ImageInput';
import ImageInputList from './App/components/ImageInputList';
import ListingDetailsScreen from './App/Screens/ListingDetailsScreen';
import ListingEditScreen from './App/Screens/ListingEditScreen';
import ListingsScreen from './App/Screens/ListingsScreen';
import LoginScreen from './App/Screens/LoginScreen';
import MessagesScreen from './App/Screens/MessagesScreen';
import PickerItem from './App/components/PickerItem';
import RegisterScreen from './App/Screens/RegisterScreen';
import Screen from './App/components/Screen';
import Test from './App/components/Test';
import ViewImageScreen from './App/Screens/ViewImageScreen';
import WelcomeScreen from './App/Screens/WelcomeScreen';



export default function App() {

  (
    <ListingEditScreen />
  );
}

