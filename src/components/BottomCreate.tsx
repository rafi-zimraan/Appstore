import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {biruTua, hitam, putih} from '../utils/Colors';

export default class BottomCreate extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
          <View style={styles.BottomCreat}>
            <Text style={styles.txtIcon}>Sign Up</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.txtBottom}>
          <Text style={styles.BottomTxt}>
            you can protect your privacy for posterity
          </Text>
          <Text style={styles.BottomTxt}>By storing your data properly</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  txtIcon: {
    color: putih,
    marginHorizontal: 10,
    fontWeight: '900',
    fontSize: 17,
  },
  BottomCreat: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 45,
    marginVertical: 290,
    backgroundColor: biruTua,
    borderRadius: 15,
    width: 350,
    height: 50,
  },
  txtBottom: {
    position: 'absolute',
    marginVertical: 350,
    marginHorizontal: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomTxt: {
    fontWeight: '900',
    color: hitam,
  },
});
