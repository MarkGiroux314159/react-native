import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import CustomButton from './CustomButton';
import DropDown from './DropDown';
import DatePicker from './DatePicker';

class CustomForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            months: [
                {name: "January", id: 0},
                {name: "February", id: 1},
                {name: "March", id: 2},
                {name: "April", id: 3},
                {name: "May", id: 4},
                {name: "June", id: 5},
                {name: "July", id: 6},
                {name: "August", id: 7},
                {name: "September", id: 8},
                {name: "October", id: 9},
                {name: "November", id: 10},
                {name: "December", id: 11},
            ],
            days: [
                {name: "1st", id: 0},
                {name: "2nd", id: 1},
                {name: "3rd", id: 2},
                {name: "4th", id: 3},
                {name: "5th", id: 4},
                {name: "6th", id: 5},
                {name: "7th", id: 6},
                {name: "8th", id: 7},
                {name: "9th", id: 8},
                {name: "10th", id: 9},
                {name: "11th", id: 10},
                {name: "12th", id: 11},
                {name: "13th", id: 12},
                {name: "14th", id: 13},
                {name: "15th", id: 14},
                {name: "16th", id: 15},
                {name: "17th", id: 16},
                {name: "18th", id: 17},
                {name: "19th", id: 18},
                {name: "20th", id: 19},
                {name: "21th", id: 20},
                {name: "22th", id: 21},
                {name: "23th", id: 22},
                {name: "24th", id: 23},
                {name: "25th", id: 24},
                {name: "26th", id: 25},
                {name: "27th", id: 26},
                {name: "28th", id: 27},
                {name: "29th", id: 28},
                {name: "30th", id: 29},
                {name: "31th", id: 30},
            ],
            years: [
                {name: "2000", id: 0},
                {name: "2001", id: 1},
                {name: "2002", id: 2},
                {name: "2003", id: 3},
                {name: "2004", id: 4},
                {name: "2005", id: 5},
                {name: "2006", id: 6},
                {name: "2007", id: 7},
                {name: "2008", id: 8},
                {name: "2009", id: 9},
                {name: "2010", id: 10},
                {name: "2011", id: 11},
                {name: "2012", id: 12},
                {name: "2013", id: 13},
                {name: "2014", id: 14},
                {name: "2015", id: 15},
                {name: "2016", id: 16},
                {name: "2017", id: 17},
                {name: "2018", id: 18},
                {name: "2019", id: 19},
                {name: "2020", id: 20},
            ],
            formData: {
                nameCompleted: "",
                yearCompleted: "",
                monthCompleted: "",
                dayCompleted: "",
                nameVerified: "",
                yearVerified: "",
                monthVerified: "",
                dayVerified: ""
            }
        }
    }

    submitData = () => {
        this.props.submitData(this.state.formData);
    }

    onChangeNameCompleted = (e) => {
        this.setState({formData: {...this.state.formData, nameCompleted: e}});
    }

    onChangeNameVerified = (e) => {
        this.setState({formData: {...this.state.formData, nameVerified: e}});
    }

    getDateCompleted = (data) => {
        this.setState({formData: {...this.state.formData, yearCompleted: data.year.name, monthCompleted: data.month.name, dayCompleted: data.day.name}});
    }

    getDateVerified = (data) => {
        this.setState({formData: {...this.state.formData, yearVerified: data.year.name, monthVerified: data.month.name, dayVerified: data.day.name}});
    }

    render(){
        return(
            <View>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.text}> Completed By:</Text>
                <TextInput style={styles.textInput} onChangeText={e => this.onChangeNameCompleted(e)}/>
                <Text style={styles.text}> Date:</Text>
                <DatePicker getDate={this.getDateCompleted} getDate={this.getDateCompleted}/>
            </View>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.text}> Verified By: </Text>
                <TextInput style={styles.textInput} onChangeText={e => this.onChangeNameVerified(e)}/>
                <Text style={styles.text}> Date:</Text>
                <DatePicker getDate={this.getDateVerified} getDate={this.getDateVerified}/>
            </View>
            <View style={{alignItems: 'center', marginTop: 10}}>
                <CustomButton fixed={true} title="Submit" onPress={this.submitData}/>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor:'#ffffff',
        borderRadius:2,
        borderWidth: 1,
        borderColor: '#424242',
        width: 400,
    },
    text: {
        fontSize:28,
        color: '#494949',
        textAlign: 'center'
    }
});

export default CustomForm;