import React from 'react'
import CustomButton from './CustomButton';

class Process extends React.Component{

    getID = () => {
        this.props.getID(this.props.id);
    }

    render(){
        return(
            <CustomButton title={this.props.name} onPress={this.getID}/>
        );
    }
}

export default Process;