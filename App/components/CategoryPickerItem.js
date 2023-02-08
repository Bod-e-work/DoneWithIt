import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from './AppText';
import Icon from './Icons';

function CategoryPickerItem({ item, onPress }) {
    return (
        <View style={styles.container}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
            <AppText>{item.label}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingHorizontal: 15,
        alignItems: 'center',
        width: '33%',
    },
    label: {
        marginTop: 5,
        textAlign: 'center',
    }

})

export default CategoryPickerItem;