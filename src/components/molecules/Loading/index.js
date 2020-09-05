import React from 'react';
import {
  StyleSheet, Text, View, ActivityIndicator,
} from 'react-native';
import { colors, fonts } from '../../../utils';

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={colors.primary} />
    <Text style={styles.text}>Loading...</Text>
  </View>
);

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: colors.loading.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.primary[500],
    fontSize: 18,
    color: colors.text.secondary,
  },

});
