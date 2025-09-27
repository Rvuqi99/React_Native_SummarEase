import {View, Text} from 'react-native';
import React from 'react';
import Recordings from './Recordings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MainRecordingStack = createNativeStackNavigator();
const MainRecording = () => {
  return (
    <MainRecordingStack.Navigator initialRouteName="Recordings">
      <MainRecordingStack.Screen
        name="Recordings"
        component={Recordings}
        options={{headerStyle: {backgroundColor: 'red'}}}
      />
    </MainRecordingStack.Navigator>
  );
};

export default MainRecording;
