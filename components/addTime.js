// AddTime.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import TimePicker from './timePicker';
import { verticalScale } from '../responsiveness';

const AddTime = ({ isVisible, toggleModal }) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        <Text style={styles.title}>Add Time</Text>

        <TimePicker label="Time 1" />

        <TimePicker label="Time 2" />

        <View
            style={{
              flexDirection: 'row',
              marginTop: verticalScale(20),
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              onPress={() => toggleModal()}
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
    fontWeight: '600',
    fontSize: 22,
    color: '#253141',
    marginTop: 10,
    alignSelf: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
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
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default AddTime;
