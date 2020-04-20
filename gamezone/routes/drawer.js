import React, { useState } from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createAppContainer } from "@react-navigation/native"
import { NavigationContainer } from '@react-navigation/native';
import AboutStack from "./aboutstack"
import HomeStack from "./homeStack"

const Drawer = createDrawerNavigator();

function RootDrawerNavigator() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default RootDrawerNavigator