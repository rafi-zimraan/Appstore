import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import {hitam, putih} from '../utils/Colors';
import BottomLogReg from '../components/BottomLogReg';
import InputText from '../components/InputText';
import Bottom from '../components/Bottom';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/image/iphone.png')}
        />
        <Text style={styles.counterText}>LOGIN</Text>
        <Text style={styles.counterText2}>Sign Up For Free</Text>
        <InputText />
        <BottomLogReg title="Sign In" />
        <Bottom />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: putih,
    alignItems: 'center',
  },
  logo: {
    marginTop: 40,
    height: 150,
    width: 150,
  },
  counterText: {
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 28,
    color: hitam,
  },
  counterText2: {
    marginTop: 20,
    color: hitam,
  },
});
