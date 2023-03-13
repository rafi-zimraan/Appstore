import {Text, StyleSheet, View, DrawerLayoutAndroid} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {biru, hitam, putih} from '../utils/Colors';
import DrawerContainer from '../components/DrawerContainer';
import DrawerContent from '../components/DrawerContent';

export default class DrawerLatihan extends Component {
  private drawerRef = React.createRef<DrawerLayoutAndroid>();
  render() {
    const navigationView = (
      <View>
        <DrawerContainer />
        <DrawerContent />
        <View style={styles.Drawertxt4} />
        <Icon
          onPress={() => this.drawerRef.current?.closeDrawer()}
          name="close"
          size={35}
          style={{position: 'absolute', right: 3, color: '#FFFFFF'}}
        />
      </View>
    );
    return (
      <DrawerLayoutAndroid
        ref={this.drawerRef}
        drawerWidth={350}
        drawerPosition={'left'}
        renderNavigationView={() => navigationView}>
        <View style={styles.Icon}>
          <Icon
            onPress={() => this.drawerRef.current?.openDrawer()}
            name="menu"
            size={50}
            color={'black'}
          />
        </View>
        <View style={styles.counterDrawer}>
          <Text style={styles.txt}>DrawerLatihan</Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  Drawertxt4: {
    width: '100%',
    height: 1,
    backgroundColor: hitam,
    marginVertical: 450,
  },

  Icon: {
    width: '100%',
    Hight: 50,
  },
  counterDrawer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: 'bold',
  },
});
