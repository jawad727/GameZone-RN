import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import { globalStyles } from "../styles/globalStyles"
import Card from "../shared/card"

export default function ReviewDetails({navigation, route}) { // We get navigation as a prop because of we configured it in the stack navigator

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{ route.params.title }</Text>
                <Text>{ route.params.body }</Text>
                <Text>{ route.params.rating }</Text>
            </Card>
        </View>
    )
}
