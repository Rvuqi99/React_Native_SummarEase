import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const JoinMeeting = ({navigation}) => {
  const [formData, setFormData] = React.useState({
    name: '',
    meeting_id: '',
  });

  const updatedFormData = data => {
    setFormData(prev => {
      return {
        ...prev,
        ...data,
      };
    });
  };

  return (
    <KeyboardAwareScrollView
      overScrollMode="never"
      bounces={false}
      enableOnAndroid
      contentContainerStyle={{width: '100%', flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#F1F9F8'}}>
        <ScrollView overScrollMode="never" bounces={false}>
          <View
            style={{
              flex: 1,
              paddingVertical: 30,
              paddingHorizontal: 40,
            }}>
            <TextInput
              style={{
                flex: 1,
                color: 'black',
                fontSize: 15,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#d9d9d9',
                padding: 20,
                textAlign: formData.name === '' ? 'center' : 'auto',
                backgroundColor: 'white',
                marginBottom: 10,
              }}
              placeholder={'Your Name'}
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#747688"
              onChangeText={txt => updatedFormData({name: txt})}
              value={formData.name}
            />
            <Text
              style={{color: '#747688', fontSize: 13, paddingHorizontal: 10}}>
              Kindly use a recognizable name to ensure the host can identify you
              easily
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 700,
                color: 'black',
                marginVertical: 20,
                textAlign: 'center',
              }}>
              Join Meeting
            </Text>
            <TextInput
              style={{
                flex: 1,
                color: 'black',
                fontSize: 15,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#d9d9d9',
                padding: 20,
                textAlign: formData.meeting_id === '' ? 'center' : 'auto',
                backgroundColor: 'white',
              }}
              placeholder={'Meeting ID'}
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#747688"
              onChangeText={txt => updatedFormData({meeting_id: txt})}
              value={formData.meeting_id}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: '#9D9898',
                marginVertical: 15,
                textAlign: 'center',
              }}>
              OR
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#DFEFEE',
                height: 58,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontWeight: 700, color: '#2F4F4F', fontSize: 16}}>
                Scan QR Code
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#7BB3AF',
                height: 58,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 50,
              }}
              onPress={() => navigation.navigate('Meeting')}>
              <Text style={{fontWeight: 700, color: 'white', fontSize: 16}}>
                JOIN
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default JoinMeeting;
