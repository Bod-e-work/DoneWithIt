import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
// import { Swipeable } from 'react-native-gesture-handler';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListIemSeparator from '../components/ListItemSeparator';
import Card from '../components/Card';
import Colors from '../config/Colors';


const listings = [
    {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket/jpg')
},
{
    id: 2,
    title: 'Couch in great condtion',
    price: 1000,
    image: require('../assets/couch/jpg')
},
]
function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList 
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({ item }) => (
                <Card
                  title={item.title}
                  subTitle={"$" + item.price}
                  image={item.image}  
                  onPress={() => console.log("listing selected", item)}
                  renderRightActions={() => (
                    <ListItemDeleteAction onPress={() => handleDelete(item)}/>)}
                  />
                )}
                 ItemSeparatorComponent={ListIemSeparator}
                 refreshing={refreshing}
                 onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description:'D2',
                            image: require('../assets/mosh.jpg')
                        },
                    ])
                 }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: Colors.light
    }
})

export default ListingsScreen;