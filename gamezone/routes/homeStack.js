import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import Home from "../screens/Home"
import ReviewDetails from "../screens/ReviewDetails"
import Header from "../shared/header"


const Stack = createStackNavigator()

function HomeStack() {
  return (
  
      <Stack.Navigator
        initialRouteName="Home"
      >
        <Stack.Screen 
            name='Home' 
            component={Home}
            options={({ navigation }) => {
                return {
                    header: () => <Header navigation={navigation} title="GameZone" />, 
                    headerTintColor: "#444",
                    headerStyle: {
                        backgroundColor: "#eee",
                        height: 60,    
                    },
                }
             }}
            
        />
        <Stack.Screen 
            name="ReviewDetails" 
            component={ReviewDetails}
            options={{ title: 'Review Details' }}
        />
      </Stack.Navigator>
   
  )
}

export default HomeStack