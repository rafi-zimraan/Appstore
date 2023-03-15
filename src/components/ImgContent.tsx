import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {hitam, putih} from '../utils/Colors';

const ImgContent = () => {
  return (
    <View style={styles.IMG}>
      <View style={styles.conterIMG}>
        <TouchableOpacity>
          <View style={styles.IMGVieu}>
            <Image
              source={require('../assets/icon/feed.png')}
              style={styles.contentIMG}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.IMGVieu}>
            <Image
              source={require('../assets/icon/IconB.png')}
              style={styles.contentIMG}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.IMGVieu}>
            <Image
              source={require('../assets/icon/IconA.png')}
              style={styles.contentIMG}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.IMGVieu}>
            <Image
              source={require('../assets/icon/IconC.png')}
              style={styles.contentIMG}
            />
          </View>
        </TouchableOpacity>
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
    elevation: 2,
  },
  IMGVieu: {
    marginHorizontal: 34,
    paddingVertical: 10,
  },
  contentIMG: {
    alignContent: 'center',
    height: 40,
    width: 40,
  },
});
