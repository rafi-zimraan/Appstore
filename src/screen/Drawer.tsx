import {Text, StyleSheet, View, DrawerLayoutAndroid} from 'react-native';
import React, {Component} from 'react';
import {putih} from '../utils/Colors';

export default class Drawer extends Component {
  private drawerCut = React.createRef<DrawerLayoutAndroid>();
  render() {
    const navigationView = (
      <View
        style={{
          flex: 1,
          backgroundColor: putih,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text onPress={() => this.drawerCut.current?.closeDrawer()}>
          Navigation Menu
        </Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        ref={this.drawerCut}
        drawerWidth={300}
        drawerPosition={'right'}
        renderNavigationView={() => navigationView}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{fontSize: 30, marginVertical: 10}}
            onPress={() => this.drawerCut.current?.openDrawer()}>
            Open Drawer
          </Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({});
