import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import ListingsScreen from "../Screens/ListingsScreen";
import ListingEditScreen from '../Screens/ListingEditScreen';
import AccountScreen from '../Screens/AccountScreen';
import FeedNavigator from "../FeedNavigator"
import AccountNavigator from "../AccountNavigator"
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen 
            name='Feed' 
            component={FeedNavigator} 
            options={{ 
                tabBarIcon: ({ color, size }) => 
                 <MaterialCommunityIcons name="home" color={color} size={size} />
            }} 
        />
        <Tab.Screen 
            name='ListingEdit' 
            component={ListingEditScreen} 
            options={{ 
                tabBarIcon: ({ color, size }) => 
                 <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
            }} 
        />
        <Tab.Screen 
            name='Account' 
            component={AccountNavigator} 
            options={({ navigation }) => ({ 
                tabBarButton: () => 
                    <NewListingButton onPress={ () => navigation.navigate("ListingEditScreen")}/>,
                tabBarIcon: ({ color, size }) => 
                    <MaterialCommunityIcons name="account" color={color} size={size} />
            })} 
        />
    </Tab.Navigator>
)

export default AppNavigator;