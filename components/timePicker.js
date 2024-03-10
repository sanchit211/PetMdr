// TimePicker.js

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { horizontalScale, verticalScale } from '../responsiveness';

const TimePicker = ({ label }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showTimePicker = () => {
    setDatePickerVisible(true);
  };

  const hideTimePicker = () => {
    setDatePickerVisible(false);
  };

  const handleTimeConfirm = (date) => {
    setSelectedDate(date);
    hideTimePicker();
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        onPress={showTimePicker}
        style={[
          styles.inputBox,
          {
            flexDirection: 'row',
            paddingVertical: 14,
            justifyContent: 'space-between',
          },
        ]}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../Images/medicine/time.png')}
            style={{
              width: horizontalScale(17),
              height: verticalScale(17),
              resizeMode: 'contain',
              marginRight: 10,
            }}
          />
          <Text
            style={{
              fontWeight: '600',
              fontSize: 14,
              color: '#00000045',
              alignSelf: 'center',
            }}
          >
            {selectedDate ? selectedDate.toLocaleTimeString() : 'Add Time'}
          </Text>
        </View>
        <View>
          <Image
            source={require('../Images/right_arrow.png')}
            style={{
              width: horizontalScale(12),
              height: verticalScale(12),
              resizeMode: 'contain',
              marginTop: 2,
              marginRight: 10,
            }}
          />
        </View>
      </TouchableOpacity>

      <DateTimePickerModal
        date={selectedDate}
        isVisible={datePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: '400',
    marginHorizontal: 20,
    fontSize: 14,
    color: '#3d3d3d',
    marginTop: 10,
  },
  inputBox: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 6,
    paddingHorizontal: 15,
    marginHorizontal: 20,
  },
});

export default TimePicker;
