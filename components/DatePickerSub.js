import React from 'react';
import {View, Select, Picker, Item, StyleSheet} from 'react-native';

class DatePickerSub extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selected: 0
        }
    }

    getID(value){
        this.setState({selected: value});
        this.props.getInfo(value);
    }

    render(){
        return(
        <View style={styles.dropDown}>
            <Picker selectedValue={this.state.selected} mode='dropdown' onValueChange={(value) => this.getID(value)}>
                {this.props.items.map(i => <Picker.Item key={i.id} value={i.id} label={i.name} />)}
            </Picker>
        </View>
        );
    }
};

const styles = StyleSheet.create({
    dropDown:{
        marginRight:2,
        marginLeft:2,
        marginTop:2,
        paddingTop:2,
        paddingBottom:2,
        backgroundColor:'#f7f7f7',
        borderRadius:2,
        borderWidth: 1,
        borderColor: '#424242',
        width: 150,
        height: 40,
        justifyContent: 'center'
      },
    text: {
        fontSize:24,
        color: '#4f2f06',
        textAlign: 'center'
    }
});

export default DatePickerSub;