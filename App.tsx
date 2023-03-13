import React, {Component} from 'react';
import Profile from './src/screen/Profile';
import Login from './src/screen/Login';
import Splash from './src/screen/Splash';
import Drawer from './src/screen/Drawer';
import DrawerLatihan from './src/screen/DrawerLatihan';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// export default class App extends Component {
//   render() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={Login} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

import {StyleSheet} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LOGIN">
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen
          name="LOGIN"
          component={Login}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
