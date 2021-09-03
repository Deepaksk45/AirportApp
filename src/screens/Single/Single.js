import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';

import styles from './style';
export default () => {
  const {params} = useRoute();
  const {name, icao, city, state, country, elevation} = params;

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.label}>Icao</Text>
        <Text style={styles.value}>: {icao}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>: {name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>City</Text>
        <Text style={styles.value}>: {city}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>State</Text>
        <Text style={styles.value}>: {state}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Country</Text>
        <Text style={styles.value}>: {country}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Elevation</Text>
        <Text style={styles.value}>: {elevation}</Text>
      </View>
    </View>
  );
};
