import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import { ILNews } from '../../../assets';
import { fonts, colors } from '../../../utils';

const NewsItem = ({ title, date, image }) => (
  <View style={styles.container}>
    <View style={styles.wrapper}>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.day}>{date}</Text>
    </View>
    <Image style={styles.image} source={{ uri: image }} />
  </View>
);

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: colors.border.primary,
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 11,
  },
  title: {
    fontFamily: fonts.primary[500],
    fontSize: 16,
  },
  day: {
    fontFamily: fonts.primary.regular,
    fontSize: 12,
    color: colors.text.grey2,
  },
  wrapper: {
    flex: 1,
  },
});
