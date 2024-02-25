import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
import DatePicker from '../components/datePicker';
  
  const Home = () => {
    const DataList = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        image: require('../Images/Vector.png'),
        title: 'Mason Vitamins Natural Zinc ',
        service: 'Immunization',
        time: '01:00 pm',
        date: '06/02/22',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        image: require('../Images/coloured_pill.png'),
        title: 'Diabetes',
        service: 'Medication',
        time: '01:00 pm',
        date: '06/02/22',
      },
    ];
  
    const ListItem = ({image, title, service, time, date}) => (
      <View style={[styles.card, styles.elevation]}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{width: '25%'}}>
            <Image
              source={image}
              style={{
                resizeMode: 'contain',
                width: 35,
                height: 35,
                marginTop: 10,
              }}
            />
          </View>
          <View style={{width: '75%'}}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 13,
                color: '#000',
              }}>
              {title}
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 11,
                color: '#45374A',
              }}>
              {service}
            </Text>
  
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Image
                source={require('../Images/time.png')}
                style={{
                  resizeMode: 'contain',
                  width: 20,
                  height: 20,
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 14,
                  color: '#0000005B',
                }}>
                {time}
              </Text>
              <View style={{marginLeft: 20, flexDirection: 'row'}}>
                <Image
                  source={require('../Images/calendar.png')}
                  style={{
                    resizeMode: 'contain',
                    width: 20,
                    height: 20,
                    marginRight: 5,
                  }}
                />
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 14,
  
                    color: '#0000005B',
                  }}>
                  {date}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
    return (
      <View>
        <ScrollView>
    
 
          {/* new code starts from here  */}
          <View style={{marginHorizontal: 25}}>
            <Text style={{fontWeight: '800', fontSize: 17, marginTop: 20}}>
              Upcoming Reminders
            </Text>
            <DatePicker/>
            <FlatList
              data={DataList}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <ListItem
                  image={item.image}
                  bgColor={item.color}
                  title={item.title}
                  time={item.time}
                  date={item.date}
                  service={item.service}
                />
              )}
              keyExtractor={item => item.id}
            />
  
            <View style={[styles.newCard, styles.elevation]}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    backgroundColor: '#73CDFF',
                    width: 70,
                    height: 70,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 60,
                    borderBottomStartRadius: 10,
                  }}
                />
  
                <View
                  style={{
                    backgroundColor: '#1DE5ED',
                    width: 20,
                    height: 20,
                    marginTop: 10,
                    marginLeft: 10,
                    borderRadius: 100,
                  }}
                />
              </View>
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    color: '#000',
                    marginTop: 10,
                    fontWeight: '600',
                    fontSize: 13,
                  }}>
                  Tip of the day
                </Text>
                <Text
                  style={{
                    alignSelf: 'center',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    color: '#000',
                    fontWeight: '600',
                    fontSize: 15,
                    marginTop: 14,
                  }}>
                  “Tell your physicians, clinicians and your pharmacist about your{' '}
                  {'\n'} allergies”
                </Text>
              </View>
            </View>
  
            
          </View>
        </ScrollView>
    
      </View>
    );
  };
  
  export default Home;
  
  const styles = StyleSheet.create({
    card: {
      backgroundColor: 'white',
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 15,
      width: '100%',
      marginVertical: 10,
    },
    newCard: {
      backgroundColor: 'white',
      borderRadius: 10,
      height: 150,
      width: '100%',
      marginVertical: 10,
    },
  
    elevation: {
      elevation: 10,
      shadowColor: '#73CDFF',
    },
  });
  