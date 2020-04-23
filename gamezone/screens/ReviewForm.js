import React, { useState } from "react"
import { StyleSheet, View, Text, Button, TextInput } from "react-native"
import { globalStyles } from "../styles/globalStyles"
import { Formik } from "formik"
import * as yup from "yup"
import FlatButton from "../shared/button"

const reviewSchema = yup.object({
    title: yup.string()
            .required()
            .min(4),
    body: yup.string()
            .required()
            .min(12),
    rating: yup.string()
            .required()
            .test("is number 1-5", "rating must be a number 1-5", (val) => {
                return parseInt(val) < 6 && parseInt(val) > 0;
            })
})


export default function ReviewForm({ addReview }) {

    return (
        <View style={globalStyles.container}>
            <Formik
            initialValues={{title: "", body: "", rating: ""}}
            validationSchema={reviewSchema}
            onSubmit={(values, action) => {  
                action.resetForm()     
                addReview(values)
            }}
            >
                {(formikProps) => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder="Review Title"
                            onChangeText={formikProps.handleChange("title")} // When text is inputted, title value will change
                            value={formikProps.values.title} // The value of the text input is equal to the "title" initial value
                            onBlur={formikProps.handleBlur("title")} // As soon as user click away from invalid field, text will show if validation doesn't pass
                        />
                        <Text style={globalStyles.errorText} >{ formikProps.touched.title && formikProps.errors.title } 
                        </Text> 
                        {/* Above Text works because the && only shows what on the right of it but based on if whats to the left of it is true */}

                        <TextInput 
                            style={globalStyles.input}
                            placeholder="Review Body"
                            onChangeText={formikProps.handleChange("body")} 
                            value={formikProps.values.body}
                            onBlur={formikProps.handleBlur("body")}
                        />
                        <Text style={globalStyles.errorText} >{ formikProps.touched.body && formikProps.errors.body }</Text>

                        <TextInput 
                            style={globalStyles.input}
                            placeholder="Rating (1-5)"
                            onChangeText={formikProps.handleChange("rating")} 
                            value={formikProps.values.rating}
                            keyboardType="numeric"
                            onBlur={formikProps.handleBlur("rating")}
                        />
                        <Text style={globalStyles.errorText} >{ formikProps.touched.rating && formikProps.errors.rating }</Text>

                        <FlatButton text="submit" onPress={formikProps.handleSubmit} />

                    </View>
                )}
            </Formik>
        </View>
    )
}
