import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {RadioButton} from 'react-native-paper';
import {horizontalScale, verticalScale} from '../../responsiveness';

import ChooseDays from '../chooseDays';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SpecificInterval from '../specificInterval';

const Freequency = ({isVisible, toggleModal}) => {
  const [value, setValue] = React.useState('onceDay');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };


  const handleRadioButtonPress = frequency => {
    if (value !== frequency) {
      setValue(frequency);
      console.log('Selected Frequency:', frequency);
    }
  };

  const closeModal = () => {
    toggleModal();
  };


  return (
    <View>
      <Modal isVisible={isVisible}>
        <View
          style={{
            backgroundColor: '#fff',
            minHeight: '75%',
            borderRadius: 10,
            paddingVertical: 10,
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 22,
              color: '#253141',
              marginTop: 10,
              alignSelf: 'center',
            }}>
            FREEQUENCY
          </Text>

          <View>
            <RadioButton.Group
              onValueChange={value => {
                setValue(value);
                console.log('Selected Frequency:', value);
              }}
              value={value}>
              <TouchableOpacity
                onPress={() => handleRadioButtonPress('onceDay')}>
                <View
                  style={[
                    styles.inputBox,
                    {
                      flexDirection: 'row',
                      paddingVertical: 4,
                      justifyContent: 'space-between',
                    },
                  ]}>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 14,
                      color: '#00000099',
                      alignSelf: 'center',
                    }}>
                    Once a Day
                  </Text>
                  <RadioButton
                    value="onceDay"
                    color="#F95880"
                    status={value === 'onceDay' ? 'checked' : 'unchecked'}
                    onPress={() => setValue('onceDay')}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleRadioButtonPress('twiceDay')}>
                <View
                  style={[
                    styles.inputBox,
                    {
                      flexDirection: 'row',
                      paddingVertical: 4,
                      justifyContent: 'space-between',
                    },
                  ]}>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 14,
                      color: '#00000099',
                      alignSelf: 'center',
                    }}>
                    Twice a Day
                  </Text>
                  <RadioButton
                    value="twiceDay"
                    color="#F95880"
                    status={value === 'twiceDay' ? 'checked' : 'unchecked'}
                    onPress={() => setValue('twiceDay')}
                  />
                </View>
              </TouchableOpacity>

              {/* once a week */}
              <TouchableOpacity
                onPress={() => handleRadioButtonPress('onceWeek')}>
                <View
                  style={[
                    styles.inputBox,
                    {
                      flexDirection: 'row',
                      paddingVertical: 4,
                      justifyContent: 'space-between',
                    },
                  ]}>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 14,
                      color: '#00000099',
                      alignSelf: 'center',
                    }}>
                    Once a Week
                  </Text>
                  <RadioButton
                    value="onceWeek"
                    color="#F95880"
                    status={value === 'onceWeek' ? 'checked' : 'unchecked'}
                    onPress={() => setValue('onceWeek')}
                  />
                </View>
              </TouchableOpacity>

              {/* once a month */}
              <TouchableOpacity
                onPress={() => handleRadioButtonPress('onceMonth')}>
                <View
                  style={[
                    styles.inputBox,
                    {
                      flexDirection: 'row',
                      paddingVertical: 4,
                      justifyContent: 'space-between',
                    },
                  ]}>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 14,
                      color: '#00000099',
                      alignSelf: 'center',
                    }}>
                    Once a Month
                  </Text>
                  <RadioButton
                    value="onceMonth"
                    color="#F95880"
                    status={value === 'onceMonth' ? 'checked' : 'unchecked'}
                    onPress={() => setValue('onceMonth')}
                  />
                </View>
              </TouchableOpacity>

              {/* specific interval */}
              <TouchableOpacity
                onPress={() => handleRadioButtonPress('specificInterval')}>
                <View
                  style={[
                    styles.inputBox,
                    {
                      flexDirection: 'row',
                      paddingVertical: 4,
                      justifyContent: 'space-between',
                    },
                  ]}>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 14,
                      color: '#00000099',
                      alignSelf: 'center',
                    }}>
                    Specific Interval
                  </Text>
                  <RadioButton
                    value="specificInterval"
                    color="#F95880"
                    status={
                      value === 'specificInterval' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setValue('specificInterval')}
                  />
                </View>
              </TouchableOpacity>

              {/* specific days a week */}
              <TouchableOpacity
                onPress={() => handleRadioButtonPress('specificDaysInWeek')}>
                <View
                  style={[
                    styles.inputBox,
                    {
                      flexDirection: 'row',
                      paddingVertical: 4,
                      justifyContent: 'space-between',
                    },
                  ]}>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 14,
                      color: '#00000099',
                      alignSelf: 'center',
                    }}>
                    Specific Days on Week
                  </Text>
                  <RadioButton
                    value="specificDaysInWeek"
                    color="#F95880"
                    status={
                      value === 'specificDaysInWeek' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setValue('specificDaysInWeek')}
                  />
                </View>
              </TouchableOpacity>
            </RadioButton.Group>
          </View>

          <View style={{width: '95%', marginHorizontal: 10}}>
            {value === 'specificDaysInWeek' ? (
           <ChooseDays selectionType="specificDaysInWeek" />
            ) : null}

{value === 'onceWeek' ? (
           <ChooseDays selectionType="onceWeek"/>
            ) : null}
            

{value === 'onceMonth' ? (
    <>
  
         <TouchableOpacity
         onPress={showDatePicker}
         style={[
           styles.inputBox1,
           {
             flexDirection: 'row',
             paddingVertical: 12,
             justifyContent: 'space-between',
           },
         ]}>
         <View style={{flexDirection: 'row'}}>
           <Image
             source={require('../../Images/medicine/calendar.png')}
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
           {selectedDate ? selectedDate.toLocaleDateString(): `Select Date`}
           </Text>
       </View>
       </TouchableOpacity>
        <DateTimePickerModal
        date={selectedDate}
        isVisible={datePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      </>
            ) : null}
          </View>

          {value === 'specificInterval' ? (
         <SpecificInterval/>
            ) : null}

          <View
            style={{
              flexDirection: 'row',
              marginTop: verticalScale(20),
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              onPress={() => closeModal()}
              style={{
                backgroundColor: '#EEF7FF',
                padding: 10,
                width: '42%',
                borderRadius: 6,
                marginLeft: 6,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  color: '#2ADDF3',
                  fontWeight: '600',
                  fontSize: 16,
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#F95880',
                padding: 10,
                width: '42%',
                borderRadius: 6,
                marginLeft: 10,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  color: '#fff',
                  fontWeight: '600',
                  fontSize: 16,
                }}>
                Add
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Freequency;

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginHorizontal: 20,
  },
  inputBox1: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
});
