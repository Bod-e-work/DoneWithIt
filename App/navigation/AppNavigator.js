import React, { useEffect } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import expoPushTokensApi from '../api/expoPushTokens';


import ListingsScreen from "../Screens/ListingsScreen";
import ListingEditScreen from '../Screens/ListingEditScreen';
import AccountScreen from '../Screens/AccountScreen';
import FeedNavigator from "../navigation/FeedNavigator"
import AccountNavigator from "../navigation/AccountNavigator"
import NewListingButton from '../navigation/NewListingButton';
import routes from './routes';
import navigation from './rootNavigation';
import useNotifications from '../components/hooks/useNotifications';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    
    useNotifications();

const registerForPushNotifications = async () => {
    
    
    try {
        const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        if  (permission.granted) return;
    
        const token = await Notifications.getExpoPushTokenAsync();
        expoPushTokensApi.register(token);
    } catch (error) {
        console.log('Error getting a push token', error);
    }
}
    return ( 

    <Tab.Navigator screenOptions={{ 
        headerShown: false
    }}>
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
            options={({ navigation }) => ({ 
                tabBarButton: () => 
                    <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)}/>,
                tabBarIcon: ({ color, size }) => 
                 <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
            })} 
        />
        <Tab.Screen 
            name='My Account' 
            component={AccountNavigator} 
            options={{
                tabBarIcon: ({ color, size }) => 
                    <MaterialCommunityIcons name="account" color={color} size={size} />
            }} 
        />
    </Tab.Navigator>
)
        };

export default AppNavigator;