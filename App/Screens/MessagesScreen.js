import React, { useState } from 'react';
import { FlatList } from 'react-native';


import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description:'D1',
        image: require('../assets/faceshot.png')
    },
    {
        id: 2,
        title: 'T2',
        description:'D2',
        image: require('../assets/mosh.jpg')
    },
]

function MessagesScreen(props) {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, serRefreshing] = useState(false);

   const handleDelete = message => {
    //Delete the message from the messages array
    setMessages(messages.filter(m => m.id !== message.id))
    //call the server to delete from the back end as well
   }
    
    return (<Screen>
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
                <ListItemDeleteAction onPress={() => handleDelete(item)} />)}
              />
            )}
             ItemSeparatorComponent={ListItemSeparator}
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


export default MessagesScreen;