import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hitam} from '../utils/Colors';

const TextBottom = () => {
  return (
    <View>
      <View style={styles.containerTxt}>
        <View style={styles.txtFollo}>
          <Text style={styles.txtA}>99,999</Text>
          <Text style={styles.txtA}>Post</Text>
        </View>
        <View style={styles.txtFollo}>
          <Text style={styles.txtA}>27,282M</Text>
          <Text style={styles.txtA}>Followers</Text>
        </View>
        <View style={styles.txtFollo}>
          <Text style={styles.txtA}>23,571K</Text>
          <Text style={styles.txtA}>Following</Text>
        </View>
      </View>
    </View>
  );
};

export default TextBottom;

const styles = StyleSheet.create({
  containerTxt: {
    flexDirection: 'row',
    fontWeight: 'bold',
  },
  txtFollo: {
    marginTop: -10,
    flexDirection: 'column',
    padding: 40,
  },
  txtA: {
    color: hitam,
    fontWeight: 'bold',
  },
});
