import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CalendarPicker from 'react-native-calendar-picker';

const DatePicker = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [open, setOpen] = useState(false);

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    }
  };

  const minDate = new Date(); // Today
  const maxDate = new Date(2030, 6, 3);
  const startDate = selectedStartDate
    ? selectedStartDate.toLocaleDateString('en-GB')
    : '';
  const endDate = selectedEndDate
    ? selectedEndDate.toLocaleDateString('en-GB')
    : '';

  function handleOpen() {
    setOpen(!open);
  }

  function clearDate(){
    setSelectedStartDate('')
    setSelectedEndDate('')
  }
  return (
    <>
      <TouchableOpacity onPress={() => handleOpen()}>
      
        {startDate || endDate ? (
            <View
              style={{
                flexDirection: 'row',
                
                marginTop: 10,
              }}>
              <View
              >
                <Text style={{alignSelf: 'center'}}>{startDate}</Text>
              </View>
              <Text style={{marginHorizontal:5}}>to</Text>
              <View
               >
                <Text style={{alignSelf: 'center'}}>{endDate}</Text>
              </View>
            </View>
          ) :   <Text>Select Date from Calendar</Text>}
      </TouchableOpacity>
      {open && (
        <View style={[styles.container, styles.elevation]}>
          <CalendarPicker
            startFromMonday={true}
            allowRangeSelection={true}
            minDate={minDate}
            maxDate={maxDate}
            todayBackgroundColor="#f2e6ff"
            selectedDayColor="#7300e6"
            selectedDayTextColor="#FFFFFF"
            onDateChange={onDateChange}
            width={350}
          />
          {startDate || endDate ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#D9D9D9',
                  padding: 5,
                  width: '40%',
                  borderRadius: 6,
                }}>
                <Text style={{alignSelf: 'center'}}>{startDate}</Text>
              </View>
              <Text>to</Text>
              <View
                style={{
                  backgroundColor: '#D9D9D9',
                  padding: 5,
                  width: '40%',
                  borderRadius: 6,
                }}>
                <Text style={{alignSelf: 'center'}}>{endDate}</Text>
              </View>
            </View>
          ) : null}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              flexDirection: 'row-reverse',
            }}>
            <TouchableOpacity
            onPress={()=> clearDate()}
              style={{
                borderColor: '#F95880',
                borderWidth: 0.8,
                padding: 5,
                width: '20%',
                borderRadius: 6,
                marginLeft: 6,
              }}>
              <Text style={{alignSelf: 'center', color: '#F95880'}}>Clear</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#F95880',
                padding: 5,
                width: '20%',
                borderRadius: 6,
                marginLeft: 10,
              }}>
              <Text style={{alignSelf: 'center', color: '#fff'}}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: '#fff',
    padding: 15,
    borderWidth: 0.4,
    borderColor: '#e0e0e0',
    borderRadius: 10,
  },
  elevation: {
    elevation: 10,
    shadowColor: '#c7c7c7',
  },
});
