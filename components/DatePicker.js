import React from 'react';
import {View} from 'react-native';
import DatePickerSub from './DatePickerSub';
import CustomButton from './CustomButton';

class DatePicker extends React.Component{
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
            currDate: {year: "", month: "", day: ""}
        }
    }

    getYear = data => {
        let temp = this.state.years[data];
        this.setState({ currDate :{...this.state.currDate, year: temp}});
    }

    getMonth = data => {
        let temp = this.state.months[data];
        this.setState({ currDate :{...this.state.currDate, month: temp}});
    }

    getDay = data => {
        let temp = this.state.days[data];
        this.setState({ currDate :{...this.state.currDate, day: temp}});
    }

    getDateInfo = () => {
        let data = this.state.currDate;
        this.props.getDate(data);
        alert("Date Entered");
    }

    render(){
        return(
            <View style={{flexDirection: 'row'}}>
                <DatePickerSub style={{height: 40}} items={this.state.months} getInfo={this.getMonth} />
                <DatePickerSub style={{height: 40}} items={this.state.days} getInfo={this.getDay}/>
                <DatePickerSub style={{height: 40}} items={this.state.years} getInfo={this.getYear}/>
                <CustomButton title="Enter" onPress={this.getDateInfo}/>
            </View>
        );
    }
}

export default DatePicker;