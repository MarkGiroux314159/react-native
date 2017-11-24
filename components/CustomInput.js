import React from 'react';

import {
    View,
    TextInput,
    Text,
    StyleSheet
} from 'react-native';
import CustomButton from './CustomButton';

class CustomInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currText: ""
        }
    }

    handleChangeText = (e) => {
        this.setState({currText: e});
        this.props.onChangeText(e); // pass text to parent
    }
    
    render(){
        return(
            <View>
                <Text style={this.props.error? styles.textError: styles.text}> {this.props.title} </Text>
                <TextInput style={this.props.error? styles.inputError: styles.input} onChangeText={(e) => this.handleChangeText(e)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 10,
    },
    textError: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ff8787',
        marginBottom: 10,
    },
    input: {
        backgroundColor:'#ffffff',
        borderRadius:2,
        borderWidth: 1,
        borderColor: '#000000',
        textDecorationLine: 'none'
    },
    inputError: {
        backgroundColor:'#ff8787',
        borderRadius:2,
        borderWidth: 1,
        borderColor: '#000000',
        textDecorationLine: 'none'
    }
});

export default CustomInput;