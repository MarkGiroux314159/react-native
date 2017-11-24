
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

class App extends React.Component{
  render(){
    return(
      <AppNavigator/>
    );
  }
}

const AppNavigator = StackNavigator({
  LoginPage: {screen: LoginPage},
  HomePage: {screen: HomePage},
});

const styles = StyleSheet.create({
  button:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#f7e2a5',
    borderRadius:4,
    borderWidth: 2,
    borderColor: '#424242'
  },
  image: {
    width: 200,
    height: 200
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c9d4fc',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
