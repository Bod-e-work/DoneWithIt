import React from 'react';


import { StyleSheet, Text, View, SafeAreaView , Platform, Dimensions } from 'react-native';

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

export default function App() {

  // console.log(Dimensions.get("screen"));

  return (
      <AccountScreen />
  );
}


