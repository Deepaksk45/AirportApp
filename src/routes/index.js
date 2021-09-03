import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Single} from '../screens';

const StackNavigator = createNativeStackNavigator();
export default () => (
  <NavigationContainer>
    <StackNavigator.Navigator initialRouteName="Home">
      <StackNavigator.Screen
        name="Home"
        component={Home}
        options={{title: 'Airports'}}
      />
      <StackNavigator.Screen name="Single" component={Single} />
    </StackNavigator.Navigator>
  </NavigationContainer>
);
