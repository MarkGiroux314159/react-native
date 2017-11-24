import React, {Component} from 'react';
import {Button} from 'react-native';

class Buttons extends Component{

    render(){
        return(
            <Button onPress={this.props.multiply} title={this.props.name}></Button>
        );
    }
}

export default Buttons;