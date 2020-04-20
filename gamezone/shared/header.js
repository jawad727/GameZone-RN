import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

export default function Header({ navigation, title }) {

    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <View style={styles.header}>
            <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon} />
            <View>
                <Text style={styles.headerText} > { title } </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eee",
        height: 60
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        letterSpacing: 1
    },
    icon: {
        position: "absolute",
        left: 16
    }
})