import React from 'react';
import { Text } from 'react-native';
import Constants  from 'expo-constants';

import defaultStyles from '../config/styles'

function AppText({children}) {
    return (
        <Text style={defaultStyles.text}>{children}</Text>
    );
}


export default AppText;