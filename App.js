
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import {TouchableOpacity,TextInput} from 'react-native';
import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';


export default class App extends React.Component {
    constructor(props){
    super(props);
    this.state = {
     formData:{}
   }

    }
    handleFormChange(formData){
    /*
    formData will contain all the values of the form,
    in this example.

    formData = {
    first_name:"",
    last_name:"",
    gender: '',
    birthday: Date,
    has_accepted_conditions: bool
    }
    */

    this.setState({formData:formData})
    this.props.onFormChange && this.props.onFormChange(formData);
  }
  handleFormFocus(e, component){
    //console.log(e, component);
  }
  openTermsAndConditionsURL(){

  }

  render() {
    return (
      <View style={styles.container}>
      <Form
        ref='registrationForm'
        onFocus={this.handleFormFocus.bind(this)}
        onChange={this.handleFormChange.bind(this)}
        label="Personal Information">
        <Separator />
<InputField ref="first_name" style={{
  width:350,
  height:50
}} placeholder="Username" label="Username"/>
       <Separator/>
      <InputField ref="email" style={styles.inputField} placeholder="email" label="Email"/>
       <Separator/>
      <InputField ref="password" style={styles.inputField} placeholder="password" label="Password"/>

          </Form>
        <Text>{JSON.stringify(this.state.formData)}</Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField : {
    flex:1,
    width:400
  },
  buttonSubmit :{
    backgroundColor:'#b3d9ff',
    color:'#fff',
    fontSize:25
  }
});
