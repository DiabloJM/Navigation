import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen2';
import Menu from './Menu';
import DetailScreen from './DetailScreen2';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home'>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Menu" component={Menu} options={{title: "Menu"}}/>
        <Stack.Screen name="Details" component={DetailScreen} options={{title: "Detalles"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}