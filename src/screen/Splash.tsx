import {StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {putih} from '../utils/Colors';

export default class Splash extends Component {
  render() {
    return (
      <View>
        <View style={styles.containerNavbar}>
          <View style={styles.Navbar}>
            <Icon name="home" size={50} color={'black'} />
            <Icon name="search" size={45} color={'black'} />
            <Icon name="film" size={50} color={'black'} />
            <Icon name="comment-dots" size={45} color={'black'} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerNavbar: {
    flex: 1,
  },
  Navbar: {
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-around',
    flexDirection: 'row',
    elevation: 5,
    backgroundColor: putih,
  },
});
