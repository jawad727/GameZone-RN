import React from "react"
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from "react-native"
import { globalStyles, images } from "../styles/globalStyles"
import Card from "../shared/card"



export default function ReviewDetails({navigation, route}) { // We get navigation as a prop because of we configured it in the stack navigator

    const item = {title: "GTA 5", rating: 3, body: "lorem ipsum", id: 3}
    const image = { uri: "https://i.pinimg.com/736x/1c/a5/af/1ca5af62c669dd65c8580593343d57e6.jpg" };

   
    
    return (
        <ImageBackground style={globalStyles.container} source={image} >
            <Card>
                <Text style={styles.titleText} >{ route.params.title }</Text>
                <Image style={styles.gameImage} source={{uri: route.params.icon }} />
                <Text>{ route.params.body }</Text>
                <View style={styles.rating}>
                    <Text> GameZone Rating: </Text>
                    <Image source={images.rating[route.params.rating]} />
                </View>
            </Card>
            {/* <Button title="Home" onPress={() => navigation.navigate("ThirdPage")} /> */}
            <TouchableOpacity onPress={() => navigation.push("ReviewDetails", item)} >
                       <Card>
                            <Text style={globalStyles.titleText} >{ item.title }</Text>
                       </Card>
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: "#eee"
    },
    gameImage: {
        width: "100%", 
        height: 250,
    },
    titleText: {
        textAlign: "center",
        fontSize: 20,
        borderBottomColor: "black",
        borderBottomWidth: 2
    }
})