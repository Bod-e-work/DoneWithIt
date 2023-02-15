import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import ListingsScreen from "../Screens/ListingsScreen";
import ListingEditScreen from '../Screens/ListingEditScreen';
import AccountScreen from '../Screens/AccountScreen';
import FeedNavigator from "../navigation/FeedNavigator"
import AccountNavigator from "../navigation/AccountNavigator"
import NewListingButton from '../navigation/NewListingButton';
import routes from './routes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
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

export default AppNavigator;