import React, {memo} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigBlue}> People Finder </Text>
    </View>
  );
};

export default memo(Main);
