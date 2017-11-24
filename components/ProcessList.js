import React from 'react';
import {View} from 'react-native';
import Process from './Process';

class ProcessList extends React.Component{
    getID = data => {
        this.props.getID(data);
    }

    render(){
        return(
            <View>
                {this.props.names.map(i => <Process key={i.id} {...i} getID={this.props.getID}/>)}
            </View>
        );
    }
}

export default ProcessList;