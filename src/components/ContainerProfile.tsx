import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {hitam} from '../utils/Colors';

const ContainerProfile = () => {
  return (
    <View style={styles.CounterContainer}>
      <Image
        source={require('../assets/image/FotoRafi.jpg')}
        style={styles.img}
      />
      <Text style={styles.txt}>DON'T PLAY- PLAY BOZZKHU</Text>
    </View>
  );
};

export default ContainerProfile;

const styles = StyleSheet.create({
  CounterContainer: {
    flexDirection: 'row',
    left: 15,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: hitam,
  },
  txt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: hitam,
    marginTop: 20,
    left: 35,
    width: 350,
  },
});
