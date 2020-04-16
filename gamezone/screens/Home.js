import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { globalStyles } from "../styles/globalStyles"

export default function Home() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText} >Home Screen</Text>
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