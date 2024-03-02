import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const Switchprofile = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: `John\nMichal`,
      image:require("../../Images/User.png")
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: `John\nMichal2`,
         image:require("../../Images/User.png")
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: `John\nMichal3`,
         image:require("../../Images/User.png")
    },
    {
      id: '58694a0f-3da1-471f-bd96-145534354d72',
      title: `John\nMichal4`,
         image:require("../../Images/User.png")
    },
    {
      id: '58694a0f-3da1-471f-bd96-145322429d72',
      title: `John\nMichal5`,
         image:require("../../Images/User.png")
    },
  ];
  const [selectedUser, setSelectedUser] = useState()

  const Item = ({ title, image, id }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => setSelectedUser(id)}
    >
      <Image
        style={{ width: 70, height: 70 }}
        source={image}
      />
      <Text style={{ fontWeight: id === selectedUser ? 500 : 300 , fontSize: 14, marginTop: 5, color: id === selectedUser ? '#F95881' : '#444343', textAlign: 'center' }}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ justifyContent: 'space-evenly' , marginTop:10}}>
      <FlatList
        numColumns={3}
        data={DATA}
        renderItem={({ item }) => <Item title={item.title}  image={item.image} id={item.id}/>}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ justifyContent: 'space-between' }}
      />
      <Text style={{fontWeight: '800', fontSize: 17, marginTop: 30, color:"#8C8C8C" , textAlign:"center"}}>Manage Member?</Text>
    </View>
  );
};

export default Switchprofile;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10, // Adjust the margin as needed
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
  },
});
