import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import ComponentProfile from './ComponentProfile';

const HighLight = () => {
  return (
    <View>
      <ScrollView horizontal style={styles.tema1}>
        <View style={styles.tema}>
          <ComponentProfile
            gambar="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
            nama="London"
            source={0}
          />
          <ComponentProfile
            gambar="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            nama="Paris"
            source={0}
          />
          <ComponentProfile
            gambar="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            nama="America"
            source={0}
          />
          <ComponentProfile
            gambar="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            nama="Madinah"
            source={0}
          />
          <ComponentProfile
            gambar="https://haji.kemenag.go.id/v4/sites/default/files/2022-07/kabah-di-masjidil-haram-makkah-arab-saudi-selasa-_121024122849-678-830x480_0.jpg"
            nama="Mekkah"
            source={0}
          />
          <ComponentProfile
            gambar="https://e5g2g5v2.rocketcdn.me/wp-content/uploads/2022/11/Suriname-wann-ist-beste-Reisezeit.jpg.webp"
            nama="Suriname"
            source={0}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HighLight;

const styles = StyleSheet.create({
  tema1: {
    flexDirection: 'row',
    marginTop: 35,
  },
  tema: {
    flexDirection: 'row-reverse',
  },
});
