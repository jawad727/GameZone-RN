import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import Home from "../screens/Home"
import ReviewDetails from "../screens/ReviewDetails"

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: "GameZone",
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: "Review Details"
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: { // these are the default styles that show on everything unless individually overriden
        headerTintColor: "#444",
        headerStyle: {
            backgroundColor: "#eee",
            height: 60
        }
    }
})

export default createAppContainer(HomeStack)