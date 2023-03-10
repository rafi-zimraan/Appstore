import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {biru} from '../utils/Colors';

export default class Bottom extends Component {
  render() {
    return (
      <View style={styles.account}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.bottomAccount}>Create accoun</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  account: {
    flexDirection: 'row',
    marginTop: 10,
  },
  bottomAccount: {
    color: biru,
  },
});
