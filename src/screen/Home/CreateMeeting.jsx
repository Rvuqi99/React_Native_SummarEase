import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Dropdown} from 'react-native-element-dropdown';
import {Icon} from '@rneui/themed';

const CreateMeeting = ({navigation}) => {
  const [formData, setFormData] = React.useState({
    confidentiality: null,
    type: null,
    topic: '',
    speaker: null,
    name: '',
  });
  const [confidentiality, setConfidentiality] = React.useState([
    {id: 1, name: 'Public'},
    {id: 2, name: 'Private'},
  ]);
  const [type, setType] = React.useState([
    {id: 1, name: 'Interview'},
    {id: 2, name: 'Sales Pitch'},
    {id: 3, name: 'Consulting Meeting'},
    {id: 4, name: 'Team Meeting'},
  ]);
  const [speaker, setSpeaker] = React.useState([
    {id: 1, name: 'Host only'},
    {id: 2, name: 'Everyone'},
  ]);

  const updatedFormData = data => {
    setFormData(prev => {
      return {
        ...prev,
        ...data,
      };
    });
  };

  const renderItem = item => {
    return (
      <View
        style={{
          padding: 17,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{color: 'black', fontSize: 15}}>{item.name}</Text>
        {item.name === formData.confidentiality && (
          <Icon name="check" size={20} color="black" />
        )}
      </View>
    );
  };

  const renderItem2 = item => {
    return (
      <View
        style={{
          padding: 17,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{color: 'black', fontSize: 15}}>{item.name}</Text>
        {item.name === formData.type && (
          <Icon name="check" size={20} color="black" />
        )}
      </View>
    );
  };

  const renderItem3 = item => {
    return (
      <View
        style={{
          padding: 17,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{color: 'black', fontSize: 15}}>{item.name}</Text>
        {item.name === formData.speaker && (
          <Icon name="check" size={20} color="black" />
        )}
      </View>
    );
  };

  return (
    <KeyboardAwareScrollView
      overScrollMode="never"
      bounces={false}
      enableOnAndroid
      contentContainerStyle={{width: '100%', flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView overScrollMode="never" bounces={false}>
          <View style={{flex: 1, padding: 20, gap: 20}}>
            <View style={{gap: 10}}>
              <Text style={{fontSize: 17, color: 'black', fontWeight: 500}}>
                Confidentiality
              </Text>
              <Dropdown
                placeholderStyle={{
                  fontSize: 15,
                  color: '#747688',
                  textAlign: 'center',
                }}
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: '#d9d9d9',
                  padding: 20,
                }}
                selectedTextStyle={{fontSize: 15, color: 'black'}}
                data={confidentiality}
                maxHeight={300}
                labelField="name"
                valueField="name"
                placeholder="Choose Confidentiality"
                value={formData.confidentiality}
                onChange={item => {
                  updatedFormData({confidentiality: item.name});
                }}
                renderItem={renderItem}
              />
            </View>
            <View style={{gap: 10}}>
              <Text style={{fontSize: 17, color: 'black', fontWeight: 500}}>
                Meeting Type
              </Text>
              <Dropdown
                placeholderStyle={{
                  fontSize: 15,
                  color: '#747688',
                  textAlign: 'center',
                }}
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: '#d9d9d9',
                  padding: 20,
                }}
                selectedTextStyle={{fontSize: 15, color: 'black'}}
                data={type}
                maxHeight={300}
                labelField="name"
                valueField="name"
                placeholder="Choose Meeting Type"
                value={formData.type}
                onChange={item => {
                  updatedFormData({type: item.name});
                }}
                renderItem={renderItem2}
              />
            </View>
            <View style={{gap: 10}}>
              <Text style={{fontSize: 17, color: 'black', fontWeight: 500}}>
                Meeting Topic
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
                  textAlign: formData.topic === '' ? 'center' : 'auto',
                }}
                placeholder={'Enter Meeting Topic'}
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="#747688"
                onChangeText={txt => updatedFormData({topic: txt})}
                value={formData.topic}
              />
            </View>
            <View style={{gap: 10}}>
              <Text style={{fontSize: 17, color: 'black', fontWeight: 500}}>
                Your Name
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
                  textAlign: formData.name === '' ? 'center' : 'auto',
                }}
                placeholder={'Enter Your Display Name'}
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="#747688"
                onChangeText={txt => updatedFormData({name: txt})}
                value={formData.name}
              />
            </View>
            <View style={{gap: 10}}>
              <Text style={{fontSize: 17, color: 'black', fontWeight: 500}}>
                Speaker
              </Text>
              <Dropdown
                placeholderStyle={{
                  fontSize: 15,
                  color: '#747688',
                  textAlign: 'center',
                }}
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: '#d9d9d9',
                  padding: 20,
                }}
                selectedTextStyle={{fontSize: 15, color: 'black'}}
                data={speaker}
                maxHeight={300}
                labelField="name"
                valueField="name"
                placeholder="Choose who can speak in the meeting"
                value={formData.speaker}
                onChange={item => {
                  updatedFormData({speaker: item.name});
                }}
                renderItem={renderItem3}
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#7BB3AF',
                height: 58,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}
              onPress={() => navigation.navigate('Meeting')}>
              <Text style={{fontWeight: 700, color: 'white', fontSize: 16}}>
                CREATE
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CreateMeeting;
