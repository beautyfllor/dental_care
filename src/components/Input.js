import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import COLORS from '../const/Colors'

const Input = ({label, iconName, error, onFocus=()=>{}, ...props}) => {
    return(
        <View style={styles.formContainer}>

            <Text style={styles.inputLabel}>{label}</Text>

            <View style={[styles.inputContainer, {borderColor: error ? COLORS.red : COLORS.green}]}>

                <Icon name={iconName} style={styles.icon}/>

                <TextInput 
                        style={styles.textInput}
                        autoCorrect={false}
                        onFocus={()=>{onFocus()}}
                        {...props}
                />

            </View>
            <Text style={styles.errorText}>{error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    formContainer:{
        marginBottom:5
    },
    inputContainer:{
        height:40,
        backgroundColor:COLORS.white,
        flexDirection:"row",
        paddingHorizontal:5,
        marginHorizontal:40,
        borderWidth:1.5,
        borderRadius:10,
        alignItems:"center"
    },
    textInput:{
        color:COLORS.black,
        flex:1
    },
    errorText:{
        color:COLORS.red,
        marginLeft:40
    },
    icon:{
        fontSize:22,
        color:COLORS.green,
        marginRight:10
    }
});

export default Input;