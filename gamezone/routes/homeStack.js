import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import Home from "../screens/Home"
import ReviewDetails from "../screens/ReviewDetails"
import Header from "../shared/header"
import ThirdPage from "../screens/ThirdPage"
import { StatusBar } from "react-native"

const Stack = createStackNavigator()

function HomeStack() { StatusBar
  return (
  
      <Stack.Navigator
        initialRouteName="Home"
      >
        
        <Stack.Screen 
            name='Home' 
            component={Home}
            options={({ navigation }) => {
                return {
                  headerText: "asd",
                    header: () => <Header navigation={navigation} title="GameZone" />, 
                    headerTintColor: "#444",
                    headerStyle: {
     
                    },
                }
             }}
            
        />
        <Stack.Screen 
            name="ReviewDetails" 
            component={ReviewDetails}
            options={{ title: 'Review Details' }}
        />
        <Stack.Screen 
            name="ThirdPage" 
            component={ThirdPage}
            options={{ title: 'ThirdPage' }}
        />
      </Stack.Navigator>
   
  )
}

export default HomeStack