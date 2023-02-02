import React, { Children } from 'react';
import { Text, StyleSheet } from 'react-native';

import { styles } from './styles';
function AppText({Children}) {
    return (
        <Text style={styles.text}>{Children}</Text>
    );
}




export default AppText;