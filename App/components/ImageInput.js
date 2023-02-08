import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import { MaterialCommunityIcons } from "@expo/vector-icons";


import colors from '../config/colors';

function ImageInput({ ImageUri }) {
    const [imageUri, setImageUri] = useState();

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted)
          alert('You need to enable permission to access the library')
      }
      useEffect(() => {
        requestPermission();
      }, [])



    const selectImage = async () => {
    try {
        const result = await ImagePicker.launchImageLibraryAsync();
        if (!result.canceled)
        setImageUri(result.assets.uri)
    } catch (error) {
        console.log('Error reading an image', error)
    }
    }


    return (
        <View style={styles.container}>
        <Button title="SelecT Image" onPress={selectImage} />
        {!imageUri && <MaterialCommunityIcons name="camera" color={colors.medium} size={40} />}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image}/>}
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 15,
        height: 100,
        justifyContent: 'center',
        overflow: 'hidden',
        width: 100,
    },
    image: {
        width: '100%', 
        height: '100%',
    }
})

export default ImageInput;