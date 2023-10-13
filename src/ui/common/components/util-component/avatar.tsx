import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BaseIcon} from '../icons/base-icon';

export const Avatar = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: 'grey',
  },
});
