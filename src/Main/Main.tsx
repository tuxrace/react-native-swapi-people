import React, {memo, Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  VirtualizedList,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 32,
  },
  item: {
    backgroundColor: '#0000ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  itemText: {
    color: 'white',
    fontSize: 24,
  },
});

const renderItem = ({item}) => {
  return (
    // <TouchableOpacity>
    <View style={styles.item}>
      <Text style={styles.itemText}> {item.name} </Text>
    </View>
    // </TouchableOpacity>
  );
};

const Main = () => {
  const people = [
    {
      id: 1,
      name: 'Tom',
    },
    {
      id: 1,
      name: 'Jim',
    },
    {
      id: 1,
      name: 'Ann',
    },
  ];
  return (
    <Fragment>
      <View style={styles.container}>
        <View>
          <Text style={styles.bigBlue}> People Finder </Text>
        </View>
        <View>
          <FlatList
            data={people}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </Fragment>
  );
};

export default memo(Main);
