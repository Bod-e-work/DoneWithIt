import React from 'react';
import { Image, Text, View } from 'react-native';

function CardComponent(props) {
    return (
        <View style={styles.container}>
            <View>
                <Text>Red jacket for sale</Text>
                <Text>$100</Text>
                <Image style={styles.image} source={require('../assets/jacket.jpg')}></Image>
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