import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            {/* <View style={styles.closeIcon}></View> */}
            <AntDesign name="close" size={24} color="black" />
            {/* <View style={styles.deleteIcon}></View> */}
            <MaterialCommunityIcons name="trash-can-outline" size={24} color="black" />
            <Image resizeMode="contain" style={styles.images} source={require("../assets/chair.jpg")}>
            </Image>
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 40,
        left:30,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 40,
        left:30,
    },
    images: {
        width: "100%",
        height: '100%',
    },
})

export default ViewImageScreen;