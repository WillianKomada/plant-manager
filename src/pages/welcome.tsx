import React from 'react';
import { Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';


import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

import { Button } from '../components/Button';

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Manage {'\n'}
        your plants {'\n'}
        easily.
      </Text>

      <Image source={wateringImg} style={styles.image} />

      <Text style={styles.subtitle}>
        Don't forget to watering your plants anymore.
        We take care to remind you whenever you need it.
      </Text>

      <Button />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading
  },

  image: {
    width: 292,
    height: 284
  },
})