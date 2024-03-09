import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { DATA } from './weekDays';

const ChooseDays = ({ selectionType }) => {
  const [selectedDays, setSelectedDays] = useState([]);

  const handleDaySelection = (day) => {
    if (selectionType === 'specificDaysInWeek') {
      // Allow selecting/deselecting multiple days
      const newSelectedDays = selectedDays.includes(day)
        ? selectedDays.filter((selectedDay) => selectedDay !== day)
        : [...selectedDays, day];
      setSelectedDays(newSelectedDays);
    } else if (selectionType === 'onceWeek') {
      // Only allow selecting one day for once a week
      setSelectedDays([day]);
    }
  };

  const Item = ({ title }) => (
    <TouchableOpacity
      onPress={() => handleDaySelection(title)}
      style={{
        backgroundColor: selectedDays.includes(title) ? '#F95880' : '#E8E8E8',
        padding: 8,
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 6,
      }}>
      <Text
        style={{
          fontWeight: '400',
          fontSize: 14,
          color: selectedDays.includes(title) ? '#fff' : '#253141',
          alignSelf: 'center',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ borderWidth: 1, borderColor: '#e0e0e0', marginTop: 20, borderRadius: 10, padding: 5 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 16,
            color: '#00000045',
            marginTop: 10,
          }}>
          Choose Days
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center', width: '60%' }}>
          <Text style={{ fontWeight: '400', fontSize: 13, color: '#253141', marginTop: 2 }}>
            {selectedDays.join(', ')}
          </Text>
        </View>
      </View>
      <FlatList
        data={DATA}
        numColumns={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ChooseDays;

const styles = StyleSheet.create({});
