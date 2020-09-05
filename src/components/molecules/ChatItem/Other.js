import React from 'react';
import {
  Image, StyleSheet, Text, View,
} from 'react-native';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';

const Other = ({ content, time, image }) => (
  <View style={styles.container}>
    <Image source={image} style={styles.image} />
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Text style={styles.message}>
          {content}
        </Text>
      </View>
      <Gap height={8} />
      <Text style={styles.date}>{time}</Text>
    </View>
  </View>
);

export default Other;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    marginBottom: 20,
    flexDirection: 'row',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  content: {
    padding: 12,
    paddingRight: 13,
    backgroundColor: colors.chat.secondary,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    maxWidth: '80%',
  },
  date: {
    fontFamily: fonts.primary.regular,
    fontSize: 11,
    color: colors.text.grey2,
  },
  message: {
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    fontSize: 14,
  },
});
