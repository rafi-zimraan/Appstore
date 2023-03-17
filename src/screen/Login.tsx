import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../Router';
import {biru, biruTua, hitam, putih} from '../utils/Colors';
import InputText from '../components/InputText';

const Login = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  // setTimeout(() => {
  //   navigation.replace('profile');
  // }, 3000);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/image/iphone.png')}
      />
      <Text style={styles.counterText}>LOGIN</Text>
      <Text style={styles.counterText2}>Sign Up For Free</Text>
      <InputText />
      <TouchableOpacity>
        <View style={styles.bottom}>
          <Text
            onPress={() => navigation.navigate('profile')}
            style={styles.txtBottom}>
            Sign In
          </Text>
        </View>
      </TouchableOpacity>
      {/* <BottomLogReg /> */}
      <View style={styles.account}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.bottomAccount}>Create accoun</Text>
        </TouchableOpacity>
      </View>
      {/* <Bottom /> */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: putih,
  },
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
  bottom: {
    marginTop: 140,
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
  account: {
    flexDirection: 'row',
    marginTop: 10,
  },
  bottomAccount: {
    color: biru,
  },
});
