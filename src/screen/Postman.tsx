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
import {biru, biruTua, hitam, putih} from '../utils/Colors';
import {ActivityIndicator} from 'react-native';

const Postman = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password_Confirmation, setPassword_Confirmation] =
    useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const Reg = () => {
    setLoading(true);
    var formdata = new FormData();
    formdata.append('name', name);
    formdata.append('email', email);
    formdata.append('password', password);
    formdata.append('password_confirmation', password_Confirmation);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'https://frontendreq.pondokprogrammer.com/api/register',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
      .finally(() => setLoading(false));
  };
  return (
    <View>
      <View style={styles.Container}>
        <Text style={styles.txtNavbar}>Register</Text>
      </View>
      <View style={styles.Content}>
        <Text style={styles.NameTxt}>Name</Text>
        <TextInput
          style={styles.TxtInput}
          placeholder="name"
          onChangeText={(nm: string) => setName(nm)}
        />
      </View>
      <View style={styles.Content}>
        <Text style={styles.NameTxt}>Email</Text>
        <TextInput
          placeholder="email"
          style={styles.TxtInput}
          onChangeText={(nm: string) => setEmail(nm)}
        />
      </View>
      <View style={styles.Content}>
        <Text style={styles.NameTxt}>Password</Text>
        <TextInput
          placeholder="password"
          style={styles.TxtInput}
          onChangeText={(nm: string) => setPassword(nm)}
        />
      </View>
      <View style={styles.Content}>
        <Text style={styles.NameTxt}>Password_confirmation</Text>
        <TextInput
          placeholder="password_confirmation"
          style={styles.TxtInput}
          onChangeText={(nm: string) => setPassword_Confirmation(nm)}
        />
      </View>
      <TouchableOpacity onPress={() => Reg()} style={styles.Button}>
        {loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={styles.ButtonTxt}>Register</Text>
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
  TxtInput: {
    marginRight: 16,
    marginLeft: 16,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    elevation: 7,
    top: 50,
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
    top: 120,
  },
  ButtonTxt: {
    color: putih,
  },
});
