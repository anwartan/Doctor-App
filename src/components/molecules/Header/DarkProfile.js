import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import { Gap, Button } from '../../atoms';
import { fonts, colors } from '../../../utils';
import { ILDoctor5 } from '../../../assets';

const DarkProfile = ({
  onPress, title, desc, image,
}) => (
  <View style={styles.container}>
    <Button type="icon-only" icon="back-light" onPress={onPress} />
    <View style={{ flex: 1 }}>

      <Text style={styles.text}>{title}</Text>
      <Gap height={6} />
      <Text style={styles.desc}>{desc}</Text>
    </View>
    <Image source={image} style={styles.image} />

    <Gap width={24} />
  </View>
);

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.header.secondary,
    alignItems: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,

  },
  text: {
    textAlign: 'center',
    fontFamily: fonts.primary[500],
    fontSize: 20,
    color: colors.text.secondary,
  },
  desc: {
    textAlign: 'center',
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.grey2,
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});
