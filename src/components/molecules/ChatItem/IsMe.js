import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';

const IsMe = ({ content, time }) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.message}>
        {content}
      </Text>
    </View>
    <Gap height={8} />
    <Text style={styles.date}>{time}</Text>
  </View>
);

export default IsMe;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',

  },
  content: {
    padding: 12,
    paddingRight: 13,
    backgroundColor: colors.chat.primary,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    maxWidth: '70%',
  },
  date: {
    fontFamily: fonts.primary.regular,
    fontSize: 11,
    color: colors.text.grey2,
  },
  message: {
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    fontSize: 14,
  },
});
