import React from 'react';
import { Children } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

function AppText({Children}) {
    return (
        <Text style={styles.text}>{Children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: Platform.OS === 'android' ?  18 : 20,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir"
    }
})


export default AppText;