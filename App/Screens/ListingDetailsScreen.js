import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

import Colors from '../config/Colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')}></Image>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Red jacket for sale</Text>
                <Text style={ styles.price}>$100</Text>
                <View style={styles.userContainer}>
                    <ListItem 
                    image={require('../assets/faceshot.png')}
                    title='Shawn Noel'
                    subTitle='5 Listings'
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    price: {
       color: Colors.secondary,
       fontWeight: 'bold',
       fontSize: 20,
       marginVertical: 10, 
    },
    title: {
        fontSize: 24,
        fontWeight: '500', 
    },
    userContainer: {
        marginVertical: 40,
    },
})

export default ListingDetailsScreen;