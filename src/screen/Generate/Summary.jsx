import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';

const Summary = ({navigation}) => {
  const [summary, setSummary] = React.useState(
    'The speaker recaps a recent project meeting, noting that Phase 2 timeline discussions went well despite some concerns about resource allocation. They highlighted an issue with the new API integration, particularly the authentication flow, and mentioned they’ve contacted the dev team for clarification. The speaker also plans to finalize a presentation deck for an upcoming client review, including updated campaign metrics. They recorded the note to keep track of these key points and will provide updates as needed.',
  );
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 17, color: 'black', fontWeight: 500}}>
            Summary
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
            padding: 10,
            marginTop: 10,
            flex: 1,
          }}>
          <ScrollView>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                flexWrap: 'wrap',
                flex: 1,
              }}>
              {summary}
            </Text>
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          paddingBottom: 20,
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#7BB3AF',
            height: 58,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('MainMenu')}>
          <Text style={{fontWeight: 700, color: 'white', fontSize: 16}}>
            DONE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Summary;
