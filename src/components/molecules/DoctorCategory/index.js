import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { ICDokterUmum, ICPsikiater, ICDokterObat } from '../../../assets';
import { fonts, colors } from '../../../utils';
import { Gap } from '../../atoms';

const DoctorCategory = ({ type, onPress }) => {
  const Icon = () => {
    if (type === 'dokter umum') {
      return <ICDokterUmum />;
    }
    if (type === 'psikiater') {
      return <ICPsikiater />;
    }
    if (type === 'dokter obat') {
      return <ICDokterObat />;
    }
    return <ICDokterUmum />;
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon />
      <Gap height={28} />
      <Text style={styles.title}>
        Saya butuh
      </Text>
      <Text style={{ fontFamily: fonts.primary[500], fontSize: 12 }}>{type}</Text>

    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 130,
    padding: 12,
    backgroundColor: colors.card.primary,
    borderRadius: 10,
    marginRight: 10,

  },
  title: {
    fontFamily: fonts.primary[300],
    fontSize: 12,

  },
});
