import {View, Text, Platform, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Icon} from '@rneui/themed';

const Meeting = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const HEADER_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
  const totalHeight = HEADER_HEIGHT + insets.top;
  const [participants, setParticipants] = React.useState([
    {id: 1, isHost: true, name: 'Richard', color: '#7BB3AF'},
    {id: 2, isHost: false, name: 'Amy', color: '#FF6F61'},
    {id: 3, isHost: false, name: 'Faizal', color: '#D6B95D'},
    {id: 4, isHost: false, name: 'Shanti', color: '#3E5F8A'},
  ]);
  const [isRecording, setIsRecording] = React.useState(false);
  const [timer, setTimer] = React.useState(0);
  const intervalRef = React.useRef(null);

  const baseHeight = Math.min(
    Math.max(Dimensions.get('window').width * 0.2, 60),
    80,
  );

  const formatTime = time => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  React.useEffect(() => {
    if (isRecording) {
      intervalRef.current = setInterval(() => {
        setTimer(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    // Cleanup on unmount
    return () => clearInterval(intervalRef.current);
  }, [isRecording]);

  return (
    <View style={{flex: 1, backgroundColor: '#2F4F4F'}}>
      <View
        style={{
          height: totalHeight,
          paddingTop: insets.top,
          backgroundColor: '#1B2E2E',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{width: 65, alignItems: 'flex-start'}}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={26} color="white" />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: 500, color: 'white'}}>
          Meeting
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#C65252',
            padding: 5,
            width: 65,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}>
          <Text style={{color: 'white', fontSize: 12, fontWeight: 500}}>
            End
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: isRecording ? 'flex' : 'none',
          height: 40,
          backgroundColor: '#7BB3AF',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 15, fontWeight: 500, color: 'white'}}>
          Duration: {formatTime(timer)}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap', // allow wrapping to next line
          padding: 10,
          gap: 10,
          flex: 1,
        }}>
        {participants.map((person, index) => {
          return (
            <View
              key={index}
              style={{
                width: (Dimensions.get('window').width - 31) / 2,
                height: `${100 / Math.ceil(participants.length / 2) - 0.5}%`,
                borderRadius: 10,
                backgroundColor: '#1B2E2E',
                padding: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                {person.isHost ? (
                  <View
                    style={{
                      padding: 5,
                      backgroundColor: '#2F4F4F',
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{fontSize: 12, fontWeight: 500, color: 'white'}}>
                      Host
                    </Text>
                  </View>
                ) : (
                  <View style={{width: 10}} />
                )}
                <TouchableOpacity>
                  <Icon name="more-horiz" color="#7B7B7B" size={20} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: person.color,
                    width: 60,
                    height: 60,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                  }}>
                  <Text style={{fontSize: 22, fontWeight: 500, color: 'white'}}>
                    {person.name.charAt(0).toUpperCase()}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    padding: 5,
                    backgroundColor: '#2F4F4F',
                    borderRadius: 5,
                  }}>
                  <Text style={{fontSize: 12, fontWeight: 500, color: 'white'}}>
                    {person.name}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
      <View
        style={{
          height: baseHeight + insets.bottom + insets.bottom, // 👈 height includes safe area
        }}
      />
      <View
        style={{
          height: baseHeight + insets.bottom + insets.bottom, // 👈 height includes safe area
          paddingTop: 8,
          paddingBottom: 8,
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '#1B2E2E',
          borderTopWidth: 1,
          borderTopColor: '#444',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#C65252',
            paddingVertical: 10,
            width: 70,
            borderRadius: 5,
            marginBottom: insets.bottom + 20,
            justifyContent: 'center',
          }}
          onPress={() => setIsRecording(true)}>
          <Icon name={!isRecording ? 'mic' : 'stop'} size={27} color="white" />
          <Text
            style={{
              fontSize: 13,
              color: 'white',
              marginTop: 4,
              fontWeight: 500,
            }}>
            {!isRecording ? 'Start' : 'Stop/End'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            paddingVertical: 10,
            width: 70,
            marginBottom: insets.bottom + 20,
            justifyContent: 'center',
          }}>
          <Icon name="supervisor-account" size={27} color="white" />
          <Text
            style={{
              fontSize: 13,
              color: 'white',
              marginTop: 4,
            }}>
            Participants
          </Text>
          <View
            style={{
              backgroundColor: '#2F4F4F',
              height: 20,
              width: 20,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: 0,
              right: 0,
            }}>
            <Text style={{color: 'white', fontSize: 12, fontWeight: 500}}>
              {participants.length}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            paddingVertical: 10,
            width: 70,
            marginBottom: insets.bottom + 20,
            justifyContent: 'center',
          }}>
          <Icon name="share" size={27} color="white" />
          <Text
            style={{
              fontSize: 13,
              color: 'white',
              marginTop: 4,
            }}>
            Share
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            paddingVertical: 10,
            width: 70,
            marginBottom: insets.bottom + 20,
            justifyContent: 'center',
          }}>
          <Icon name="info-outline" size={27} color="white" />
          <Text
            style={{
              fontSize: 13,
              color: 'white',
              marginTop: 4,
            }}>
            Info
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Meeting;
