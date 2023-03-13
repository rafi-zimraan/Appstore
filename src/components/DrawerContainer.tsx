import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import {hitam, putih} from '../utils/Colors';

export default class DrawerContainer extends Component {
  render() {
    return (
      <View>
        <View>
          <Image
            source={require('../assets/image/MyImage.jpg')}
            style={styles.bgImage}
          />
          <View style={styles.containerImg}>
            <Image
              source={require('../assets/image/FotoRafi.jpg')}
              style={styles.imgDrawer}
            />
          </View>
          <View style={styles.txtDrawer}>
            <Text style={styles.Drawertxt}>Rafio._</Text>
            <Text style={styles.Drawertxt2}>1.345M Followers</Text>
          </View>
          <View style={styles.Drawertxt3} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  containerImg: {
    alignItems: 'flex-start',
    marginHorizontal: 25,
    marginVertical: 45,
  },
  imgDrawer: {
    // position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: hitam,
  },
  txtDrawer: {
    marginTop: -30,
    paddingHorizontal: 35,
  },
  Drawertxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: putih,
  },
  Drawertxt2: {
    fontSize: 15,
    color: putih,
  },
  Drawertxt3: {
    width: '100%',
    height: 1,
    backgroundColor: hitam,
  },
});
