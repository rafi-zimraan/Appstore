import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import ContainerProfile from '../components/ContainerProfile';
import TextNavbar from '../components/TextNavbar';
import HighLight from '../components/HighLight';
import TextBottom from '../components/TextBottom';
import {hitam, putih} from '../utils/Colors';
import ImgContent from '../components/ImgContent';
import BottomIMG from '../components/BottomIMG';

const Profile = () => {
  return (
    <View style={styles.container}>
      <ContainerProfile />
      <TouchableOpacity>
        <View style={styles.navbar}>
          <Text style={styles.txtBottom}>Edit Profile</Text>
        </View>
      </TouchableOpacity>
      <TextNavbar />
      <HighLight />
      <TextBottom />
      <ImgContent />
      <View style={styles.ContainerGaris}></View>
      <BottomIMG />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: putih,
    alignContent: 'center',
    flex: 1,
    marginTop: 19,
  },
  navbar: {
    borderRadius: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: 190,
    height: 35,
    marginLeft: 150,
    marginTop: -50,
  },
  txtBottom: {
    fontSize: 20,
    color: putih,
  },
  ContainerGaris: {
    // height: 1,
    // elevation: 5,
    // backgroundColor: hitam,
  },
});
