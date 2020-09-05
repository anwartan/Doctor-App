import React from 'react';
import {
  Image, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { colors, fonts } from '../../../utils';

const ListHospital = ({ title, address, image }) => (
  <TouchableOpacity style={styles.container}>
    <Image source={{ uri: image }} style={styles.image} />
    <View style={styles.wrapper}>

      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.address}>{address}</Text>
    </View>
  </TouchableOpacity>
);

export default ListHospital;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',

  },
  wrapper: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 75,
    borderRadius: 11,
    marginRight: 16,
  },
  title: {
    fontFamily: fonts.primary[500],
    fontSize: 20,
    color: colors.text.primary,
  },
  address: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.text.grey2,
  },

});
