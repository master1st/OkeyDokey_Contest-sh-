import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Home from './src/screens/Home';
import QCoffee from './src/screens/QCoffee';
import Qmilk from './src/screens/Qmilk';
import HomeGrayColor from './src/screens/HomeGrayColor';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="QCoffee" component={QCoffee} />
        <Stack.Screen name="Qmilk" component={Qmilk} /> */}
        <Stack.Screen name="HomeGrayColor" component={HomeGrayColor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
