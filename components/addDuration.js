import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { verticalScale } from '../responsiveness';
import {RadioButton} from 'react-native-paper';
import DateDuration from './dateDuration';

const AddDuration = ({ isVisible, toggleModal }) => {
    const [value, setValue] = React.useState('onceDay');
    const [selectedStartDate, setSelectedStartDate] = useState(new Date());
    const [selectedEndDate, setSelectedEndDate] = useState(new Date());

    const handleRadioButtonPress = frequency => {
        if (value !== frequency) {
          setValue(frequency);
          console.log('Selected Frequency:', frequency);
        }
      };

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        <Text style={styles.title}>Add Duration</Text>

        <DateDuration
          label="Start Date"
          selectedDate={selectedStartDate}
          onConfirm={(date) => setSelectedStartDate(date)}
        />
       <Text style={styles.title}>Select Duration</Text>


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
                  For a Week
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
                    For a Month
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
                    Custom Date
                  </Text>
                  <RadioButton
                    value="onceWeek"
                    color="#F95880"
                    status={value === 'onceWeek' ? 'checked' : 'unchecked'}
                    onPress={() => setValue('onceWeek')}
                  />
                </View>
              </TouchableOpacity>
              </RadioButton.Group>
          </View>


        <DateDuration
          label="End Date"
          selectedDate={selectedEndDate}
          onConfirm={(date) => setSelectedEndDate(date)}
        />

        {/* Other components... */}

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => toggleModal()} style={styles.cancelButton}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    minHeight: '45%',
    borderRadius: 10,
    paddingVertical: 10,
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
    color: '#253141',
    marginTop: 10,
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(20),
    justifyContent: 'space-around',
  },
  cancelButton: {
    backgroundColor: '#EEF7FF',
    padding: 10,
    width: '42%',
    borderRadius: 6,
    marginLeft: 6,
  },
  addButton: {
    backgroundColor: '#F95880',
    padding: 10,
    width: '42%',
    borderRadius: 6,
    marginLeft: 10,
  },
  buttonText: {
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  inputBox: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginHorizontal: 20,
  },
});

export default AddDuration;
