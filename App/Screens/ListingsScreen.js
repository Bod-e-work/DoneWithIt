import React, { useState } from 'react';
import { FlatList } from 'react-native';
// import { Swipeable } from 'react-native-gesture-handler';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

function ListingsScreen(props) {
    return (
        <Screen>
            <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) => (
                <ListItem
                  title={item.title}
                  subTitle={item.description}
                  image={item.image}  
                  onPress={() => console.log("Message selected", item)}
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

export default ListingsScreen;