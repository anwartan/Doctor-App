import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Gap, Button } from '../../atoms';
import { fonts, colors } from '../../../utils';
import DarkProfile from './DarkProfile';

const Header = ({
  title, onPress, type, desc, image,
}) => {
  if (type === 'dark-profile') {
    return (
      <DarkProfile title={title} onPress={onPress} desc={desc} image={image} />
    );
  }
  return (
    <View style={styles.container(type)}>
      <Button type="icon-only" icon={type === 'dark' ? 'back-light' : 'back-dark'} onPress={onPress} />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: (type) => ({
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: type === 'dark' ? colors.header.secondary : colors.header.primary,
    alignItems: 'center',
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,

  }),
  text: (type) => ({
    flex: 1,
    textAlign: 'center',
    fontFamily: fonts.primary[500],
    fontSize: 20,
    color: type === 'dark' ? colors.text.secondary : colors.text.primary,
  }),
});
