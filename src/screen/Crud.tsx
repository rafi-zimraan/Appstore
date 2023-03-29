import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {putih} from '../utils/Colors';

interface Item {
  item: string;
}

const Crud = () => {
  const [text, setText] = useState<string>('');
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const create = (text: string) => {
    setData(prevData => {
      const newData = [...prevData, {item: text}];
      console.log(newData);
      saveData(newData);
      return newData;
    });
  };

  // UNTUK MENYIMPAN DATA
  const saveData = async (value: Array<{item: string}>) => {
    try {
      await AsyncStorage.setItem('database', JSON.stringify(value));
    } catch (e) {
      console.log('save data eror', e);
    }
  };

  // UNTUK MEMUNCULKAN DATA AGAR PERMANENST
  const getData = async () => {
    try {
      let value = await AsyncStorage.getItem('database');
      if (value !== null) {
        const parseValue = JSON.parse(value);
        console.log(parseValue);
        setData(parseValue);
      }
    } catch (error) {
      console.log('save data eror', error);
    }
  };

  return (
    <View style={styles.Container}>
      {data.map((value, index) => (
        <View key={index} style={styles.ContentTxt}>
          <Text>{value.item}</Text>
        </View>
      ))}
      <View style={styles.Content}>
        <View style={styles.Content1}>
          <Text style={styles.Content2}>Hasil Input Data</Text>
        </View>
        <TextInput
          style={styles.Content3}
          placeholder={'Masukkan data'}
          onChangeText={t => setText(t)}
        />
        <TouchableOpacity style={styles.Content4} onPress={() => create(text)}>
          <Text style={{color: 'white'}}>Tambah</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Crud;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: putih,
  },
  ContentTxt: {
    bottom: 370,
    left: 10,
  },
  Content: {
    padding: 10,
    flexDirection: 'row',
  },
  Content1: {
    position: 'absolute',
    bottom: 700,
    marginHorizontal: 170,
  },
  Content2: {
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
  },
  Content3: {
    borderWidth: 1,
    borderRadius: 6,
    bottom: 2,
    padding: 10,
    width: '80%',
    left: 12,
  },
  Content4: {
    justifyContent: 'center',
    backgroundColor: 'blue',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 6,
    width: '15%',
    left: 18,
    bottom: 2,
  },
});
function getData() {
  throw new Error('Function not implemented.');
}
