import {StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {putih} from '../utils/Colors';

import ContainerCreate from '../components/ContainerCreate';
import ContentCreate from '../components/ContentCreate';
import BottomCreate from '../components/BottomCreate';

export default class CreateAccoun extends Component {
  render() {
    return (
      <View style={styles.ContainerNavbar}>
        <ContainerCreate />
        <ContentCreate />
        <BottomCreate />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ContainerNavbar: {
    flex: 1,
    backgroundColor: putih,
  },
});
