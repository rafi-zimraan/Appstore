import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

interface Item {
  item: string;
}

const Crud = () => {
  const [text, setText] = useState<string>('');
  const [data, setData] = useState<Item[]>([]);

  const create = (text: string) => {
    setData(prevData => {
      const newData = [...prevData, {item: text}];
      console.log(newData);
      return newData;
    });
  };

  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      {data.map((value, index) => (
        <View
          key={index}
          style={{
            marginVertical: 2,
            bottom: 570,
            margin: 20,
          }}>
          <Text>{value.item}</Text>
        </View>
      ))}
      <View style={{padding: 10, flexDirection: 'row'}}>
        <View
          style={{
            position: 'absolute',
            bottom: 700,
            marginHorizontal: 170,
          }}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '700'}}>
            Hasil Input Data
          </Text>
        </View>
        <TextInput
          style={{
            position: 'absolute',
            borderWidth: 1,
            borderRadius: 6,
            bottom: 2,
            padding: 10,
            width: '80%',
            left: 12,
          }}
          placeholder={'Masukkan data'}
          onChangeText={t => setText(t)}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            justifyContent: 'center',
            backgroundColor: 'blue',
            alignItems: 'center',
            paddingVertical: 10,
            marginLeft: 357,
            borderRadius: 6,
            width: '15%',
            bottom: 8,
          }}
          onPress={() => create(text)}>
          <Text style={{color: 'white'}}>Tambah</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Crud;

const styles = StyleSheet.create({});
