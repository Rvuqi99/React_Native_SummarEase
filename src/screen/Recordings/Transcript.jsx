import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';

const Transcript = ({navigation}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const intervalRef = React.useRef(null);
  const [dialog, setDialog] = React.useState(
    'So, um, I just wanted to record this quickly before I forget. I had a meeting this morning with the project leads, and honestly, it went better than expected. We reviewed the timeline for Phase 2, and there were a few concerns about the resource allocation, but nothing major. I also brought up the potential bottlenecks with the new API integration—specifically the authentication flow. I don’t think we can move forward until we get that clarified with the dev team. I’ve already sent an email to Carlos, so hopefully we’ll get a response by end of day. Oh—and I almost forgot—we need to finalize the presentation deck for Monday’s client review. I’m planning to work on it tonight after dinner. I’ll probably include the updated metrics from last week’s campaign, just to show the progress we`ve made. Anyway, just wanted to get all of that down before it slips my mind. I’ll check back in tomorrow if there are any updates.',
  );

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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
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
          <ScrollView>
            <View style={{flex: 1, gap: 10}}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  flexWrap: 'wrap',
                  flex: 1,
                }}>
                {dialog}
              </Text>
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
          }}
          onPress={() => navigation.navigate('Generate')}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 700}}>
            Generate
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Transcript;
