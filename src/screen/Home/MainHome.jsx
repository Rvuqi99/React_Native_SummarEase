import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';

const MainHomeStack = createNativeStackNavigator();
const MainHome = () => {
  return (
    <MainHomeStack.Navigator initialRouteName="Home">
      <MainHomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </MainHomeStack.Navigator>
  );
};

export default MainHome;
