import React from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../config/Colors';
import defaultStyles from '../config/DefaultStyles'


function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={Colors.medium} style={styles.icon} />}
            <TextInput style={defaultStyles.text} {...otherProps}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: "100%",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
})
export default AppTextInput;