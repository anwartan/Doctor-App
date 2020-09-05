import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { ICSendDark, ICSendLight } from '../../../assets';
import { colors } from '../../../utils';

const BtnIconSend = ({ disable, onPress }) => (
  <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
    {
      disable ? <ICSendDark /> : <ICSendLight />
    }
  </TouchableOpacity>
);

export default BtnIconSend;

const styles = StyleSheet.create({
  container: (disable) => ({
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: disable ? colors.button.disable : colors.button.able,
    paddingBottom: 8.09,
    paddingLeft: 8.09,
    paddingTop: 3.09,
    paddingRight: 3.09,

  }),
});
