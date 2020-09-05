import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TextInput,
} from 'react-native';
import { colors, fonts } from '../../../utils';
import Gap from '../Gap';

const Input = ({
  label, secureTextEntry, value, onChangeText, disable,
}) => {
  const [border, setBorder] = useState(colors.border.primary);
  const onFocusForm = () => {
    setBorder(colors.border.secondary);
  };
  const onBlurForm = () => {
    setBorder(colors.border.primary);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Gap height={6} />
      <View style={styles.wrapper(border)}>
        <TextInput editable={!disable} selectTextOnFocus={!disable} value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} onFocus={onFocusForm} onBlur={onBlurForm} style={styles.input} />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  wrapper: (border) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
  }),
  label: {
    fontFamily: fonts.primary.regular,
    color: colors.input.label,
    fontSize: 16,
  },
  input: {
    fontFamily: fonts.primary.regular,
    fontSize: 16,
    color: colors.text.primary,
    padding: 12,
  },
});
