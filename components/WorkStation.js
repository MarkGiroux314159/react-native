import React from 'react';
import {View} from 'react-native';
import CustomButton from './CustomButton';

class WorkStation extends React.Component{
    
    getID = () => {
        this.props.getID(this.props.id);
    }

    render(){
        return(
            <CustomButton title={this.props.name} onPress={this.getID} />
        );
    }
}

export default WorkStation;