import React, { Children } from 'react';
import { Text, StyleSheet } from 'react-native';

function AppText({Children}) {
    return (
        <Text style={styles.text}>{Children}</Text>
    );
}


const styles = StyleSheet.create({
    text: {
        color: "tomato",
        fontSize: 18,
        fontFamaily: "Roboto",
    }
})

export default AppText;