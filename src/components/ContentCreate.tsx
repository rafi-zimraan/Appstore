import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {biruTua, hitam, putih} from '../utils/Colors';

interface State {
  eye: boolean;
}

interface Props {}

export default class ContentCreate extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      eye: true,
    };
  }
  render() {
    return (
      <View>
        <TouchableOpacity>
          <View style={styles.IconCreat}>
            <Icon name="facebook-square" size={25} color={putih} />
            <Text style={styles.txtIcon}>Log in whith facebook</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.Garis}>
          <View style={styles.GarisA}></View>
          <Text style={styles.GarisTxt}>OR</Text>
          <View style={styles.GarisB}></View>
        </View>
        <View>
          <TextInput
            placeholder="Put your email"
            style={styles.contentEmail}></TextInput>
        </View>
        <View>
          <TextInput
            placeholder="Full Name"
            style={styles.contentName}></TextInput>
        </View>
        <View>
          <TextInput
            placeholder="Username"
            style={styles.contentUsername}></TextInput>
        </View>
        <View style={styles.password}>
          <TextInput
            placeholder="Password"
            style={styles.contentPassword}
            secureTextEntry={this.state.eye}></TextInput>
          <TouchableOpacity
            onPress={() => this.setState({eye: !this.state.eye})}>
            <Image
              source={require('../assets/icon/mata.png')}
              style={styles.LogoMata}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  IconCreat: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 40,
    backgroundColor: biruTua,
    borderRadius: 10,
    width: 350,
    height: 50,
  },
  txtIcon: {
    color: putih,
    marginHorizontal: 10,
    fontWeight: '900',
    fontSize: 17,
  },
  Garis: {
    marginTop: 80,
  },
  GarisA: {
    width: '40%',
    height: 2,
    backgroundColor: hitam,
  },
  GarisTxt: {
    marginHorizontal: 210,
    marginTop: -10,
    width: 30,
    height: 35,
    fontSize: 16,
    fontWeight: '900',
  },
  GarisB: {
    width: '40%',
    height: 2,
    backgroundColor: hitam,
    marginTop: -27,
    left: 260,
  },
  contentEmail: {
    position: 'absolute',
    borderRadius: 10,
    backgroundColor: putih,
    marginVertical: 40,
    borderBottomWidth: 2,
    borderWidth: 1,
    borderColor: hitam,
    paddingLeft: 20,
    marginLeft: 40,
    height: 50,
    width: 350,
  },
  contentName: {
    position: 'absolute',
    borderRadius: 10,
    backgroundColor: putih,
    marginVertical: 95,
    borderBottomWidth: 2,
    borderWidth: 1,
    borderColor: hitam,
    paddingLeft: 20,
    marginLeft: 40,
    height: 50,
    width: 350,
  },
  contentUsername: {
    position: 'absolute',
    borderRadius: 10,
    backgroundColor: putih,
    marginVertical: 150,
    borderBottomWidth: 2,
    borderWidth: 1,
    borderColor: hitam,
    paddingLeft: 20,
    marginLeft: 40,
    height: 50,
    width: 350,
  },
  password: {
    flexDirection: 'row',
    marginVertical: -5,
  },
  contentPassword: {
    position: 'absolute',
    borderRadius: 10,
    backgroundColor: putih,
    marginVertical: 210,
    borderBottomWidth: 2,
    borderWidth: 1,
    borderColor: hitam,
    paddingLeft: 20,
    marginLeft: 40,
    height: 50,
    width: 350,
  },
  LogoMata: {
    position: 'absolute',
    marginVertical: 220,
    marginHorizontal: 350,
    width: 30,
    height: 30,
  },
});
