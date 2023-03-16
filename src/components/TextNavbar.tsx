import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {hitam} from '../utils/Colors';

const TextNavbar = () => {
  return (
    <View>
      <View style={styles.content}>
        <Image
          style={styles.foto}
          source={require('../assets/icon/hacker.png')}
        />
        <Text style={styles.contentA}>RAFI ZIMRAAN ARJUNA WIJAYA</Text>
      </View>
      <View style={styles.ContentIcon}>
        <Image
          style={styles.foto}
          source={require('../assets/icon/hamburger.png')}
        />
        <Text style={styles.contentA}>CEO Founder Of Taco Everyday</Text>
      </View>
      <View style={styles.ContentIcon}>
        <Image
          style={styles.foto}
          source={require('../assets/icon/travel.png')}
        />
        <Text style={styles.contentA}>Just Play On</Text>
      </View>
      <View style={styles.ContentIcon}>
        <Image style={styles.foto} source={require('../assets/icon/bir.jpg')} />
        <Text style={styles.contentA}>Cold Drink</Text>
      </View>
      <View style={styles.ContentIcon}>
        <Image
          style={styles.foto}
          source={require('../assets/icon/traveling.png')}
        />
        <Text style={styles.contentA}>Traveling</Text>
      </View>
    </View>
  );
};

export default TextNavbar;

const styles = StyleSheet.create({
  content: {
    marginTop: 10,
    left: 15,
    flexDirection: 'row',
  },
  foto: {
    height: 30,
    width: 30,
  },
  contentA: {
    fontWeight: 'bold',
    color: hitam,
    padding: 5,
  },
  ContentIcon: {
    left: 15,
    flexDirection: 'row',
  },
});
