import React from 'react';
import { Text } from 'react-native';

import defaultStyles from '../config/DefaultStyles'

function AppText({children}) {
    return (
        <Text style={defaultStyles.text}>{children}</Text>
    );
}


export default AppText;