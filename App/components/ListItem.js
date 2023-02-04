import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, onPress, renderRightActions, Text } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import AppText from './AppText';
import colors from '../config/Colors';

function ListItem({title, subTitle, image}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
            underlayColor={colors.light}
            onPress={() => onPress}>
                <View style={styles.container}>
                    <Image style={styles.image} source={image}/>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subTitle}>{subTitle}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    subTitle: {
        color: colors.medium,
    },
    title: {
        fontWeight: '500',
    }
})

export default ListItem;