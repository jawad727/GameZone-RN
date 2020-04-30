import React, { useState } from "react"
import { StyleSheet, View, Text, Image, ImageBackground, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from "react-native"
import { globalStyles } from "../styles/globalStyles"
import Card from "../shared/card"
import { MaterialIcons } from "@expo/vector-icons"
import ReviewForm from "./ReviewForm"
import { userReviews } from "../shared/data"

export default function Home({ navigation }) {

    const image = { uri: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/01073865290819.5d61d475f0072.jpg" };

    const [ modalOpen, setModalOpen ] = useState(false)

    const [ reviews, setReviews ] = useState(userReviews)

    const addReview = (review) => {
        review.id = Math.random().toString()
        setReviews((currentReviews) => {

            return [review, ...currentReviews]
        })
        setModalOpen(false)
    }


    return (
        
        <ImageBackground style={globalStyles.container} source={image}>

            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                <MaterialIcons
                    name="close"
                    size={24}
                    style={{ ...styles.modalToggle, ...styles.modalClose, }}
                    onPress={() => setModalOpen(false)}
                />

             
                    <ReviewForm addReview={addReview} />
            
                </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name="add"
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList  
                data={reviews}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => ( 
                    <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", item)} >
                       <Card>
                            <View style={styles.cardContainer} >
                                <Image
                                    source={{ uri: item.icon }}
                                    style={styles.gameIcon}
                                />
                                <Text style={globalStyles.titleText} >{ item.title }</Text>
                            </View>
                       </Card>
                    </TouchableOpacity>
                )}
            />
        </ImageBackground>
    )
}


const styles = StyleSheet.create({

    modalToggle: {
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,
        elevation: 3,
        borderRadius: 10,
        borderColor: "lightgrey",
        alignSelf: "center",
        backgroundColor: "#fff",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 20
    },
    modalContent: {
        flex: 1
    },
    gameIcon: {
        height: 50,
        width: 50,
        marginRight: 10
    },
    cardContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
})