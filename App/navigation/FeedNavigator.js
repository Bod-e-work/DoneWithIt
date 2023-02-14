import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';

import ListingsScreen from '../Screens/ListingsScreen';
import ListingDetailsScreen from '../Screens/ListingDetailsScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator mode="modal"  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Listings" component={ListingsScreen} />
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen}/>
    </Stack.Navigator>
)