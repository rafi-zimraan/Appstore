import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {putih} from '../utils/Colors';
import {TouchableOpacity} from 'react-native/Libraries/Components/Touchable/TouchableOpacity';

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
    position: 'absolute',
    flexDirection: 'row',
    marginVertical: 625,
  },
  BottomA: {
    padding: 5,
  },
  BottomImg: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    marginVertical: 50,
    marginHorizontal: 25,
  },
});
