import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

function LoginScreen(props) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <Screen>
            <Image 
                style={styles.logo}
                source={require("../assets/logo-red.png")} 
            />
            <AppTextInput 
                autoCapotalize="none"
                autoCorrect={false}
                icon="email"
                keyboadType="email-address"
                onChangeText={text => setEmail(text)}
                placehoider="Email"
                textContentType="emailAddress"
            />
            <AppTextInput 
                autoCapotalize="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={text => setPassword(text)}
                placehoider="password"
                secureTextEntry
                textContentType="password"
            />
            <AppButton title="Login" onPress={() => console.log(email, password)}/>
        </Screen>
    );
}


const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
})

export default LoginScreen;