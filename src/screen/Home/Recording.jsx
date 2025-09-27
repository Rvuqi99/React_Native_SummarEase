import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';

const Recording = ({navigation}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const intervalRef = React.useRef(null);
  const [dialog, setDialog] = React.useState([
    {
      id: 1,
      time: '00:00',
      isHost: true,
      name: 'Richard',
      color: '#7BB3AF',
      dialog:
        'Good morning, everyone. Thanks for joining today’s meeting. Let’s get started. First, a quick roll call—Amy, are you here?',
    },
    {
      id: 2,
      time: '00:03',
      isHost: false,
      name: 'Amy',
      color: '#FF6F61',
      dialog: 'Yes, Richard. Good morning!',
    },
    {
      id: 3,
      time: '00:05',
      isHost: true,
      name: 'Richard',
      color: '#7BB3AF',
      dialog: 'Great. Faizal?',
    },
    {
      id: 4,
      time: '00:08',
      isHost: false,
      name: 'Faizal',
      color: '#D6B95D',
      dialog: 'Present. Morning, everyone.',
    },
    {
      id: 5,
      time: '00:10',
      isHost: true,
      name: 'Richard',
      color: '#7BB3AF',
      dialog: 'And Shanti?',
    },
    {
      id: 6,
      time: '00:12',
      isHost: false,
      name: 'Shanti',
      color: '#3E5F8A',
      dialog: 'Here! Good morning.',
    },
    {
      id: 7,
      time: '00:15',
      isHost: true,
      name: 'Richard',
      color: '#7BB3AF',
      dialog:
        'Perfect. So today, I’d like to get a quick status update on our marketing campaign, identify any roadblocks, and align on next steps. Amy, could you start us off with a brief on the project ABC that we discussed last week',
    },
    {
      id: 8,
      time: '00:30',
      isHost: false,
      name: 'Amy',
      color: '#FF6F61',
      dialog:
        'Absolutely. Last week, we finalized the social media calendar for October and started drafting copy for the new product launch emails. The design team also shared the first mockups, which we’re reviewing today. Engagement on our teaser posts has been stronger than expected — up 18% from the previous campaign.',
    },
    {
      id: 9,
      time: '00:15',
      isHost: true,
      name: 'Richard',
      color: '#7BB3AF',
      dialog:
        'That’s encouraging. Are we on track to launch the full campaign by the 10th?',
    },
    {
      id: 10,
      time: '00:30',
      isHost: false,
      name: 'Amy',
      color: '#FF6F61',
      dialog:
        'Mostly, yes. The only concern is around the video content — we’re still waiting on final approvals for the scripts. That could push us a day or two behind if not resolved soon.',
    },
  ]);

  const TOTAL_DURATION = 180;

  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Play/Pause logic
  React.useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTime(prev => {
          if (prev + 1 >= TOTAL_DURATION) {
            clearInterval(intervalRef.current);
            setIsPlaying(false);
            return TOTAL_DURATION;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const handleRewind = () => {
    setCurrentTime(prev => Math.max(prev - 10, 0));
  };

  const handleSkip = () => {
    setCurrentTime(prev => Math.min(prev + 10, TOTAL_DURATION));
  };

  const progressPercent = (currentTime / TOTAL_DURATION) * 100;

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, padding: 20}}>
        <Text style={{color: 'black', fontWeight: 700, fontSize: 17}}>
          Transcript
        </Text>
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
          <ScrollView>
            <View style={{flex: 1, gap: 10}}>
              {dialog.map((item, index) => (
                <View key={index} style={{flexDirection: 'row', gap: 20}}>
                  <Text style={{color: '#979797', fontSize: 15}}>
                    {item.time}
                  </Text>
                  <View style={{flex: 1, gap: 5}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          gap: 10,
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            backgroundColor: item.color,
                            height: 20,
                            width: 20,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 15,
                              color: 'white',
                              fontWeight: 500,
                            }}>
                            {item.name.charAt(0).toUpperCase()}
                          </Text>
                        </View>
                        <Text
                          style={{
                            fontSize: 15,
                            color: 'black',
                            fontWeight: 500,
                          }}>
                          {item.name}
                        </Text>
                        <View
                          style={{
                            display: item.isHost ? 'flex' : 'none',
                            paddingVertical: 3,
                            paddingHorizontal: 5,
                            backgroundColor: '#979797',
                            borderRadius: 5,
                          }}>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: 500,
                              color: 'white',
                            }}>
                            Host
                          </Text>
                        </View>
                      </View>
                      <TouchableOpacity>
                        <Icon name="mode-edit" size={17} color="#979797" />
                      </TouchableOpacity>
                    </View>
                    <Text
                      style={{fontSize: 13, color: 'black', lineHeight: 20}}>
                      {item.dialog}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          padding: 20,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: '#DEDEDE',
        }}>
        <View
          style={{
            height: 10,
            width: '100%',
            backgroundColor: '#DEDEDE',
            borderRadius: 5,
            overflow: 'hidden',
            marginVertical: 10,
          }}>
          <View
            style={{
              height: '100%',
              backgroundColor: '#2F4F4F',
              width: `${progressPercent}%`,
            }}
          />
        </View>
        {/* Time Display */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={{fontSize: 12, fontWeight: 'bold'}}>
            {formatTime(currentTime)}
          </Text>
          <Text style={{fontSize: 12, fontWeight: 'bold'}}>
            -{formatTime(TOTAL_DURATION - currentTime)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
          }}>
          <TouchableOpacity
            onPress={handleRewind}
            style={{
              padding: 10,
            }}>
            <Icon name="replay-10" color="#2F4F4F" size={26} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIsPlaying(prev => !prev)}
            style={{
              backgroundColor: isPlaying ? '#C65252' : '#2F4F4F',
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 20,
            }}>
            {isPlaying ? (
              <Icon name="pause" color="white" size={26} />
            ) : (
              <Icon name="play-arrow" color="white" size={26} />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleSkip}
            style={{
              padding: 10,
            }}>
            <Icon name="forward-10" color="#2F4F4F" size={26} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', gap: 10, padding: 20}}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: '#DFEFEE',
            height: 58,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('MainMenu')}>
          <Text style={{color: '#2f4f4f', fontSize: 16, fontWeight: 700}}>
            Back To Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: '#7BB3AF',
            height: 58,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 700}}>
            Generate
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Recording;
