import React, { useState } from "react"
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Modal } from "react-native"
import { globalStyles } from "../styles/globalStyles"
import Card from "../shared/card"
import { MaterialIcons } from "@expo/vector-icons"

export default function Home({ navigation }) {

    const [ modalOpen, setModalOpen ] = useState(false)

    const [ reviews, setReviews ] = useState([
        {title: "Zelda", rating: 5, body: "lorem ipsum", id: 1},
        {title: "Call Of Duty", rating: 4, body: "lorem ipsum", id: 2},
        {title: "GTA 5", rating: 3, body: "lorem ipsum", id: 3},
    ])


    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType="slide">
                <MaterialIcons
                    name="close"
                    size={24}
                    style={{ ...styles.modalToggle, ...styles.modalClose, }}
                    onPress={() => setModalOpen(false)}
                />

                <View style={styles.modalContent}>
                    <Text> Hello from the modal </Text>
                </View>
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
                            <Text style={globalStyles.titleText} >{ item.title }</Text>
                       </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
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
    }
})