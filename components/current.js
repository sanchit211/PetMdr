import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Current = ({name}) => {
  const DataList = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      image: require('../Images/current.png'),
      multiDots: require('../Images/multi-dots.png'),
      verified: require('../Images/verified.png'),
      title: 'Etodolac Capsules',
      variant: '325 MG',
      prescribed: 'Prescribed',
      date: '06/02/22',
      startDate:'02/03/2024',
      endDate:'02/03/2024'
    },
  ];

  const ListItem = ({
    image,
    title,
    variant,
    prescribed,
    multiDots,
    verified,
    date,
    startDate,
    endDate
  }) => (
    <View style={[styles.card, styles.elevation]}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{width: '20%', paddingHorizontal: 10, paddingVertical: 20}}>
          <Image
            source={image}
            style={{
              resizeMode: 'contain',
              width: 50,
              height: 50,
              marginTop: 1,
            }}
          />
        </View>
        <View
          style={{width: '58%', paddingHorizontal: 10, paddingVertical: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 15,
                color: '#000',
              }}>
              {title}
            </Text>
            <TouchableOpacity>
              <Image
                source={multiDots}
                style={{
                  resizeMode: 'contain',
                  width: 25,
                  height: 25,
                  marginTop: -15,
                }}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontWeight: '600',
              fontStyle: 'italic',
              fontSize: 12,
              color: '#595959',
            }}>
            {variant}
          </Text>

          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 14,
                color: '#0000005B',
              }}>
              {prescribed}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '22%',
            borderTopEndRadius: 10,
            borderBottomEndRadius: 10,
          }}>
          <View
            style={{
              backgroundColor: '#F95881',
              height: '75%',
              borderTopEndRadius: 10,
            }}>
            {name === 'Current' ? (
              <Image
                source={verified}
                style={{
                  resizeMode: 'contain',
                  width: 20,
                  height: 20,
                  marginTop: 10,
                  alignSelf: 'center',
                }}
              />
            ) : (
              <View>
                <Text style={{
                    fontWeight: '300',
                    fontSize: 11,
                    color: '#fff',
                    alignSelf: 'center',
                    marginTop: 3,
                  }}>Starting Date</Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 12,
                    color: '#fff',
                    alignSelf: 'center',
                    marginTop: 3,
                  }}>
                  {startDate}
                </Text>
                <Text style={{
                    fontWeight: '300',
                    fontSize: 11,
                    color: '#fff',
                    alignSelf: 'center',
                    marginTop: 3,
                  }}>End Date</Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 12,
                    color: '#fff',
                    alignSelf: 'center',
                    marginTop: 3,
                  }}>
                  {endDate}
                </Text>
              </View>
              
            )}
{name === "Past" ? null :  <Text
              style={{
                fontWeight: '600',
                fontSize: 12,
                color: '#fff',
                alignSelf: 'center',
                marginTop: 7,
              }}>
              {date}
            </Text>}
           
          </View>
          <View
            style={{
              backgroundColor: '#24CACA',
              paddingVertical: 3,
              borderBottomEndRadius: 10,
              height: '25%',
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 12,
                color: '#fff',
                alignSelf: 'center',
              }}>
              Wade
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <View>
      {/* Card listing */}
      <Text
        style={{
          fontWeight: '400',
          fontSize: 20,
          color: '#253141',
          marginTop: 20,
        }}>
        {name}
      </Text>

      <FlatList
        data={DataList}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <ListItem
            image={item.image}
            bgColor={item.color}
            title={item.title}
            prescribed={item.prescribed}
            multiDots={item.multiDots}
            variant={item.variant}
            verified={item.verified}
            date={item.date}
            startDate={item.startDate}
            endDate={item.endDate}
          />
        )}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#F95881',
          width: '50%',
          alignSelf: 'center',
          marginTop: 15,
          padding: 15,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 16,
            color: '#fff',
            alignSelf: 'center',
          }}>
          + Add Medicine
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Current;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    // paddingVertical: 15,
    // paddingHorizontal: 15,
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
