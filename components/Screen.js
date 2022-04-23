import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Log from './Log';

export default class Screen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Log log={this.props.log} />
        <Text style={styles.result}>{this.props.result}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#545e5b',
  },
  result: {
    textAlign: 'right',
    fontSize: 60,
    marginRight: 10,
  },
});
