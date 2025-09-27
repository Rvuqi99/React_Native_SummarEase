import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';

const UploadRecording = ({navigation}) => {
  const [uploaded, setUploaded] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 20, gap: 20}}>
      <View style={{gap: 10}}>
        <Text style={{fontSize: 17, color: 'black', fontWeight: 500}}>
          Upload Your Recording
        </Text>
        {uploaded ? (
          <TouchableOpacity
            style={{
              backgroundColor: '#DFEFEE',
              height: 58,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}
            onPress={() => setUploaded(true)}>
            <Icon name="audiotrack" size={25} color="#2F4F4F" />
            <Text style={{color: '#2F4F4F', fontSize: 16}}>
              Voice Note – September 27, 2025.wav
            </Text>
            <Icon name="close" size={25} color="#2F4F4F" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: '#DFEFEE',
              height: 58,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}
            onPress={() => setUploaded(true)}>
            <Icon name="upload" size={25} color="#2F4F4F" />
            <Text style={{fontWeight: 700, color: '#2F4F4F', fontSize: 16}}>
              Upload
            </Text>
            <View style={{width: 25, height: 25}} />
          </TouchableOpacity>
        )}
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
        onPress={() => {
          setVisible(true);
          setTimeout(() => {
            setVisible(false);
            navigation.navigate('Transcript');
          }, 3000);
        }}>
        <Text style={{fontWeight: 700, color: 'white', fontSize: 16}}>
          NEXT
        </Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="fade"
        visible={visible}
        onRequestClose={() => {
          setVisible(false);
          navigation.navigate('Transcript');
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.3)', // semi-transparent background
          }}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              height: 100,
              width: 150,
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 20,
              shadowColor: '#000',
              shadowOpacity: 0.25,
              shadowRadius: 10,
              elevation: 10,
              gap: 10,
            }}>
            <ActivityIndicator size="large" color="#7BB3AF" />
            <Text style={{fontSize: 15, fontWeight: 500, color: 'black'}}>
              Transcripting...
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UploadRecording;
