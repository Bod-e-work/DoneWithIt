import React from 'react';
import Constants  from 'expo-constants';
import { SafeAreaView, StyleSheet } from 'react-native';

function Screen({Children}) {
    return (
        <SafeAreaView style={styles.screen}>
            {Children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
})

export default Screen;