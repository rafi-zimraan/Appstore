import {Image, ImageProps, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
import {hitam} from '../utils/Colors';

interface Props extends ImageProps {
  nama: string;
  gambar: string;
}

const ComponentProfile: React.FC<Props> = ({nama, gambar}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: gambar}} />
      <Text style={styles.txt}>{nama}</Text>
    </View>
  );
};

export default ComponentProfile;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: hitam,
  },
  txt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: hitam,
    maxWidth: 100,
  },
});
