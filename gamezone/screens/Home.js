import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import { globalStyles } from "../styles/globalStyles"

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.push("ReviewDetails")
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText} >Home Screen</Text>
            <Button title="go to review details" onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    titleText: {
        fontFamily: "nunito-bold",
        fontSize: 18
    }
})