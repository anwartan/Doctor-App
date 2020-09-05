import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { colors, fonts } from '../../../utils';
import { Button, Gap } from '../../atoms';

const InputChat = ({ value, onChangeText, onButtonPress }) => (
  <View style={styles.container}>
    <TextInput placeholder="Tulis pesan " style={styles.input} value={value} onChangeText={onChangeText} />
    <Gap width={10} />
    <Button type="btn-icon-send" onPress={onButtonPress} disable={value.length <= 0} />
  </View>
);

export default InputChat;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: colors.button.disable,
    padding: 14,
    borderRadius: 10,
    fontFamily: fonts.primary.regular,
    fontSize: 14,

  },
});
