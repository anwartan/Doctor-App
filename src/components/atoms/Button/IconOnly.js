import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { ICBackDark, ICBackLight } from '../../../assets';

const IconOnly = ({ onPress, icon }) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <ICBackDark />;
    }
    if (icon === 'back-light') {
      return <ICBackLight />;
    }
    return <ICBackDark />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({});
