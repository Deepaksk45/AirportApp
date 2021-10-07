import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {Airport} from '../../components';

import styles from './style';
export default () => {
  const [loaded, setLoaded] = useState(false);
  const [airports, setAirports] = useState('');

  const fatchAirports = async () => {
    await fetch(
      'https://raw.githubusercontent.com/Deepaksk45/AirportApp/master/src/assets/airports.json',
    )
      .then((response) => response.json())
      .then(async (data) => {
        try {
          await AsyncStorage.setItem(
            'airports',
            JSON.stringify(Object.values(data)),
          );
        } catch (e) {
          console.log('Failed to save the data to the storage', e);
        }
        setAirports(Object.values(data));
        setLoaded(true);
      })
      .catch(async (err) => {
        try {
          let airportsData = await AsyncStorage.getItem('airports');
          console.log('fjjjkdjjkldkjl', airportsData);
          if (airportsData !== null) {
            setAirports(JSON.parse(airportsData));
            setLoaded(true);
          } else {
            setAirports(null);
            setLoaded(true);
          }
        } catch (e) {
          console.log('Failed to fetch the data from storage', e);
        }
        console.log(err);
      });
  };

  useEffect(() => {
    fatchAirports();
  }, []);

  return !loaded ? (
    <View style={styles.splash}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  ) : (
    <SafeAreaView style={styles.body}>
      <FlatList
        scrollToOverflowEnabled={false}
        data={airports}
        keyExtractor={(item) => item.icao}
        renderItem={({item, index}) => {
          return <Airport item={item} />;
        }}
      />
    </SafeAreaView>
  );
};
