import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, onPress, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../config/Colors';
import Icons from '../components/Icons';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import { FlatList } from 'react-native-gesture-handler';

 const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: Colors.primary,
        },
    },
    {    
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: Colors.secondary,
        },
    }
 ]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title="Shawn Noel"
                    subTitle="programmingwithshawn@gmail.com"
                    image={require("../assets/faceshot.png")}
                />
            </View>
            <View style={styles.container}>
                    <FlatList 
                        data={menuItems}
                        keyExtractor={menuItem => menuItem.title}
                        ItemSeparatorComponent={ListItemSeparator}
                        renderItem={({item}) => 
                            <ListItem 
                                title={item.title}
                                IconComponent={
                                    <Icons 
                                        name={item.icon.name}
                                        backgroundColor={item.icon.backgroundColor}
                                    />
                                }
                            />}
                    />
            </View>
            <ListItem 
                title="Log Out"
                IconComponent={
                    <Icons 
                        name="logout"
                        backgroundColor='#ffe66d'
                    />
                }
            />

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: Colors.light
    }
})
export default AccountScreen;