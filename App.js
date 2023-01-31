import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView , StatusBar, Platform, Dimensions } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import WelcomeScreen from './App/Screens/WelcomeScreen';

export default function App() {

  // console.log(Dimensions.get("screen"));

  return (
    <WelcomeScreen />
  );
}

// const styles = StyleSheet.create({ 
//   container: {
//     paddingTop: 30,
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });


