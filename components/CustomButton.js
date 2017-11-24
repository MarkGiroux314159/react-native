import React from 'react';
import {
    TouchableOpacity, 
    Text,
    StyleSheet
} from 'react-native';

class CustomButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fixedSize: this.props.fixed
        }
    }

    onPress = () => {
        this.props.onPress();
    }

    render(){
        return(
            <TouchableOpacity style={this.state.fixedSize?styles.buttonFixed:styles.button} onPress={this.onPress}>
                <Text style={styles.text}> {this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        marginRight:2,
        marginLeft:2,
        marginTop:1,
        marginBottom:1,
        paddingTop:4,
        paddingBottom:4,
        paddingLeft:4,
        paddingRight:4,
        backgroundColor:'#d8dbd475',
        borderRadius:0,
        borderWidth: 3,
        borderColor: '#d8dbd475',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
      },
    buttonFixed:{
        marginRight:2,
        marginLeft:2,
        marginTop:1,
        marginBottom:1,
        paddingTop:2,
        paddingBottom:2,
        paddingLeft:2,
        paddingRight:2,
        backgroundColor:'#d8dbd475',
        borderRadius:0,
        borderWidth: 3,
        borderColor: '#d8dbd475',
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize:18,
        color: '#4f2f06',
        textAlign: 'center',
        alignSelf: 'center'
    }
});

export default CustomButton;