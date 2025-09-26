import {View, Text, Platform, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Icon} from '@rneui/themed';

const Home = () => {
  const insets = useSafeAreaInsets();
  const HEADER_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
  const totalHeight = HEADER_HEIGHT + insets.top;

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          height: totalHeight,
          paddingTop: insets.top,
          backgroundColor: '#7BB3AF',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: 'white', borderRadius: 20, padding: 0}}>
          <Icon name="account-circle" size={40} color="#2F4F4F" />
        </View>
        <Text style={{fontSize: 20, fontWeight: 500, color: 'white'}}>
          Home
        </Text>
        <View style={{width: 40, height: 40}} />
      </View>
      <View style={{flex: 1, padding: 20}}>
        <Text style={{fontSize: 17, color: 'black', fontWeight: 700}}>
          Meeting
        </Text>
        <View
          style={{
            marginTop: 10,
            marginBottom: 20,
            flexDirection: 'row',
            gap: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#7BB3AF',
              flex: 1,
              padding: 20,
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <View style={{position: 'absolute', left: 20}}>
              <Icon name="mic" color="white" size={26} />
            </View>
            <Text style={{fontSize: 16, fontWeight: 700, color: 'white'}}>
              Meet
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#DFEFEE',
              flex: 1,
              padding: 20,
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <View style={{position: 'absolute', left: 20}}>
              <Icon name="add-box" color="#2F4F4F" size={26} />
            </View>
            <Text style={{fontSize: 16, fontWeight: 700, color: '#2F4F4F'}}>
              Join
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Text style={{fontSize: 17, color: 'black', fontWeight: 700}}>
            Recent Meetings
          </Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Text style={{fontSize: 14, color: '#2F4F4F'}}>View More</Text>
            <Icon name="arrow-forward" size={14} color="#2F4F4F" />
          </TouchableOpacity>
        </View>
        <View
          style={{borderWidth: 1, borderRadius: 10, borderColor: '#D9D9D9'}}>
          <View
            style={{
              backgroundColor: '#7BB3AF',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                gap: 10,
              }}>
              <Icon name="meeting-room" size={25} color="white" />
              <Text style={{fontWeight: 700, fontSize: 14, color: 'white'}}>
                Team Meeting
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#73C29F',
                width: 65,
                alignItems: 'center',
                height: 25,
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text style={{fontSize: 12, color: 'white'}}>Private</Text>
            </View>
          </View>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{flex: 1, gap: 5}}>
              <Text>Topic: Yearly Meeting 2025</Text>
              <Text>Host: Mr.Abu</Text>
              <Text>Date & Time: 25 Jan 2025, 2:25 pm</Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#2F4F4F',
                padding: 5,
                borderRadius: 20,
              }}>
              <Icon name="visibility" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
