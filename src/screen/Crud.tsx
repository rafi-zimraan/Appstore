import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {hitam, putih} from '../utils/Colors';

interface Item {
  item: string;
}

const Crud = () => {
  const [text, setText] = useState<string>('');
  const [data, setData] = useState<Item[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [editMode, setEditMode] = useState<boolean>(false);

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

  const editData = () => {
    const newData2 = [...data];
    newData2[index].item = text;

    setData(newData2);
    setText('');
    setEditMode(false);

    saveData(newData2);
  };

  const deleteData = () => {
    const newData3 = [...data];
    newData3.splice(index, 1);

    setData(newData3);
    setEditMode(false);
    saveData(newData3);
  };

  return (
    <View style={styles.Container}>
      {data.map((value, index) => (
        <TouchableOpacity
          onPress={() => {
            setText(value.item);
            setIndex(index);
            setEditMode(true);
          }}
          key={index}>
          <View style={styles.ContentTxt}>
            <Text style={styles.txt}>
              {index}. {value.item}
            </Text>

            <Button
              onPress={() => {
                setIndex(index);
                deleteData();
              }}
              title="x"
            />
          </View>
        </TouchableOpacity>
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
        {editMode ? (
          <TouchableOpacity
            style={styles.Content4}
            onPress={() => (editMode ? editData() : create(text))}>
            <Text style={styles.txtContent}>edit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.Content4}
            onPress={() => (editMode ? editData() : create(text))}>
            <Text style={styles.txtContent}>Tambah</Text>
          </TouchableOpacity>
        )}
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
  txt: {
    color: hitam,
    fontSize: 17,
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
  txtContent: {
    color: putih,
  },
});
