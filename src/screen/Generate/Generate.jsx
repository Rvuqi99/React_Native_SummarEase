import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {Dropdown} from 'react-native-element-dropdown';

const Generate = ({navigation}) => {
  const [output, setOutput] = React.useState();
  const [outputList, setOutputList] = React.useState([
    {
      id: 1,
      name: 'Summary',
    },
    {id: 2, name: 'Meeting Minutes'},
    {id: 3, name: 'Highlights'},
    {id: 4, name: 'Speaker Breakdown'},
  ]);

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
        {item.name === output && <Icon name="check" size={20} color="black" />}
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 20, gap: 20}}>
      <View style={{gap: 10}}>
        <Text style={{fontSize: 17, color: 'black', fontWeight: 500}}>
          What would you like to generate?
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
          data={outputList}
          maxHeight={300}
          labelField="name"
          valueField="name"
          placeholder="Select output type"
          value={output}
          onChange={item => {
            setOutput(item.name);
          }}
          renderItem={renderItem}
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
        onPress={() => navigation.navigate('MeetingMinutes')}>
        <Text style={{fontWeight: 700, color: 'white', fontSize: 16}}>
          NEXT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Generate;
