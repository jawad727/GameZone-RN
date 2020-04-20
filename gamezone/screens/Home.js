import React, { useState } from "react"
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from "react-native"
import { globalStyles } from "../styles/globalStyles"

export default function Home({ navigation }) {

    const [reviews, setReviews] = useState([
        {title: "Zelsda", rating: 5, body: "lorem ipsum", id: 1},
        {title: "Call Of Duty", rating: 4, body: "lorem ipsum", id: 2},
        {title: "GTA 5", rating: 3, body: "lorem ipsum", id: 3},
    ])


    return (
        <View style={globalStyles.container}>
            <FlatList  
                data={reviews}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => ( 
                    <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", item)} >
                        <Text style={globalStyles.titleText} >{ item.title }</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
