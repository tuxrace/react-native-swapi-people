import React, {memo, Fragment} from 'react';
import {StyleSheet, View, Text, VirtualizedList, TextInput} from 'react-native';

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

interface People {
  id: number;
  name: string;
}

const renderItem = ({item}) => {
  return (
    // <TouchableOpacity>
    <View style={styles.item}>
      <Text style={styles.itemText}> {item.name} </Text>
    </View>
    // </TouchableOpacity>
  );
};

const getItemCount = () => {
  return 7;
};

const getItem = (data, index) => {
  return {
    id: data[index].id,
    name: data[index].name,
  };
};

const Main = () => {
  const people: People[] = [
    {
      id: 1,
      name: 'Tom',
    },
    {
      id: 2,
      name: 'Jim',
    },
    {
      id: 3,
      name: 'Ann',
    },
    {
      id: 4,
      name: 'Dan',
    },
    {
      id: 5,
      name: 'Ben',
    },
    {
      id: 6,
      name: 'Von',
    },
    {
      id: 7,
      name: 'Pam',
    },
  ];
  return (
    <Fragment>
      <View style={styles.container}>
        <View>
          <Text style={styles.bigBlue}> People Finder </Text>
        </View>
        <View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={() => {}}
            value={''}
          />
        </View>
        <View>
          <VirtualizedList
            data={people}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            getItemCount={getItemCount}
            getItem={getItem}
          />
        </View>
      </View>
    </Fragment>
  );
};

export default memo(Main);
