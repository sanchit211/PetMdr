import React, { useRef, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';

const SpecificInterval = () => {
  const DATA = Array.from({ length: 100 }, (_, index) => ({
    id: String(index + 1),
    title: (index + 1).toString(),
  }));

  const flatListRef = useRef(null);
  const [highlightedIndex, setHighlightedIndex] = useState(Math.floor(DATA.length / 2));

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      const middleIndex = Math.floor(viewableItems.length / 2);
      setHighlightedIndex(viewableItems[middleIndex].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const Item = ({ title, index }) => (
    <View style={[styles.item, index === highlightedIndex && styles.selectedItem]}>
      <Text style={[styles.title, index === highlightedIndex && styles.selectedTitle]}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.selectIntervalText}>Select Interval</Text>
      <FlatList
        ref={flatListRef}
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => <Item title={item.title} index={index} />}
        keyExtractor={item => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        snapToInterval={Dimensions.get('window').width - 32} // Adjust this based on your styling
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default SpecificInterval;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ededed',
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
  },
  selectIntervalText: {
    fontWeight: '400',
    fontSize: 14,
    color: '#00000099',
    marginBottom: 16,
  },
  item: {
    marginVertical: 4,
    marginHorizontal: 8,
    padding: 10,
    borderRadius: 10,
    // // backgroundColor: '#f9f9f9',
  },
  selectedItem: {
    backgroundColor: '#F95880',
    marginVertical: 10,
    marginHorizontal: 8,
    paddingHorizontal:15,
    padding: 8,
    borderRadius: 50,
  },
  title: {
    fontSize: 20,
  },
  selectedTitle: {
    fontWeight: 'bold',
  },
});
