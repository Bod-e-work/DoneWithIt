import React, {useEffect, useState} from 'react';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { WebView } from 'react-native-webview';

import { StyleSheet, Text, View, SafeAreaView , Platform, Dimensions, TextInput, Button, Image } from 'react-native';

import WelcomeScreen from './App/Screens/WelcomeScreen';
import ViewImageScreen from './App/Screens/ViewImageScreen';
import Card from './App/components/Card';
import MessagesScreen from './App/Screens/MessagesScreen';
import ListingDetailsScreen from './App/Screens/ListingDetailsScreen';
import ListingsScreen from './App/Screens/ListingsScreen';
import AccountScreen from './App/Screens/AccountScreen';
import Icons from './App/components/Icons';
import Screen from './App/components/Screen';
import AppTextInput from './App/components/AppTextInput';
import AppPicker from './App/components/AppPicker';
import LoginScreen from './App/Screens/LoginScreen';
import AppButton from './App/components/AppButton';
import { AppForm, AppFormField } from './App/components/forms';
import RegisterScreen from './App/Screens/RegisterScreen';
import ListingEditScreen from './App/Screens/ListingEditScreen';
import Icon from './App/components/Icons';
import PickerItem from './App/components/PickerItem';

export default function App() {

  (
    <WebView
    style={styles.container}
    source={{ uri: 'https://expo.dev' }}
  />
  );
}


