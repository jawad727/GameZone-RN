import React, { useState } from "react"
import { StyleSheet, View, Text, Button, TextInput } from "react-native"
import { globalStyles } from "../styles/globalStyles"
import { Formik } from "formik"

export default function ReviewForm({ addReview }) {

    return (
        <View style={globalStyles.container}>
            <Formik
            initialValues={{title: "", body: "", rating: ""}}
            onSubmit={(values, action) => {       
                addReview(values)
                action.resetForm()
            }}
            >
                {(formikProps) => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder="Review Title"
                            onChangeText={formikProps.handleChange("title")} // When text is inputted, title value will change
                            value={formikProps.values.title} // The value of the text input is equal to the "title" initial value
                        />

                        <TextInput 
                            style={globalStyles.input}
                            placeholder="Review Body"
                            onChangeText={formikProps.handleChange("body")} 
                            value={formikProps.values.body}
                            
                        />

                        <TextInput 
                            style={globalStyles.input}
                            placeholder="Rating (1-5)"
                            onChangeText={formikProps.handleChange("rating")} 
                            value={formikProps.values.rating}
                            keyboardType="numeric" 
                        />

                        <Button title="submit" color="maroon" onPress={formikProps.handleSubmit} />

                    </View>
                )}
            </Formik>
        </View>
    )
}
