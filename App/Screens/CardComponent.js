import React from 'react';
import { Image, Text, View } from 'react-native';

import AppText from './App/components/AppText/AppText';

function CardComponent(props) {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={require('../assets/jacket.jpg')}></Image>
                <AppText>Red jacket for sale</AppText>
                <AppText>$100</AppText>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    constainer: {

    },
    image: {

    }
})

export default CardComponent;