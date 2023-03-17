import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CreateAccoun, Login, Profile} from '../screen/Index';

export type RootStackParams = {
  splash: undefined;
  profile: undefined;
  createAccoun: undefined;
};
const Stack = createNativeStackNavigator<RootStackParams>();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="createAccoun" component={CreateAccoun} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
