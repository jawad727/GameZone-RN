import React from "react"
import { StyleSheet, View, ScrollView, Text, ImageBackground, Image, TouchableOpacity } from "react-native"
import { globalStyles, images } from "../styles/globalStyles"
import Card from "../shared/card"



export default function ReviewDetails({navigation, route}) { // We get navigation as a prop because of we configured it in the stack navigator

    const item = {title: "GTA 5", rating: 3, body: "lorem ipsum", id: 3}
    const image = { uri: "https://i.pinimg.com/736x/1c/a5/af/1ca5af62c669dd65c8580593343d57e6.jpg" };

   
    
    return (
        <ScrollView>
        <ImageBackground style={styles.container} source={image} >
            <View style={styles.postContainer} >
                <Text style={styles.titleText} >{ route.params.title }</Text>
                <Image style={styles.gameImage} source={{uri: route.params.icon }} />
                <View style={styles.rating}>
                    <Text> GameZone Rating: </Text>
                    <Image source={images.rating[route.params.rating]} />
                </View>
                <Text style={styles.gameBody} >{`UserName:`} { route.params.body }</Text>
            </View>
            {/* <Button title="Home" onPress={() => navigation.navigate("ThirdPage")} /> */}
            <TouchableOpacity onPress={() => navigation.push("ReviewDetails", item)} >
                       <Card>
                            <Text style={globalStyles.titleText} >{ item.title }</Text>
                       </Card>
            </TouchableOpacity>
        </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    rating: {
        flexDirection: "row",
        justifyContent: "center",
        // paddingTop: 16,
        // marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: "#eee",
        padding: 5,
        borderWidth: 1,
        borderColor: "lightgrey"
    },
    gameImage: {
        width: "100%", 
        height: 250,
        borderWidth: 1,
        borderColor: "lightgrey"
    },
    titleText: {
        textAlign: "center",
        fontSize: 20,
        borderBottomColor: "black",
        // borderBottomWidth: 1
    },
    postContainer: {
        backgroundColor: "white",
        borderRadius: 5
    },
    gameBody: {
        padding: 10
    }
})