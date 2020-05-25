import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home  from './src/screens/home';
import { render } from 'react-dom';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './src/navigation/AppNavigator';





const Stack= createStackNavigator();


class App extends React.Component {
  render () {
  return (
    <React.Fragment>
    <AppNavigator />
    </React.Fragment>
  )
  }

}

export default App;
