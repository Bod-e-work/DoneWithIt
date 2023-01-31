import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

function ViewImageScreen(props) {
    return (
        <Image style={styles.images} source={require("../assets/chair.jpg")}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
        </Image>
    );
}

const styles = StyleSheet.create({
    images: {
        flex: 1
    },
    closeIcon: {
        flex: 1
    },
    deleteIcon: {
        flex: 1
    }
})

export default ViewImageScreen;