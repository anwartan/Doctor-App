import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';

const ProfileItem = ({ label, content }) => (
  <View style={styles.wrapper}>
    <Text style={styles.label}>{label}</Text>
    <Gap height={6} />
    <Text style={styles.text}>{content}</Text>
  </View>
);

export default ProfileItem;

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    borderBottomColor: colors.border.primary,
    borderBottomWidth: 1,
  },
  label: {
    fontFamily: fonts.primary.regular,
    color: colors.input.label,
    fontSize: 16,
  },
  text: {
    fontFamily: fonts.primary[500],
    fontSize: 16,
    color: colors.text.primary,
  },
});
