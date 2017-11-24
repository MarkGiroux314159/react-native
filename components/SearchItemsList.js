import React from 'react';
import {View, ScrollView} from 'react-native';
import SearchItems from './SearchItems';

class SearchItemsList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ScrollView>
                <View>
                {this.props.items.map((i) => <SearchItems key={i._id} {...i} />)}
                </View>
            </ScrollView>
        );
    }
}

export default SearchItemsList;