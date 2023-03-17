import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {biruTua, putih} from '../utils/Colors';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../Router';

const BottomLogReg = () => {
  return (
    <TouchableOpacity>
      <View style={styles.bottom}>
        <Text style={styles.txtBottom}>Sign In</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BottomLogReg;

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
  txtBottom: {
    color: putih,
    fontSize: 25,
    fontWeight: '800',
  },
});
