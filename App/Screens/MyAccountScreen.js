import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, onPress } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';

function MyAccountScreen(props) {
    return (
        <TouchableHighlight 
            style={styles.background}
            underlayColor={colors.light}
            onPress={() => onPress}>
                <View>
                    <View style={styles.container}>
                        <Image style={styles.image} source={require("./assets/faceshot.png")}/>
                        <AppText style={styles.userName}>Shawn Noel</AppText>
                        <AppText style={styles.userEmail}>ProgrammingWithMosh@gmail.com</AppText>
                    </View>
                    <View>
                        <AppText style={styles.myListings}><MaterialCommunityIcons name="format-list-bulleted" size={35} color="white" />My Listings</AppText>
                        <AppText style={styles.myMessages}><MaterialCommunityIcons name="email" size={35} color="whte" />My Messages</AppText>
                        ItemSeparatorComponent={ListIemSeparator}
                        <AppText style={styles.logOut}><MaterialCommunityIcons name="logout" size={35} color="white" />Log Out</AppText>
                    </View>
                </View>
            </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        paddingBottom: 30,
    },
    background: {
        backgroundColor: colors.light,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    logOut: {
        paddingTop: 20,
    },
    myListings: {

    },
    myMessages: {

    },
    userEmail: {
        color: colors.medium,
    },
    userName: {
        fontWeight: '500',
    },
})
export default MyAccountScreen;