import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

import Colors from '../config/Colors';
import AppText from './AppText';


function Card({image, title, subTitle}) {
    return (
        <View style={styles.background}>
            <View style={styles.card}>
                <Image style={styles.image} source={require('../assets/jacket.jpg')}></Image>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>Red jacket for sale</Text>
                    <Text style={ styles.subTitle}>$100</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    background: {
        backgroundColor: Colors.light,
        padding: 20,
        paddingTop: 100,
    },
    card: {
        borderRadius: 15,
        backgroundColor: Colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200,
    },
    subTitle: {
        fontSize: Platform.OS === 'android' ?  18 : 20,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
        color: Colors.secondary,
        fontWeight: 'bold',
    },
    title: {
        fontSize: Platform.OS === 'android' ?  18 : 20,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
        marginBottom: 7,
    }
})

export default Card;