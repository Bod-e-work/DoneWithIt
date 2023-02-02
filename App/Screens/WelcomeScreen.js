import React from 'react';
import { ImageBackground , StyleSheet, View, Image, Text, Button} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        blurRadius={10}
        style={styles.background}
        source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
                <Text style={styles.tagLine}>Sell What You Don't Need!</Text> 
            </View>
            <View>
                <AppButton title="Login" onPress={() => console.log('Tapped!')}/>
                <AppButton title="Register" color="secondary" onPress={() => console.log('Registered!')}/>
            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center', 
    },
    buttonContainer: {
        padding: 20,
        width: "100%",
    },
    logo: {
        width: 100,
        height: 100,
        position: "absolute",
        top: 70,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: 'center',
    },
    tagLine: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20,
    }
    
})


export default WelcomeScreen;