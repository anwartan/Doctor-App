import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../../utils';

const Link = ({
  title, size, align, onPress,
}) => (
  <TouchableOpacity onPress={onPress}>

    <Text style={styles.link(size, align)}>{title}</Text>
  </TouchableOpacity>
);

export default Link;

const styles = StyleSheet.create({
  link: (size, align) => ({
    fontSize: size,
    color: colors.link.text,
    fontFamily: fonts.primary.regular,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
