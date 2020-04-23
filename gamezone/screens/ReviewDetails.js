import React from "react"
import { StyleSheet, View, Text, Button, Image } from "react-native"
import { globalStyles, images } from "../styles/globalStyles"
import Card from "../shared/card"

export default function ReviewDetails({navigation, route}) { // We get navigation as a prop because of we configured it in the stack navigator

    const rating = route.params.rating

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{ route.params.title }</Text>
                <Text>{ route.params.body }</Text>
                <View style={style.rating}>
                    <Text> GameZone Rating: </Text>
                    <Image source={images.rating[rating]} />
                </View>
            </Card>
            <Button title="Home" onPress={() => navigation.navigate("ThirdPage")} />
        </View>
    )
}

const style = StyleSheet.create({
    rating: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: "#eee"
    },
})