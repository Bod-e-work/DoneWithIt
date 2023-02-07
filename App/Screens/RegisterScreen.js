import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {AppForm, AppFormField, SubmitButton, } from "../components/forms"
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'), 
    email: Yup.string().required().email().label('Email'), 
    password: Yup.string().required().min(4).label('Password')
})

function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
            
            <AppForm
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
                >
                    <AppFormField
                        autoCapotalize="words"
                        autoCorrect={false}
                        icon="person"
                        keyboadType="default"
                        name='name'
                        placehoider="Name"
                        textContentType="name"
                    />
                    <AppFormField
                        autoCapotalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboadType="email-address"
                        name='email'
                        placehoider="Email"
                        textContentType="emailAddress"
                    />
                    <AppFormField 
                        autoCapotalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name='password'
                        placehoider="password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <SubmitButton title="Register"/>
            </AppForm>
            
        </Screen>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
})

export default RegisterScreen;