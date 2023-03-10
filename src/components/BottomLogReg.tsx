import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {biruTua, putih} from '../utils/Colors';

interface props {
  title: string;
}

export default class BottomLogReg extends Component<props> {
  render() {
    const {title} = this.props;
    return (
      <TouchableOpacity>
        <View style={styles.bottom}>
          <Text style={styles.counterBottom}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    marginTop: 180,
    borderRadius: 30,
    backgroundColor: biruTua,
    width: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterBottom: {
    color: putih,
    fontSize: 25,
    fontWeight: '800',
  },
});
