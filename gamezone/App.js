import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./screens/Home"
import * as Font from "expo-font"
import ReviewDetails from "./screens/ReviewDetails"
import About from "./screens/About"
import { AppLoading } from "expo"

const getFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf")
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  
  if (fontsLoaded) {

    return ( 
      <View>
        <Home />
      </View> )

  } else {

    return (
    <AppLoading // This component tells expo to keep the app loading screen until the component is fully rendered
      startAsync={getFonts} 
      onFinish={() => { // Once getFonts finishes set fontsLoaded to true which will take us off the loading screen and render the home component with the proper font
      setFontsLoaded(true)
    }} />  
    )

  }
  
      
     






}

const styles = StyleSheet.create({

});
