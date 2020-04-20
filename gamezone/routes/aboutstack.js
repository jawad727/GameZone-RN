import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import About from "../screens/About"

// const screens = {
//     About: {
//         screen: About,
//         navigationOptions: {
//             title: "About GameZone",
//         }
//     }
// }

// const AboutStack = createStackNavigator(screens, {
//   defaultNavigationOptions: {
//     headerTintColor: '#444',
//     headerStyle: { backgroundColor: '#eee', height: 60 },
//   }
// });

// export default AboutStack

const Stack = createStackNavigator()

function AboutStack() {
  return (
    
      <Stack.Navigator
        initialRouteName="About"
      >
        <Stack.Screen 
            name='About' 
            component={About}
            options={{ 
                title: 'About', 
                headerTintColor: "#444",
                headerStyle: {
                    backgroundColor: '#eee', 
                    height: 60
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