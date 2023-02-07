import React, { useState } from 'react';
import { Button, FlatList, Modal, Platform, StyleSheet, TextInput, TouchableWithoutFeedbackComponent, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import Colors from '../config/Colors';
import defaultStyles from '../config/styles'
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';


function AppPicker({icon, items, onSelectItem, placeholder, selectedItem}) {

    const [modalVisible, setModalVisible ] = useState(false);


    return (
        <>
            <TouchableWithoutFeedbackComponent onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={Colors.medium} style={styles.icon} />}
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons name={'chevron-down'} size={20} color={Colors.medium}/>
                </View>
            </TouchableWithoutFeedbackComponent>
            <Modal visible={setModalVisible} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                    <FlatList 
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({item}) => (
                    <PickerItem 
                        label={item.label}
                        onPress={() => {
                            setModalVisible(false);
                            onSelectItem(item)
                        }}
                    />
                    )}
                    />
                </Screen>
            </Modal>
        </>
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
    text: {
        flex: 1,
    },
})
export default AppPicker;