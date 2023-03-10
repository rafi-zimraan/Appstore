import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {putih} from '../utils/Colors';

const ImgContent = () => {
  return (
    <View style={styles.IMG}>
      <View style={styles.conterIMG}>
        <View style={styles.IMGVieu}>
          <Image
            source={require('../assets/icon/feed.png')}
            style={styles.contentIMG}
          />
        </View>
        <View style={styles.IMGVieu}>
          <Image
            source={require('../assets/icon/IconB.png')}
            style={styles.contentIMG}
          />
        </View>
        <View style={styles.IMGVieu}>
          <Image
            source={require('../assets/icon/IconA.png')}
            style={styles.contentIMG}
          />
        </View>
        <View style={styles.IMGVieu}>
          <Image
            source={require('../assets/icon/IconC.png')}
            style={styles.contentIMG}
          />
        </View>
      </View>
    </View>
  );
};

export default ImgContent;

const styles = StyleSheet.create({
  IMG: {
    flexDirection: 'row',
  },
  conterIMG: {
    flexDirection: 'row',
    backgroundColor: putih,
    elevation: 5,
    paddingLeft: 20,
  },
  IMGVieu: {
    marginHorizontal: 10,
    padding: 25,
    marginTop: 20,
  },
  contentIMG: {
    alignContent: 'center',
    height: 40,
    width: 40,
    flexDirection: 'column',
  },
});
