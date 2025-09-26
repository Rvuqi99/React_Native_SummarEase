import {View, Text} from 'react-native';
import React from 'react';
import Recording from './Recording';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MainRecordingStack = createNativeStackNavigator();
const MainRecording = () => {
  return (
    <MainRecordingStack.Navigator initialRouteName="Recordings">
      <MainRecordingStack.Screen
        name="Recordings"
        component={Recording}
        options={{headerStyle: {backgroundColor: 'red'}}}
      />
    </MainRecordingStack.Navigator>
  );
};

export default MainRecording;
