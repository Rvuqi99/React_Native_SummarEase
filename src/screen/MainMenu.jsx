import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Icon} from '@rneui/themed';
import MainHome from './Home/MainHome';

const Tab = createBottomTabNavigator();
const MainMenu = () => {
  const insets = useSafeAreaInsets();

  const home = 'MainHome';
  const meetings = 'MainMeetings';
  const recordings = 'MainRecordings';
  const more = 'MainMore';

  // Base height of your tab bar (calculated from your code)
  const baseHeight = Math.min(
    Math.max(Dimensions.get('window').width * 0.2, 60),
    80,
  );

  return (
    <Tab.Navigator
      initialRouteName={home}
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: baseHeight + insets.bottom, // 👈 height includes safe area
          paddingTop: 8,
          paddingBottom: 8, // 👈 keep padding consistent, do NOT add insets here// ✅ adds safe bottom padding
        },
        tabBarLabelStyle: {
          paddingTop: 8,
          fontSize: 12,
        },
        tabBarActiveTintColor: '#228b22',
        tabBarInactiveTintColor: '#7b7b7b',
        tabBarIcon: ({color}) => {
          let icon;
          let rn = route.name;

          if (rn === home) {
            icon = 'home';
          } else if (rn === modules) {
            icon = 'view-module';
          } else if (rn === inbox) {
            icon = 'mail';
          } else if (rn === more) {
            icon = 'more-horiz';
          }

          return (
            <View
              style={{
                justifyContent: 'center',
                height: 33,
                width: 33,
              }}>
              <View>
                <Icon type="material" name={icon} size={33} color={color} />
              </View>
            </View>
          );
        },
        unmountOnBlur: true,
      })}>
      <Tab.Screen
        name={home}
        component={MainHome}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarLabelStyle: {
            paddingBottom: 20,
            fontSize: 13,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainMenu;
