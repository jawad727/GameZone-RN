import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import { globalStyles } from "../styles/globalStyles"

export default function ReviewDetails({navigation}) { // We get navigation as a prop because of we configured it in the stack navigator

    const pressHandler = () => {
        navigation.goBack()
    }


    return (
        <View style={globalStyles.container}>
            <Text>{ navigation.getParam("title") }</Text>
            <Text>{ navigation.getParam("body") }</Text>
            <Text>{ navigation.getParam("rating") }</Text>
            {/* <Button title="Back to home screen" onPress={pressHandler} /> */}
        </View>
    )
}
