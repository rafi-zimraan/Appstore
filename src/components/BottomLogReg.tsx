import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {biruTua, putih} from '../utils/Colors';

// interface props {
//   title: string;
// }
type Props = {
  navigation: any;
};

export default class BottomLogReg extends Component<Props> {
  render() {
    // const {title} = this.props;
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Profile')}>
        <View style={styles.bottom}>
          <Text style={styles.txtBottom}>Sign In</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    marginTop: 180,
    borderRadius: 30,
    backgroundColor: biruTua,
    width: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBottom: {
    color: putih,
    fontSize: 25,
    fontWeight: '800',
  },
});
