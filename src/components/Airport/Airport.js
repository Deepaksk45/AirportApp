import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

export default (props) => {
  const navigation = useNavigation();
  const {name, city, state, country} = props.item;
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Single', props.item)}>
      <View style={styles.body}>
        <View>
          <View>
            <Text style={styles.title}>NAME : {name}</Text>
          </View>
          <View>
            <Text>CITY : {city}</Text>
          </View>
          <View>
            <Text>STATE : {state}</Text>
          </View>
          <View>
            <Text>COUNTRY : {country}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.icon}>></Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    marginBottom: 10,
    // borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 10,
    shadowOpacity: 0.9,
    shadowRadius: 44,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    backgroundColor: '#fff',
  },
  icon: {
    fontSize: 48,
  },
  title: {
    fontSize: 24,
  },
  metaBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // justifyContent: 'center',
    alignItems: 'center',
  },
});
