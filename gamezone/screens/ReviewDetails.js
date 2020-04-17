import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import { globalStyles } from "../styles/globalStyles"

export default function ReviewDetails({navigation}) { // We get navigation as a prop because of we configured it in the stack navigator

    const pressHandler = () => {
        navigation.goBack()
    }


    return (
        <View style={globalStyles.container}>
            <Text>ReviewDetails Screen</Text>
            <Button title="Back to home screen" onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})