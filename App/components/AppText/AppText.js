import React, { Children } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

import styles from './styles';

function AppText({Children}) {
    return (
        <Text style={styles.text}>{Children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir"
    }
})


export default AppText;