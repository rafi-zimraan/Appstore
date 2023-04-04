// MENGUNAKAN API BACKEND
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {biruTua, hitam, putih} from '../utils/Colors';
import {ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../Router';

const Postman = () => {
  //   const navigation =
  //     useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const Reg = () => {
    setLoading(true);
    var formdata = new FormData();
    formdata.append('email', email);
    formdata.append('password', password);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch('https://frontendreq.pondokprogrammer.com/api/login', requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
      .finally(() => setLoading(false));
  };
  return (
    <View>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'white'}
        translucent
      />
      <View style={styles.Container}>
        <Text style={styles.txtNavbar}>Login</Text>
      </View>
      <View style={styles.conterInput}>
        <Text style={styles.name}>Email</Text>
        <TextInput
          placeholder="email"
          style={styles.input}
          onChangeText={(nm: string) => setEmail(nm)}
        />
      </View>
      <View style={styles.conterInput}>
        <Text style={styles.name}>Password</Text>
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(nm: string) => setPassword(nm)}
        />
      </View>
      <TouchableOpacity onPress={() => Reg()} style={styles.Button}>
        {loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={styles.ButtonTxt}>Sign Up</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Postman;

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    backgroundColor: putih,
  },
  Content: {
    margin: 4,
  },
  txtNavbar: {
    fontSize: 27,
    color: hitam,
    fontWeight: '900',
    top: 20,
  },
  NameTxt: {
    fontSize: 19,
    color: hitam,
    top: 52,
    left: 20,
  },
  conterInput: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  name: {
    fontSize: 16,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderColor: 'gray',
    marginTop: 5,
  },
  Button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: biruTua,
    marginRight: 22,
    marginLeft: 22,
    borderRadius: 10,
    elevation: 5,
    borderWidth: 1,
    height: 49,
    top: 60,
  },
  ButtonTxt: {
    color: putih,
  },
});
