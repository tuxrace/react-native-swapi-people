import React, {memo, Fragment, useState} from 'react';
import {StyleSheet, View, Text, VirtualizedList, TextInput, Button, Switch} from 'react-native';

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
    backgroundColor: '#ffffff',
    height: 150,
    justifyContent: 'flex-start',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 16,
  },
  itemText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
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
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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
    {
      id: 8,
      name: 'Ken',
    },
  ];
  return (
    <Fragment>
      <View style={styles.container}>
        <View>
          <Text style={styles.bigBlue}> People Finder </Text>
        </View>
        <View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        </View>
        <View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={() => {}}
            value={''}
          />
          <Button title="Search" onPress={() => {}} />
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
