import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {useRoute} from '@react-navigation/native';

const ViewRecording = ({navigation}) => {
  const route = useRoute();
  const [data, setData] = React.useState(route.params);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{padding: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', fontWeight: 700, fontSize: 17}}>
              View Recording
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                backgroundColor: '#DFEFEE',
                borderRadius: 10,
              }}>
              <Icon name="share" size={17} color="#2F4F4F" />
              <Text style={{fontSize: 12, fontWeight: 700, color: '#2F4F4F'}}>
                Share
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', gap: 10, marginTop: 5}}>
            <Text style={{color: 'black', fontWeight: 700, fontSize: 15}}>
              Name:
            </Text>
            <Text style={{color: 'black', fontSize: 15}}>{data.name}</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 10, marginTop: 5}}>
            <Text style={{color: 'black', fontWeight: 700, fontSize: 15}}>
              Uploaded By:
            </Text>
            <Text style={{color: 'black', fontSize: 15}}>Richard</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 10, marginTop: 5}}>
            <Text style={{color: 'black', fontWeight: 700, fontSize: 15}}>
              Uploaded Date & Time:
            </Text>
            <Text style={{color: 'black', fontSize: 15}}>{data.datetime}</Text>
          </View>
          <View style={{gap: 10, marginTop: 5}}>
            <Text style={{fontSize: 15, color: 'black', fontWeight: 700}}>
              Uploaded Recording:
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#DFEFEE',
                height: 58,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 5,
                flexDirection: 'row',
                paddingHorizontal: 20,
              }}>
              <Icon name="download" size={25} color="#2F4F4F" />
              <Text style={{color: '#2F4F4F', fontSize: 16}}>
                {data.audioName}
              </Text>
              <Icon name="close" size={25} color="#2F4F4F" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text style={{color: 'black', fontWeight: 700, fontSize: 17}}>
              Transcript
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                backgroundColor: '#DFEFEE',
                borderRadius: 10,
              }}>
              <Icon name="download" size={17} color="#2F4F4F" />
              <Text style={{fontSize: 12, fontWeight: 700, color: '#2F4F4F'}}>
                Download
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: '#D9D9D9',
              borderRadius: 5,
              padding: 20,
              marginTop: 10,
              flex: 1,
            }}>
            <View style={{flex: 1, gap: 5}}>
              <View style={{alignItems: 'flex-end', flex: 1}}>
                <TouchableOpacity>
                  <Icon name="mode-edit" size={17} color="#979797" />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  flexWrap: 'wrap',
                  flex: 1,
                  marginBottom: 20,
                }}>
                {data.transcript}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#7BB3AF',
              height: 58,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 30,
            }}>
            <Text style={{fontWeight: 700, color: 'white', fontSize: 16}}>
              Generate
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ViewRecording;
