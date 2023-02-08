import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';

function Test(props) {
    return (
        <View style={styles.container}>
            <Button title="SelecT Image" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 15,
        height: 100,
        justifyContent: 'center',
        width: 100,
    }
})

export default Test;