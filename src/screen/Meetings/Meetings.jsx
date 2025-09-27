import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';

const Meetings = () => {
  const [search, setSearch] = React.useState('');
  const [filteredData, setFilteredData] = React.useState([]);
  const [data1, setData1] = React.useState([
    {
      id: 1,
      confidential: 'Private',
      type: 'Team Meeting',
      topic: 'Yearly Meeting 2025',
      host: 'Mr. Abu',
      datetime: '25 Jan 2025, 2:25 pm',
      transcript:
        'The Yearly Meeting 2025 was held to review the company’s performance, set goals for the upcoming year, and discuss key strategic plans. All departments presented updates, and leadership outlined major initiatives for growth.',
    },
    {
      id: 2,
      confidential: 'Public',
      type: 'Interview',
      topic: 'Interview for HR Position',
      host: 'Ms. Jacqline',
      datetime: '18 Jan 2025, 10:00 am',
      transcript:
        'A candidate was interviewed for the HR position, focusing on their experience in recruitment, employee relations, and HR policies. The interview also assessed their communication skills and cultural fit within the company.',
    },
    {
      id: 3,
      confidential: 'Public',
      type: 'Consulting Meeting',
      topic: 'AI Conference',
      host: 'Mr. Jackson',
      datetime: '12 Jan 2025, 12:25 pm',
      transcript:
        'The AI Conference brought together experts and enthusiasts to explore the latest trends in artificial intelligence. Topics included machine learning, ethical AI, and real-world applications across industries.',
    },
  ]);
  const [data2, setData2] = React.useState([
    {
      id: 1,
      confidential: 'Private',
      type: 'Team Meeting',
      topic: 'Q1 Project Kickoff Meeting',
      host: 'Mr. Nathan Cole',
      datetime: '15 Jan 2025, 9:00 am',
      transcript:
        'The Q1 Project Kickoff Meeting focused on outlining deliverables, assigning responsibilities, and setting deadlines for the new quarter. Teams discussed resource allocation and identified key risks to mitigate early.',
    },
    {
      id: 2,
      confidential: 'Public',
      type: 'Interview',
      topic: 'Onboarding Specialist Interview',
      host: 'Ms. Priya Mehta',
      datetime: '20 Jan 2025, 11:15 am',
      transcript:
        'A candidate was interviewed for the Onboarding Specialist position, with an emphasis on their approach to employee orientation, cross-functional collaboration, and process improvement. Communication and organizational skills were also assessed.',
    },
    {
      id: 3,
      confidential: 'Public',
      type: 'Consulting Meeting',
      topic: 'Tech Innovation Briefing 2025',
      host: 'Dr. Leo Fernandez',
      datetime: '28 Jan 2025, 4:30 pm',
      transcript:
        'The Tech Innovation Briefing 2025 highlighted advancements in automation, AI integration, and smart infrastructure. Industry leaders shared insights on adoption challenges and future opportunities in digital transformation.',
    },
  ]);

  const handleSearch = txt => {
    setSearch(txt);
    // Merge data1 and data2
    if (txt !== '') {
      const mergedData = [
        ...data1,
        ...data2.map(item => ({...item, id: item.id + 100})),
      ];

      // Filter data based on search input
      setFilteredData(
        mergedData.filter(
          item =>
            item.topic.toLowerCase().includes(txt.toLowerCase()) ||
            item.host.toLowerCase().includes(txt.toLowerCase()) ||
            item.type.toLowerCase().includes(txt.toLowerCase()) ||
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
                    }}>
                    <View
                      style={{
                        backgroundColor:
                          meeting.type === 'Team Meeting'
                            ? '#7BB3AF'
                            : meeting.type === 'Interview'
                            ? '#D8A7B1'
                            : '#DFEFEE',
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
                        <Icon
                          name="meeting-room"
                          size={25}
                          color={
                            meeting.type === 'Consulting Meeting'
                              ? '#2F4F4F'
                              : 'white'
                          }
                        />
                        <Text
                          style={{
                            fontWeight: 700,
                            fontSize: 14,
                            color:
                              meeting.type === 'Consulting Meeting'
                                ? '#2F4F4F'
                                : 'white',
                          }}>
                          {meeting.type}
                        </Text>
                      </View>
                      <View
                        style={{
                          backgroundColor:
                            meeting.confidential === 'Public'
                              ? '#73C29F'
                              : '#D97A7A',
                          width: 65,
                          alignItems: 'center',
                          height: 25,
                          justifyContent: 'center',
                          borderRadius: 10,
                        }}>
                        <Text style={{fontSize: 12, color: 'white'}}>
                          {meeting.confidential}
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
                          Topic: {meeting.topic}
                        </Text>
                        <Text style={{color: 'black', fontSize: 14}}>
                          Host: {meeting.host}
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
                My Meetings
              </Text>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Text style={{fontSize: 14, color: '#2F4F4F'}}>View More</Text>
                <Icon name="arrow-forward" size={14} color="#2F4F4F" />
              </TouchableOpacity>
            </View>
            <View style={{gap: 10}}>
              {data1.map(meeting => (
                <TouchableOpacity
                  key={meeting.id}
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#D9D9D9',
                  }}>
                  <View
                    style={{
                      backgroundColor:
                        meeting.type === 'Team Meeting'
                          ? '#7BB3AF'
                          : meeting.type === 'Interview'
                          ? '#D8A7B1'
                          : '#DFEFEE',
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
                      <Icon
                        name="meeting-room"
                        size={25}
                        color={
                          meeting.type === 'Consulting Meeting'
                            ? '#2F4F4F'
                            : 'white'
                        }
                      />
                      <Text
                        style={{
                          fontWeight: 700,
                          fontSize: 14,
                          color:
                            meeting.type === 'Consulting Meeting'
                              ? '#2F4F4F'
                              : 'white',
                        }}>
                        {meeting.type}
                      </Text>
                    </View>
                    <View
                      style={{
                        backgroundColor:
                          meeting.confidential === 'Public'
                            ? '#73C29F'
                            : '#D97A7A',
                        width: 65,
                        alignItems: 'center',
                        height: 25,
                        justifyContent: 'center',
                        borderRadius: 10,
                      }}>
                      <Text style={{fontSize: 12, color: 'white'}}>
                        {meeting.confidential}
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
                        Topic: {meeting.topic}
                      </Text>
                      <Text style={{color: 'black', fontSize: 14}}>
                        Host: {meeting.host}
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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 10,
                marginTop: 20,
              }}>
              <Text style={{fontSize: 17, color: 'black', fontWeight: 700}}>
                Other Meetings
              </Text>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Text style={{fontSize: 14, color: '#2F4F4F'}}>View More</Text>
                <Icon name="arrow-forward" size={14} color="#2F4F4F" />
              </TouchableOpacity>
            </View>
            <View style={{gap: 10}}>
              {data2.map(meeting => (
                <TouchableOpacity
                  key={meeting.id}
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#D9D9D9',
                  }}>
                  <View
                    style={{
                      backgroundColor:
                        meeting.type === 'Team Meeting'
                          ? '#7BB3AF'
                          : meeting.type === 'Interview'
                          ? '#D8A7B1'
                          : '#DFEFEE',
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
                      <Icon
                        name="meeting-room"
                        size={25}
                        color={
                          meeting.type === 'Consulting Meeting'
                            ? '#2F4F4F'
                            : 'white'
                        }
                      />
                      <Text
                        style={{
                          fontWeight: 700,
                          fontSize: 14,
                          color:
                            meeting.type === 'Consulting Meeting'
                              ? '#2F4F4F'
                              : 'white',
                        }}>
                        {meeting.type}
                      </Text>
                    </View>
                    <View
                      style={{
                        backgroundColor:
                          meeting.confidential === 'Public'
                            ? '#73C29F'
                            : '#D97A7A',
                        width: 65,
                        alignItems: 'center',
                        height: 25,
                        justifyContent: 'center',
                        borderRadius: 10,
                      }}>
                      <Text style={{fontSize: 12, color: 'white'}}>
                        {meeting.confidential}
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
                        Topic: {meeting.topic}
                      </Text>
                      <Text style={{color: 'black', fontSize: 14}}>
                        Host: {meeting.host}
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
    </View>
  );
};

export default Meetings;
