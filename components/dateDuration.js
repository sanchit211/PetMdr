import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { horizontalScale, verticalScale } from '../responsiveness';

const DateDuration = ({ label, selectedDate, onConfirm }) => {
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleDateConfirm = (date) => {
    onConfirm(date);
    hideDatePicker();
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        onPress={showDatePicker}
        style={[
          styles.inputBox,
          {
            flexDirection: 'row',
            paddingVertical: 14,
            justifyContent: 'space-between',
          },
        ]}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../Images/medicine/calendar.png')}
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
            }}>
            {selectedDate ? selectedDate.toLocaleDateString() : `Select Date`}
          </Text>
        </View>
      </TouchableOpacity>

      <DateTimePickerModal
        date={selectedDate}
        isVisible={datePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
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

export default DateDuration;
