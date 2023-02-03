import React from 'react';
import { Image, Text, View,StyleSheet } from 'react-native';

import colors from '../config/colors';
import AppText from './App/components/AppText/AppText';

function CardComponent({title, subTitle, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={require('../assets/jacket.jpg')}></Image>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red jacket for sale</AppText>
                <AppText style={ styles.subTitle}>$100</AppText>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
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
        color: colors.secondary,
        fontWeight: 'bold',
    },
    title: {
        marginBottom: 7,
    }
})

export default CardComponent;