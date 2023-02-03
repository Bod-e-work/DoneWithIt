import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}><AntDesign name="close" size={35} color="white" /></View>
            <View style={styles.deleteIcon}><MaterialCommunityIcons name="trash-can-outline" size={35} color="white" /></View>
            <Image resizeMode="contain" style={styles.images} source={require("../assets/chair.jpg")}>
            </Image>
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        position: 'absolute',
        top: 40,
        left:30,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    deleteIcon: {
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