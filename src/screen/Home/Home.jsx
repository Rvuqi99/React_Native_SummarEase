import {View, Text, Platform} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Home = () => {
  const insets = useSafeAreaInsets();
  const HEADER_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
  const totalHeight = HEADER_HEIGHT + insets.top;

  return (
    <View>
      <View
        style={{
          height: totalHeight,
          paddingTop: insets.top,
          backgroundColor: 'red',
          justifyContent: 'center',
        }}>
        <Text>Home</Text>
      </View>
      <View>
        <Text>Home</Text>
      </View>
    </View>
  );
};

export default Home;
