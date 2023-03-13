import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {putih} from '../utils/Colors';

const BottomIMG = () => {
  return (
    <View style={styles.Bottom}>
      <View style={styles.BottomA}>
        <Image
          source={require('../assets/icon/feed.png')}
          style={styles.BottomImg}
        />
      </View>
      <View style={styles.BottomA}>
        <Image
          source={require('../assets/icon/Search.png')}
          style={styles.BottomImg}
        />
      </View>
      <View style={styles.BottomA}>
        <Image
          source={require('../assets/icon/videoCpalsy.png')}
          style={styles.BottomImg}
        />
      </View>
      <View style={styles.BottomA}>
        <Image
          source={require('../assets/icon/IconA.png')}
          style={styles.BottomImg}
        />
      </View>
      <View style={styles.BottomA}>
        <Image
          source={require('../assets/icon/IconC.png')}
          style={styles.BottomImg}
        />
      </View>
    </View>
  );
};

export default BottomIMG;

const styles = StyleSheet.create({
  Bottom: {
    flexDirection: 'row',
    marginTop: 55,
    elevation: 10,
    backgroundColor: putih,
  },
  BottomA: {},
  BottomImg: {
    height: 30,
    width: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 55,
    marginHorizontal: 30,
  },
});
