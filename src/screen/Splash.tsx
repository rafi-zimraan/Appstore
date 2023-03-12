import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {hitam, putih} from '../utils/Colors';
import {Fumi} from 'react-native-textinput-effects';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.containerNavbar}>
        <View>
          <Image
            source={require('../assets/image/FotoRafi.jpg')}
            style={styles.Img}
          />
        </View>
        <Fumi
          label={'Email'}
          iconClass={Icon}
          iconName={'university'}
          iconColor={hitam}
          iconSize={20}
          inputPadding={16}
        />
        <Fumi
          label={'Password'}
          iconClass={Icon}
          iconName={'lock'}
          iconColor={hitam}
          iconSize={20}
          inputPadding={16}
          secureTextEntry={true}
        />
        <Fumi
          label={'Login'}
          iconClass={Icon}
          iconName={'user-circle'}
          iconColor={hitam}
          iconSize={20}
          inputPadding={16}
        />
        <View style={styles.Navbar}>
          <TouchableOpacity>
            <Icon name="home" size={40} color={'black'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="search" size={35} color={'black'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="film" size={40} color={'black'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="comment-dots" size={35} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerNavbar: {
    flex: 1,
  },
  Img: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: hitam,
    borderWidth: 1,
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
