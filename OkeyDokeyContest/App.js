import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Home from './src/screens/Home';
import QCoffee from './src/screens/QCoffee';
import Qmilk from './src/screens/Qmilk';
<<<<<<< HEAD
import HomeGrayColor from './src/screens/HomeGrayColor';
=======
>>>>>>> parent of 7d1e455 (custom button styled component error)
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="QCoffee" component={QCoffee} />
<<<<<<< HEAD
        <Stack.Screen name="Qmilk" component={Qmilk} /> */}
        <Stack.Screen name="HomeGrayColor" component={HomeGrayColor} />
=======
        <Stack.Screen name="Qmilk" component={Qmilk} />
>>>>>>> parent of 7d1e455 (custom button styled component error)
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
