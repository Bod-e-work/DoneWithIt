import React from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from 'react-native';

import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-web';

function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="plus-circle" color={colors.white} size={40} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderRadius: 40,
        borderWidth: 10,
        bottom: 20,
        height: 80,
        justifyContent: 'center',
        width: 80,
    }
})

export default NewListingButton;