import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../Screens/AccountScreen';
import MessagesScreen from '../Screens/MessagesScreen';


const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator >
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
)

export default AccountNavigator;