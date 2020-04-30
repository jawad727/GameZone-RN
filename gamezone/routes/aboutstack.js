import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import About from "../screens/About"
import React, { useState } from 'react';
import ReviewDetails from "../screens/ReviewDetails"
import Header from "../shared/header"

const Stack = createStackNavigator()

function AboutStack() {
  return (
    
      <Stack.Navigator
        initialRouteName="About"
      >
        <Stack.Screen 
            name='About' 
            component={About}
            options={ ({ navigation }) => {
                return {
                    headerText: () => <Header navigation={navigation} title="About GameZone" />,
                    title: 'About GameZone', 
                    headerTintColor: "#444",
                    headerStyle: {
                        backgroundColor: '#eee', 
                        
                    }
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

export default AboutStack