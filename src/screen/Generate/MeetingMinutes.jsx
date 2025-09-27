import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';

const MeetingMinutes = ({navigation}) => {
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
            Meeting Minutes (Team Meeting)
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
            <View style={{gap: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View style={{flex: 0.3}}>
                  <Text style={{fontSize: 15, fontWeight: 700, color: 'black'}}>
                    Topic:
                  </Text>
                </View>
                <View style={{flex: 0.7}}>
                  <Text style={{fontSize: 15, color: 'black'}}>
                    Project ABC Status Update
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View style={{flex: 0.3}}>
                  <Text style={{fontSize: 15, fontWeight: 700, color: 'black'}}>
                    Date:
                  </Text>
                </View>
                <View style={{flex: 0.7}}>
                  <Text style={{fontSize: 15, color: 'black'}}>
                    20 September 2025
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View style={{flex: 0.3}}>
                  <Text style={{fontSize: 15, fontWeight: 700, color: 'black'}}>
                    Time:
                  </Text>
                </View>
                <View style={{flex: 0.7}}>
                  <Text style={{fontSize: 15, color: 'black'}}>
                    10:00 AM - 10:30 AM
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View style={{flex: 0.3}}>
                  <Text style={{fontSize: 15, fontWeight: 700, color: 'black'}}>
                    Host:
                  </Text>
                </View>
                <View style={{flex: 0.7}}>
                  <Text style={{fontSize: 15, color: 'black'}}>Richard</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View style={{flex: 0.3}}>
                  <Text style={{fontSize: 15, fontWeight: 700, color: 'black'}}>
                    Participants:
                  </Text>
                </View>
                <View style={{flex: 0.7}}>
                  <Text style={{fontSize: 15, color: 'black'}}>
                    1. Richard (Host)
                  </Text>
                  <Text style={{fontSize: 15, color: 'black'}}>2. Amy</Text>
                  <Text style={{fontSize: 15, color: 'black'}}>3. Faizal</Text>
                  <Text style={{fontSize: 15, color: 'black'}}>4. Shanti</Text>
                </View>
              </View>
              <View style={{gap: 5}}>
                <View style={{flex: 0.3}}>
                  <Text style={{fontSize: 15, fontWeight: 700, color: 'black'}}>
                    Agenda:
                  </Text>
                </View>
                <View style={{flex: 0.7}}>
                  <Text style={{fontSize: 15, color: 'black'}}>
                    1. Creative content progress
                  </Text>
                  <Text style={{fontSize: 15, color: 'black'}}>
                    2. Digital advertising updates
                  </Text>
                  <Text style={{fontSize: 15, color: 'black'}}>
                    3. PR and outreach planning
                  </Text>
                  <Text style={{fontSize: 15, color: 'black'}}>
                    4. Roadblocks and next steps
                  </Text>
                </View>
              </View>
              <View style={{gap: 5}}>
                <View>
                  <Text style={{fontSize: 15, fontWeight: 700, color: 'black'}}>
                    Discussion Summary:
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'black',
                      fontWeight: 'bold',

                      flexWrap: 'wrap',
                      flex: 1,
                    }}>
                    1. Creative Progress - Amy
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        paddingHorizontal: 6,
                        fontSize: 15,
                        color: 'black',
                      }}>
                      •
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        flexWrap: 'wrap',
                        flex: 1,
                      }}>
                      Campaign visuals and social media content are 80%
                      complete.
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        paddingHorizontal: 6,
                        fontSize: 15,
                        color: 'black',
                      }}>
                      •
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        flexWrap: 'wrap',
                        flex: 1,
                      }}>
                      Final edits are with the copywriting team.
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', width: '100%'}}>
                    <Text
                      style={{
                        paddingHorizontal: 6,
                        fontSize: 15,
                        color: 'black',
                      }}>
                      •
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        flexWrap: 'wrap',
                        flex: 1,
                      }}>
                      Awaiting approval from the legal team, which may take an
                      additional 1–2 days.
                    </Text>
                  </View>
                  <Text
                    style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
                    2. Digital Advertising - Faizal
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        paddingHorizontal: 6,
                        fontSize: 15,
                        color: 'black',
                      }}>
                      •
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        flexWrap: 'wrap',
                        flex: 1,
                      }}>
                      Ad placement plan is finalized and media slots are booked.
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        paddingHorizontal: 6,
                        fontSize: 15,
                        color: 'black',
                      }}>
                      •
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        flexWrap: 'wrap',
                        flex: 1,
                      }}>
                      Syncing with Amy’s team to ensure correct formatting of
                      creatives.
                    </Text>
                  </View>
                  <Text
                    style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
                    3. PR and Outreach - Shanti
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        paddingHorizontal: 6,
                        fontSize: 15,
                        color: 'black',
                      }}>
                      •
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        flexWrap: 'wrap',
                        flex: 1,
                      }}>
                      Two influencers have been confirmed.
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        paddingHorizontal: 6,
                        fontSize: 15,
                        color: 'black',
                      }}>
                      •
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        flexWrap: 'wrap',
                        flex: 1,
                      }}>
                      Confirming pricing for both influencers
                    </Text>
                  </View>
                </View>
              </View>
            </View>
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

export default MeetingMinutes;
