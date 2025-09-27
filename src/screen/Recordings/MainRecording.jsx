import {View, Text} from 'react-native';
import React from 'react';
import Recordings from './Recordings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UploadRecording from './UploadRecording';

const MainRecordingStack = createNativeStackNavigator();
const MainRecording = () => {
  return (
    <MainRecordingStack.Navigator initialRouteName="Recordings">
      <MainRecordingStack.Screen
        name="Recordings"
        component={Recordings}
        options={{
          title: 'Recordings',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#7BB3AF',
          },
          headerTitleStyle: {fontSize: 20, fontWeight: 500, color: 'white'},
          headerTintColor: 'white',
        }}
      />
      <MainRecordingStack.Screen
        name="UploadRecording"
        component={UploadRecording}
        options={{
          title: 'Upload Recording',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#7BB3AF',
          },
          headerTitleStyle: {fontSize: 20, fontWeight: 500, color: 'white'},
          headerTintColor: 'white',
        }}
      />
    </MainRecordingStack.Navigator>
  );
};

export default MainRecording;
