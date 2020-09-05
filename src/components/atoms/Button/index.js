import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { colors, fonts } from '../../../utils';
import IconOnly from './IconOnly';
import BtnIcon from './BtnIconSend';

const Button = ({
  title, onPress, type, icon, disable,
}) => {
  if (type === 'btn-icon-send') {
    return <BtnIcon disable={disable} onPress={onPress} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (disable) {
    return (
      <View style={styles.disable}>
        <Text style={styles.titleDisable}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(type)}>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: type === 'secondary' ? colors.button.secondary : colors.button.primary,
    borderRadius: 10,
  }),
  disable: {
    borderRadius: 10,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.button.disable,
  },
  titleDisable: {
    fontFamily: fonts.primary[500],
    fontSize: 18,
    color: colors.text.disable,

  },
  title: (type) => ({
    fontFamily: fonts.primary[500],
    fontSize: 18,
    color: type === 'secondary' ? colors.text.primary : colors.text.secondary,
  }),
});
