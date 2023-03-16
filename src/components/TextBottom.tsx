import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {biru, hitam, putih} from '../utils/Colors';

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
    position: 'absolute',
    flexDirection: 'row',
    fontWeight: 'bold',
  },
  txtFollo: {
    marginTop: 20,
    padding: 20,
    paddingHorizontal: 45,
    backgroundColor: biru,
    elevation: 2,
  },
  txtA: {
    color: hitam,
    fontWeight: 'bold',
  },
});
