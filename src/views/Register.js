import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import Input from "../components/Input";
import Button from "../components/Button";

import COLORS from "../const/Colors";

const Register = () =>{

  const [inputs, setInputs] = React.useState({
    name: '',
    telephone: '',
    cellphone: '',
    email: '',
    responsibleName: '',
    responsibleTelephone: ''
  });

  const handlerOnChange = (text, input) => {
    setInputs((prevState)=>(

      {...prevState, [input]:text}

    ));
  }

  const [errors, setErrors] = React.useState({});

  const handlerErrors = (errorMessage, input)=>{

    setErrors((prevState) => ({...prevState, [input]:errorMessage}));
  }

  const validate = ()=>{

    let validate = true;

    if(!inputs.name) {
      validate = false;
      handlerErrors('Give the name of the patient', 'name');
    }

    if(!inputs.telephone) {
      validate = false;
      handlerErrors('Give the telephone of the patient', 'telephone');
    }

    if(!inputs.cellphone) {
      validate = false;
      handlerErrors('Give the cellphone of the patient', 'cellphone');
    }

    if(!inputs.email) {
        validate = false;
        handlerErrors('Give the email of the patient', 'email');
      }

      if(!inputs.responsibleName) {
        validate = false;
        handlerErrors('Give the name of the responsible', 'responsibleName');
      }

      if(!inputs.responsibleTelephone) {
        validate = false;
        handlerErrors('Give the telephone of the responsible', 'responsibleTelephone');
      }

    if(validate){
      console.log("Validated data.")
    }

  }
  
    return(

      <SafeAreaView style={styles.safe}>

        <Text style={styles.title}>Welcome!</Text>

        <Text style={styles.subtitle}>Patient Area</Text>

        <View style={styles.viewForm}>
          
            <Input 
              placeholder="Name" 
              iconName="account-heart"
              error={errors.name}
              onFocus={() => {handlerErrors(null, 'name')}} 
              onChangeText={(text)=>handlerOnChange(text, 'name')}/>
            <Input 
              placeholder="Telephone" 
              iconName="phone"
              error={errors.telephone}
              onFocus={() => {handlerErrors(null, 'telephone')}} 
              onChangeText={(text)=>handlerOnChange(text, 'telephone')}/>
            <Input 
              placeholder="Cellphone" 
              iconName="cellphone"
              error={errors.cellphone}
              onFocus={() => {handlerErrors(null, 'cellphone')}} 
              onChangeText={(text)=>handlerOnChange(text, 'cellphone')}/>
            <Input 
              placeholder="Email" 
              iconName="email"
              error={errors.email}
              onFocus={() => {handlerErrors(null, 'email')}} 
              onChangeText={(text)=>handlerOnChange(text, 'email')}/>

        </View>

        <Text style={styles.subtitle}>Responsible Area</Text>

        <View style={styles.viewForm}>
          
            <Input 
              placeholder="Name" 
              iconName="account"
              error={errors.responsibleName}
              onFocus={() => {handlerErrors(null, 'responsibleName')}} 
              onChangeText={(text)=>handlerOnChange(text, 'responsibleName')}/>
            <Input 
              placeholder="Telephone" 
              iconName="phone"
              error={errors.responsibleTelephone}
              onFocus={() => {handlerErrors(null, 'responsibleTelephone')}} 
              onChangeText={(text)=>handlerOnChange(text, 'responsibleTelephone')}/>
            
            <Button title='Register' onPress={validate}/>

        </View>

      </SafeAreaView>
    );
  
  }

  const styles = StyleSheet.create({
    safe:{
      flex:1,
      backgroundColor:COLORS.white
    },
    title:{
      color:COLORS.green,
      fontSize:25,
      textAlign:"center",
      paddingTop:25
    },
    subtitle:{
        color:COLORS.green,
        fontSize:20,
        paddingTop:10,
        marginLeft:40
      },
    viewForm:{
      marginTop:2
    }
  })

export default Register;