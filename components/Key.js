import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class Key extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            if (this.props.Tag === 'History') {
              this.props.navigation.navigate('History');
            } else {
              this.props.keyClick(this.props.keyLog, this.props.math);
            }
          }}
          style={[styles.container, this.props.style]}>
          <Text style={styles.text}>{this.props.Tag}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 22, color: '#fff', fontWeight: 'bold'},
});
