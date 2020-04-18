import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import About from "../screens/About"

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: "About GameZone",
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: { // these are the default styles that show on everything unless individually overriden
        headerTintColor: "#444",
        headerStyle: {
            backgroundColor: "#eee",
            height: 60
        }
    }
})

export default createAppContainer(AboutStack)