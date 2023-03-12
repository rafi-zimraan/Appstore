import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {hitam} from '../utils/Colors';

export default class DrawerContent extends Component {
  render() {
    return (
      <View>
        <View style={styles.content}>
          <View style={styles.IconContent}>
            <TouchableOpacity>
              <Icon name="account-outline" size={25} color={hitam} />
            </TouchableOpacity>
            <Text style={styles.txtContent}>Profile</Text>
          </View>
          <View style={styles.IconContent}>
            <TouchableOpacity>
              <Icon name="facebook-messenger" size={25} color={hitam} />
            </TouchableOpacity>
            <Text style={styles.txtContent}>Messages</Text>
          </View>
          <View style={styles.IconContent}>
            <TouchableOpacity>
              <Icon name="access-point-check" size={25} color={hitam} />
            </TouchableOpacity>
            <Text style={styles.txtContent}>Activity</Text>
          </View>
          <View style={styles.IconContent}>
            <TouchableOpacity>
              <Icon name="format-list-checkbox" size={25} color={hitam} />
            </TouchableOpacity>
            <Text style={styles.txtContent}>List</Text>
          </View>
          <View style={styles.IconContent}>
            <TouchableOpacity>
              <Icon name="chart-bar" size={25} color={hitam} />
            </TouchableOpacity>
            <Text style={styles.txtContent}>Report</Text>
          </View>
          <View style={styles.IconContent}>
            <TouchableOpacity>
              <Icon name="chart-line" size={25} color={hitam} />
            </TouchableOpacity>
            <Text style={styles.txtContent}>Statistic</Text>
          </View>
          <View style={styles.IconContent}>
            <TouchableOpacity>
              <Icon name="login-variant" size={25} color={hitam} />
            </TouchableOpacity>
            <Text style={styles.txtContent}>Sign Out</Text>
          </View>
        </View>
        <View style={styles.BottomDrawer}>
          <View style={styles.IconBottom}>
            <TouchableOpacity>
              <Icon name="share-variant-outline" size={25} color={hitam} />
            </TouchableOpacity>
            <Text style={styles.txtContent}>Tell a Friend</Text>
          </View>
          <View style={styles.IconBottom2}>
            <TouchableOpacity>
              <Icon name="help-circle" size={25} color={hitam} />
            </TouchableOpacity>
            <Text style={styles.txtContent}>Help and Feedback</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    position: 'absolute',
  },
  IconContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
    padding: 10,
    marginHorizontal: 35,
  },
  txtContent: {
    left: 20,
    fontSize: 16,
    fontWeight: '900',
    color: hitam,
  },
  BottomDrawer: {
    position: 'absolute',
  },
  IconBottom: {
    marginTop: 470,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 33,
    padding: 5,
  },
  IconBottom2: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 45,
    marginVertical: 10,
  },
});
