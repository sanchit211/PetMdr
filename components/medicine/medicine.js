import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Current from '../current';
import { horizontalScale, verticalScale } from '../../responsiveness';

const Medicine = () => {
  const [medicineName, setMedicineName] = useState('');


  return (
    <View style={{marginHorizontal: 25, marginTop: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View style={{flexDirection: 'row', marginTop: 8}}>
          <Image
            source={require('../../Images/back.png')}
            style={{width: horizontalScale(12), height: verticalScale(22), marginRight: 9}}
          />
          <Text
            style={{
              fontWeight: '400',
              fontSize: 16,
              color: '#8C8C8C',
              textAlign: 'center',
            }}>
            Back
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#21B5F7',
            borderRadius: 10,
            padding: 5,
          }}>
          <Image
            source={require('../../Images/filter.png')}
            style={{width: horizontalScale(25), height: verticalScale(25), marginRight: 6}}
          />

          <Text
            style={{
              fontWeight: '400',
              fontSize: 16,
              color: '#21B5F7',
              textAlign: 'center',
            }}>
            Filter
          </Text>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 0.7,
          borderBottomColor: '#444343',
          marginTop: verticalScale(20),
        }}
      />

      <View
        style={[
          styles.input,
          {flexDirection: 'row', justifyContent: 'space-between'},
        ]}>
        <TextInput
          // style={styles.input}
          placeholder="Medicine Name"
          placeholderTextColor={'#00000045'}
          onChangeText={text => setMedicineName(text)}
          value={medicineName}
        />
        <TouchableOpacity>
          <Image
            source={require('../../Images/search.png')}
            style={{width:horizontalScale(25), height:verticalScale(25), marginTop: 12}}
          />
        </TouchableOpacity>
      </View>
      <Current name="Current"/>
   <Current name="Past"/>
    </View>
  );
};

export default Medicine;

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 6,

    paddingHorizontal: 15,
  },
  
});
