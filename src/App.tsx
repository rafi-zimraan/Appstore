import React from 'react';
import Router from './Router';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return <Router />;
};

export default App;
