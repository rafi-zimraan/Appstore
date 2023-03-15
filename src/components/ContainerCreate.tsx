import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import {biru} from '../utils/Colors';

export default class ContainerCreate extends Component {
  render() {
    return (
      <View>
        <View style={styles.containerCreat}>
          <Image
            source={require('../assets/icon/instagram.png')}
            style={styles.foto}
          />
          <Text style={styles.txtCreat2}>
            Sign up to see photo and videos from your friends
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  foto: {
    width: 350,
    height: 100,
  },
  containerCreat: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 800,
    marginVertical: 30,
  },
  txtCreat2: {
    fontSize: 16,
    color: biru,
    marginVertical: 5,
  },
});
