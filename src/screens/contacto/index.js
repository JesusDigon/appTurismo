import React, { Component } from 'react';
import { View, Text } from 'react-native';
import getStyles from "../../data/styles";

const styles = getStyles();

export default class Contacto extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.content} >
        <Text style={styles.content}> Contacto </Text>
      </View>
    );
  }
}
