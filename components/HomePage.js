import React from 'react';

import {View, 
    Text, 
    Button, 
    StyleSheet, 
    TextInput,
    Image
} from 'react-native';

import WorkStationList from './WorkStationList';
import ProcessList from './ProcessList';
import CustomButton from './CustomButton';
import DropDown from './DropDown';
import CustomForm from './CustomForm';
import SearchItemsList from './SearchItemsList';
import api from '../api';
import {NAME_C, NAME_V} from '../searchTypes';
import {RenderIf} from './helpers';

class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            batchNames: [
                {name: "Walmart", id: 0},
                {name: "Costco", id: 1},
                {name: "Safeway", id: 2},
                {name: "Superstore", id: 3},
            ],
            workStationNames:[
                {name: "Barn Preparation", id: 0}, 
                {name: "Chick Starting", id: 1}, 
                {name: "Grow Out", id: 2},
                {name: "Moving", id: 3},
                {name: "Egg Gathering", id: 4},
                {name: "Storage", id: 5},
                {name: "Egg Transfer", id: 6},
                {name: "Grading", id: 7},
                {name: "Storage", id: 8},
                {name: "Egg Shipping", id: 9},
            ],
            processNames: [
                {name: "Process 1", id: 0},
                {name: "Process 2", id: 1},
                {name: "Process 3", id: 2},
                {name: "Process 4", id: 3},
            ],
            currIds: {batchID:0, workStationID:0, processID:0},
            formData: {
                batchName: "",
                workStationName: "",
                processName: "",
                nameCompleted: "",
                dateCompleted: {year: "", month: "", day: ""},
                nameVerified: "",
                dateVerified: {year: "", month: "" , day: ""}
            },
            displayFormData: false,
            searchData: [],
            searchScreen: false,
            searchName: ""
        }
    }

    submitForm = data => {
        let index = this.state.currIds;
    
        let apiData = {
            batchName: this.state.batchNames[index.batchID].name,
            workStationName: this.state.workStationNames[index.workStationID].name,
            processName: this.state.processNames[index.processID].name,
            nameCompleted: data.nameCompleted,
            dateCompleted: {year: data.yearCompleted, month: data.monthCompleted, day: data.dayCompleted},
            nameVerified: data.nameVerified,
            dateVerified: {year: data.yearVerified, month: data.monthVerified, day: data.dayVerified}
        }

        api.postFetch(apiData);
    }

    onSearch = () => {
        this.findByCriteria(this.state.searchName , NAME_C);
    }

    setSearchName = (e) => {
        this.setState({searchName: e});
    }

    findByCriteria = (data, criteria) => {
        let jsonData;
        switch(criteria){
            case NAME_C:
                jsonData = {nameCompleted: data};
            break;
            case NAME_V:
                jsonData = {nameVerified: data};
            break;
            default:
        }

        api.getFetch(jsonData).then((res) => {
            let temp = res;
            this.setState({...this.state, searchScreen: true, searchData: res});
        })
    }

    getBatchID = data => {
        this.setState({currIds: {...this.state.currIds, batchID: data}});
    }

    getWorkStationID = data => {
        this.setState({currIds: {...this.state.currIds, workStationID:data}});
    }

    getProcessID = data => {
        this.setState({currIds: {...this.state.currIds, processID:data}});
    }

    DispFormData = () => ( 
        <View>
            <Text style={styles.submitData}> {JSON.stringify(this.state.tempData)} </Text>
        </View>
    );

    render(){
        return(
            <View style={{flex: 1}}>
                <View style={styles.bgImage} >
                    <Image style={{ flex:1, width: null, height: null, resizeMode:'stretch' }} source={require('../resources/NatFarmResize.png')} />
                </View>
                <View style={styles.titleBar}>
                    <Image source={require('../resources/TitleLogo.png')} />
                </View>
                <View style={{flex:1, flexDirection: 'row'}}>
                    <View style={styles.leftBar}>
                        <CustomButton title="Search" onPress={this.onSearch}/>
                        <TextInput style={styles.textInput} onChangeText={(e) => this.setSearchName(e)}/>
                        <CustomButton title="Tasks" onPress={() => this.setState({searchScreen: false})}/>
                        <CustomButton title="Outstanding" />
                    </View>
                    <View style={{flex: 5}}>
                    {RenderIf(!this.state.searchScreen,
                    <View style={{flex: 1}}>
                        <View style={styles.batchBar}>
                            <View style={{flex:1}}>
                                <Text style={styles.textLeft}> BATCH:</Text>
                                <DropDown items={this.state.batchNames} getID={this.getBatchID}/>
                            </View>
                            <View style={{flex: 1}}>
                                {this.state.displayFormData? this.DispFormData(): <View></View>}
                            </View>
                        </View>
                        <View style={{flex:5, flexDirection: 'row'}}>
                            <View style={styles.workStationBar}>
                                <WorkStationList names={this.state.workStationNames} getID={this.getWorkStationID}/>
                            </View>
                            <View style={styles.processBar}>
                                <ProcessList names={this.state.processNames} getID={this.getProcessID} />
                            </View>
                            <View style={styles.formBar}>
                            <View style={{height: 40}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text> WorkStation: </Text>
                                    <Text> {this.state.workStationNames[this.state.currIds.workStationID].name}</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text> Process: </Text>
                                    <Text> {this.state.processNames[this.state.currIds.processID].name}</Text>
                                </View>
                            </View>
                                <CustomForm submitData={this.submitForm}/>
                            </View>
                        </View>
                    </View>
                    )}
                    {RenderIf(this.state.searchScreen,
                        <View style={{flex: 1}}>
                            <SearchItemsList items={this.state.searchData}/>
                        </View>
                    )}
                    </View>
                </View>
                <View style={styles.titleBar}>
                    <CustomButton title="DATA" onPress={this.displayData}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bgImage: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0,
        justifyContent: 'center',
        alignContent: 'center'
    },
    button:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'#68a0cf',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    titleBar:{
        backgroundColor:'#ffffff80',
        borderWidth: 1,
        borderColor: '#424242',
        height:50
    },
    leftBar:{
        backgroundColor:'#f7f7f750',
        borderWidth: 1,
        borderColor: '#424242',
        flex:1
    },
    batchBar:{
        backgroundColor:'#f7f7f775',
        borderWidth: 1,
        borderColor: '#42424275',
        flex:1, 
        flexDirection: 'row',
        justifyContent:'flex-start'
    },
    workStationBar:{
        backgroundColor:'#e8e8e875',
        borderWidth: 1,
        borderColor: '#42424275',
        flex:1
    },
    processBar:{
        backgroundColor:'#e8e8e875',
        borderWidth: 1,
        borderColor: '#42424275',
        flex:1
    },
    formBar:{
        backgroundColor:'#e8e8e890',
        borderWidth: 1,
        borderColor: '#e8e8e890',
        flex:2
    },
    textLeft: {
        fontSize:24,
        fontWeight: 'bold',
        color: '#494949',
        textAlign: 'left'
    },
    textCenter: {
        fontSize:28,
        color: '#494949',
        textAlign: 'center'
    },
    submitData: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    textInput: {
        backgroundColor:'#ffffff80',
        borderRadius:2,
        borderWidth: 1,
        borderColor: '#424242',
        height: 40,
        marginLeft: 2,
        marginRight:2,
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'center',
    },
})

export default HomePage;