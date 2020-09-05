import React from 'react';
import {
  StyleSheet, Text, View, Image, TouchableOpacity,
} from 'react-native';
import { ILDoctor4, ICNext } from '../../../assets';
import { colors, fonts } from '../../../utils';

const List = ({
  onPress, name, desc, image, type, icon,
}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    {icon || <Image style={styles.image} source={image} />}

    <View style={styles.wrapper}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.message}>{desc}</Text>
    </View>
    {type === 'next' && <ICNext />}
  </TouchableOpacity>
);

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: colors.border.primary,
    borderBottomWidth: 1,
  },
  wrapper: {
    flex: 1,
    marginLeft: 12,

  },
  name: {
    fontFamily: fonts.primary[500],
    fontSize: 16,
    color: colors.text.primary,
  },
  message: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.text.grey2,
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});
