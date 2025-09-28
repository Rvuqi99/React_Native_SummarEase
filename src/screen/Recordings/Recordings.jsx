import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';

const Recordings = ({navigation}) => {
  const [search, setSearch] = React.useState('');
  const [filteredData, setFilteredData] = React.useState([]);
  const [data1, setData1] = React.useState([
    {
      id: 1,
      name: 'Yearly Meeting 2025',
      audioName: 'Yearly Meeting 2025.mp3',
      datetime: '25 Jan 2025, 2:25 pm',
      transcript:
        'The Yearly Meeting 2025 was held to review the company’s performance, set goals for the upcoming year, and discuss key strategic plans. All departments presented updates, and leadership outlined major initiatives for growth.',
    },
    {
      id: 2,
      name: 'Interview for HR Position',
      audioName: 'Recording_12345678.wav',
      datetime: '18 Jan 2025, 10:00 am',
      transcript:
        'A candidate was interviewed for the HR position, focusing on their experience in recruitment, employee relations, and HR policies. The interview also assessed their communication skills and cultural fit within the company.',
    },
    {
      id: 3,
      name: 'AI Conference',
      audioName: 'AI Conference.mp3',
      datetime: '12 Jan 2025, 12:25 pm',
      transcript:
        'The AI Conference brought together experts and enthusiasts to explore the latest trends in artificial intelligence. Topics included machine learning, ethical AI, and real-world applications across industries.',
    },
  ]);

  const handleSearch = txt => {
    setSearch(txt);
    if (txt !== '') {
      setFilteredData(
        data1.filter(
          item =>
            item.name.toLowerCase().includes(txt.toLowerCase()) ||
            item.transcript.toLowerCase().includes(txt.toLowerCase()),
        ),
      );
    } else {
      setFilteredData([]);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{paddingHorizontal: 20, paddingTop: 20}}>
          <View
            style={{
              height: 50,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#d9d9d9',
              flexDirection: 'row',
              gap: 10,
              paddingHorizontal: 10,
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                flex: 1,
                color: 'black',
                fontSize: 15,
              }}
              placeholder={'Search'}
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#747688"
              onChangeText={txt => handleSearch(txt)}
              value={search}
            />
            <Icon name="search" size={25} color="#979797" />
          </View>
        </View>
        {search !== '' ? (
          <View style={{flex: 1, padding: 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 10,
              }}>
              <Text style={{fontSize: 17, color: 'black', fontWeight: 700}}>
                Searched Meetings
              </Text>
            </View>
            <View style={{gap: 10}}>
              {filteredData.length > 0 ? (
                filteredData.map(meeting => (
                  <TouchableOpacity
                    key={meeting.id}
                    style={{
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: '#D9D9D9',
                    }}
                    onPress={() =>
                      navigation.navigate('ViewRecording', meeting)
                    }>
                    <View
                      style={{
                        backgroundColor: '#DFEFEE',
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
                        <Icon name="audiotrack" size={25} color="#2F4F4F" />
                        <Text
                          style={{
                            fontWeight: 700,
                            fontSize: 14,
                            color: '#2F4F4F',
                          }}>
                          {meeting.name}
                        </Text>
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
                        <Text style={{color: 'black', fontSize: 14}}>
                          Audio Name: {meeting.audioName}
                        </Text>
                        <Text style={{color: 'black', fontSize: 14}}>
                          Date & Time: {meeting.datetime}
                        </Text>
                      </View>
                      <View
                        style={{
                          backgroundColor: '#2F4F4F',
                          padding: 5,
                          borderRadius: 20,
                        }}>
                        <Icon name="visibility" size={22} color="white" />
                      </View>
                    </View>
                  </TouchableOpacity>
                ))
              ) : (
                <View>
                  <Text>No result found</Text>
                </View>
              )}
            </View>
          </View>
        ) : (
          <View style={{flex: 1, padding: 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 10,
              }}>
              <Text style={{fontSize: 17, color: 'black', fontWeight: 700}}>
                Recordings
              </Text>
            </View>
            <View style={{gap: 10}}>
              {data1.map(meeting => (
                <TouchableOpacity
                  key={meeting.id}
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#D9D9D9',
                  }}
                  onPress={() => navigation.navigate('ViewRecording', meeting)}>
                  <View
                    style={{
                      backgroundColor: '#DFEFEE',
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
                      <Icon name="audiotrack" size={25} color="#2F4F4F" />
                      <Text
                        style={{
                          fontWeight: 700,
                          fontSize: 14,
                          color: '#2F4F4F',
                        }}>
                        {meeting.name}
                      </Text>
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
                      <Text style={{color: 'black', fontSize: 14}}>
                        Audio Name: {meeting.audioName}
                      </Text>
                      <Text style={{color: 'black', fontSize: 14}}>
                        Date & Time: {meeting.datetime}
                      </Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: '#2F4F4F',
                        padding: 5,
                        borderRadius: 20,
                      }}>
                      <Icon name="visibility" size={22} color="white" />
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
      <View style={{padding: 20}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#7BB3AF',
            height: 58,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}
          onPress={() => navigation.navigate('UploadRecording')}>
          <Text style={{fontWeight: 700, color: 'white', fontSize: 16}}>
            UPLOAD RECORDING
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Recordings;
