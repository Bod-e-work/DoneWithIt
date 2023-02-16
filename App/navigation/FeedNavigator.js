import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator, GestureHandlerRefContext, TransitionPresets, TransitionSpecs, useGestureHandlerRef } from '@react-navigation/stack';

import ListingsScreen from '../Screens/ListingsScreen';
import ListingDetailsScreen from '../Screens/ListingDetailsScreen';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator 
        screenOptions={{ 
            headerShown: false,
            ...TransitionPresets.ModalTransition,
        }}>
        <Stack.Screen name="Listings" component={ListingsScreen} />
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen}/>
    </Stack.Navigator>
)

export default FeedNavigator;