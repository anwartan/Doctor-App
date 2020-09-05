import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  ICDoctor, ICMessage, ICHospital, ICDoctorActive, ICMessageActive, ICHospitalActive,
} from '../../../assets';
import { fonts, colors } from '../../../utils';

const TabItem = ({
  type, isFocused, onPress, onLongPress,
}) => {
  const Icon = () => {
    if (type === 'Doctor') {
      return isFocused ? <ICDoctorActive /> : <ICDoctor />;
    }
    if (type === 'Messages') {
      return isFocused ? <ICMessageActive /> : <ICMessage />;
    }
    if (type === 'Hospitals') {
      return isFocused ? <ICHospitalActive /> : <ICHospital />;
    }
    return <ICDoctor />;
  };
  return (

    <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={{ alignItems: 'center' }}>
      <Icon />
      <Text style={styles.title(isFocused)}>{type}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  title: (isFocused) => ({
    fontFamily: fonts.primary[500],
    fontSize: 10,
    marginTop: 4,
    color: isFocused === true ? colors.text.active : colors.text.nonactive,
  }),
});
