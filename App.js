import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView , StatusBar, Platform, Dimensions } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

export default function App() {

  // console.log(Dimensions.get("screen"));

  return (
    <view style={{
  backgroundColor: "#fff",
  flex: 1,
}} >
  <view
 style={{
  backgroundColor: "dodgerblue",
  flex: 1,
  // width: 200,
  // height: 300,
  // alignSelf: "flex-start",
}} 
/>
  <view
 style={{
  backgroundColor: "gold",
  flex: 1,
  // width: 200,
  // height: 300,
  // alignSelf: "flex-start",
}} 
/>
  <view
 style={{
  backgroundColor: "tomato",
  flex: 1,
  // width: 200,
  // height: 300,
  // alignSelf: "flex-start",
}} 
/>

</view>



    // <SafeAreaView style={styles.container}>
    //   <Text>Open up App.js to start working on your !</Text>
    //   {/* <StatusBar style="auto" /> */}
    //   <view style={{
    //     backgroundColor: 'dodgerblue',
    //     width: "50%",
    //     height: 70,
    //   }}></view>
    // </SafeAreaView>
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


