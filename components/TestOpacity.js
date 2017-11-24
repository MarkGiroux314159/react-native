import React from 'react';

import {View, StyleSheet} from 'react-native';

class TestOpacity extends React.Component{
    render(){
        return(
            <View style={styles.overLay}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    overLay: {
        width: 200,
        height: 100,
        backgroundColor: "#edbc4b50",
        borderRadius: 10
    }
})

export default TestOpacity;
