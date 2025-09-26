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
        options={{headerStyle: {backgroundColor: 'red'}}}
      />
    </MainMeetingStack.Navigator>
  );
};

export default MainMeeting;
