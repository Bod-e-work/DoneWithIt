import { Platform } from "react-native"

import Colors from "./Colors"


export default {
    Colors,
    text: {
        color: Colors.dark,
        fontSize: Platform.OS === 'android' ?  18 : 20,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
    }
}