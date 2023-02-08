import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

function ImageInput(props) {
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
        <Screen>
        <Button title="SelecT Image" onPress={selectImage} />
        <Image source={{uri: imageUri}} style={styles.image}/>
      </Screen>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 200, 
        height:200,
    }
})

export default ImageInput;