import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

class SearchItems extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text style={styles.text}> Batch: {this.props.batchName} </Text>
                    <Text style={styles.text}> Work Station: {this.props.workStationName} </Text>
                    <Text style={styles.text}> Process: {this.props.processName} </Text>
                    <Text style={styles.text}> Completed by: {this.props.nameCompleted} </Text>
                    <Text style={styles.text}> Verified by: {this.props.nameVerified} </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text style={styles.text}> Year Completed: {this.props.dateCompleted.year} </Text>
                    <Text style={styles.text}> Month Completed: {this.props.dateCompleted.month} </Text>
                    <Text style={styles.text}> Day Completed: {this.props.dateCompleted.day} </Text>
                    <Text style={styles.text}> Year Verified: {this.props.dateVerified.year} </Text>
                    <Text style={styles.text}> Month Verified: {this.props.dateVerified.month} </Text>
                    <Text style={styles.text}> Day Verified: {this.props.dateVerified.day} </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 700,
        backgroundColor: '#e5e5e575',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#3d3c3c75',
        marginBottom: 3,
        flexDirection: 'row'
    },
    text: {
        fontSize:22,
        fontWeight: 'bold',
        color: '#00000075',
        textAlign: 'center'
    }
})

export default SearchItems;