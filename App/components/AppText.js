import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import Constants  from 'expo-constants';

function AppText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: Platform.OS === 'android' ?  18 : 20,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir"
    }
})


export default AppText;