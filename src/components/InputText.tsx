import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {putih} from '../utils/Colors';

interface State {
  mata: boolean;
}

interface Props {}

export default class inputText extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      mata: true,
    };
  }
  render() {
    return (
      <>
        <View>
          <TextInput
            style={styles.inputEmail}
            placeholder={'Email'}></TextInput>
        </View>
        <View style={styles.Coput}>
          <TextInput
            style={styles.inputPassword}
            placeholder={'Password'}
            secureTextEntry={this.state.mata}></TextInput>
          <TouchableOpacity
            onPress={() => this.setState({mata: !this.state.mata})}>
            <Image
              style={styles.foto}
              source={require('../assets/icon/mata.png')}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  inputEmail: {
    justifyContent: 'flex-start',
    borderRadius: 10,
    backgroundColor: putih,
    width: 400,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 50,
    borderBottomWidth: 2,
  },
  Coput: {
    flexDirection: 'row',
  },
  inputPassword: {
    justifyContent: 'flex-start',
    borderRadius: 10,
    width: 400,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    borderBottomWidth: 2,
  },
  foto: {
    width: 30,
    height: 30,
    flexDirection: 'row',
    position: 'absolute',
    right: 30,
    marginRight: 5,
    marginLeft: 50,
    marginTop: 15,
  },
});
