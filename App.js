import React, {useState} from 'react';


import { StyleSheet, Text, View, SafeAreaView , Platform, Dimensions, TextInput } from 'react-native';

import WelcomeScreen from './App/Screens/WelcomeScreen';
import ViewImageScreen from './App/Screens/ViewImageScreen';
import Card from './App/components/Card';
import MessagesScreen from './App/Screens/MessagesScreen';
import ListingDetailsScreen from './App/Screens/ListingDetailsScreen';
import ListingsScreen from './App/Screens/ListingsScreen';
import AccountScreen from './App/Screens/AccountScreen';
import Icons from './App/components/Icons';
import Screen from './App/components/Screen';
import ListItem from './App/components/ListItem';
import AppTextInput from './App/components/AppTextInput';
import AppPicker from './App/components/AppPicker';

export default function App() {

  const [firstName, setFirstName] = useState('')
 
  return (
      <Screen>
        <AppPicker />
      </Screen>
  );
}


