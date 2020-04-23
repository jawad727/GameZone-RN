import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import { globalStyles } from "../styles/globalStyles"

export default function ThirdPage({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text>ThirdPage Screen</Text>
            <Button title="go to other page" onPress={() => { navigation.navigate("ReviewDetails")}}/>
        </View>
    )
}
