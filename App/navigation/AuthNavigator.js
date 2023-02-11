import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
)

// const Tab = createBottomTabNavigator();
// const TabNavigator = () => (
//     <Tab.Navigator 
//          screenOptions={{
//             headerStyle : {backgroundColor: "tomato"}
//          }}>
//         <Tab.Screen name=" Welcome" component={createStackNavigator} />
//         <Tab.Screen name=" Login" component={LoginScreenNavigator} />
//         <Tab.Screen name=" Register" component={RegisterScreenNavigator} />
//     </Tab.Navigator>
// )

export default AuthNavigator;