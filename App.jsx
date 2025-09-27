import {Appearance} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainMenu from './src/screen/MainMenu';
import CreateMeeting from './src/screen/Home/CreateMeeting';
import JoinMeeting from './src/screen/JoinMeeting/JoinMeeting';
import Meeting from './src/screen/Home/Meeting';
import Recording from './src/screen/Home/Recording';
import Generate from './src/screen/Generate/Generate';

const Stack = createNativeStackNavigator();

const App = () => {
  React.useEffect(() => {
    const init = async () => {
      Appearance.setColorScheme('light');
    };

    init();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        <Stack.Screen
          name="MainMenu"
          component={MainMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateMeeting"
          component={CreateMeeting}
          options={{
            title: 'Create Meeting',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#7BB3AF',
            },
            headerTitleStyle: {fontSize: 20, fontWeight: 500, color: 'white'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="JoinMeeting"
          component={JoinMeeting}
          options={{
            title: 'Join Meeting',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#7BB3AF',
            },
            headerTitleStyle: {fontSize: 20, fontWeight: 500, color: 'white'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Meeting"
          component={Meeting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Recording"
          component={Recording}
          options={{
            title: 'Recording',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#7BB3AF',
            },
            headerTitleStyle: {fontSize: 20, fontWeight: 500, color: 'white'},
            headerTintColor: 'white',
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Generate"
          component={Generate}
          options={{
            title: 'Generate',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#7BB3AF',
            },
            headerTitleStyle: {fontSize: 20, fontWeight: 500, color: 'white'},
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
