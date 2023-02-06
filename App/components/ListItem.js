import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text, Platform } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

import Colors from '../config/Colors';

function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight 
                    underlayColor={Colors.light}
                    onPress={() => onPress}>
                        <View style={styles.container}>
                            {IconComponent}
                            {image && <Image style={styles.image} source={image}/>}
                            <View style={styles.detailsContainer}>
                                <Text style={styles.title}>{title}</Text>
                                {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
                            </View>
                        </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: Colors.white
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        fontSize: Platform.OS === 'android' ?  17 : 20,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
        color: Colors.medium,
    },
    title: {
        fontSize: Platform.OS === 'android' ?  18 : 20,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
        fontWeight: '500',
    }
})

export default ListItem;