import React from 'react';

import {
    View, 
    Text, 
    StyleSheet,
    TextInput,
} from 'react-native';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            errors: false
        }
    }

    handleChangeEmail = (e) => {
        this.setState({email: e});
    }

    handleChangePassword = (e) => {
        this.setState({password: e});
    }

    handleClick = () => {
        this.setState({errors: true});
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.loginView} >
                    <CustomInput title="Email:" onChangeText={(e) => this.handleChangeEmail(e)} error={this.state.errors}/>
                    <CustomInput title="Password" onChangeText={(e) => this.handleChangePassword(e)} error={this.state.errors}/>
                    <CustomButton title="Submit" onPress={this.handleClick}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       marginLeft: 10,
       marginRight: 10,
       marginTop: 10,
       marginBottom: 10
   },
   loginView: {
       width: 400,
       height: 400
   }
})


export default LoginPage;