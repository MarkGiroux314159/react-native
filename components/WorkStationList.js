import React from 'react';
import {Button, View} from 'react-native';
import WorkStation from './WorkStation';

class WorkStationList extends React.Component{
    constructor(props){
        super(props);
    }

    getID = data => {
        this.props.getID(data);
    }

    render(){
        return(
            <View>
                {this.props.names.map(i => <WorkStation key={i.id} {...i} getID={this.getID}/>)}
            </View>
        );
    }
}

export default WorkStationList;