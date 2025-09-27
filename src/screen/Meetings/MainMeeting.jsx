import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Meetings from './Meetings';

const MainMeetingStack = createNativeStackNavigator();
const MainMeeting = () => {
  return (
    <MainMeetingStack.Navigator initialRouteName="Meetings">
      <MainMeetingStack.Screen
        name="Meetings"
        component={Meetings}
        options={{
          title: 'Meetings',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#7BB3AF',
          },
          headerTitleStyle: {fontSize: 20, fontWeight: 500, color: 'white'},
          headerTintColor: 'white',
        }}
      />
    </MainMeetingStack.Navigator>
  );
};

export default MainMeeting;
