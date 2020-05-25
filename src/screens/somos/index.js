import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import getStyles from "../../data/styles";


const styles = getStyles();

export default class Somos extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={[styles.container,{backgroundColor: "rgba(1,116,223,1)"}]}>
        <View style={styles.buton_div}>
        <Text style={styles.text}> Quienes somos </Text>
        </View>
      </View>
    );
  }
}
