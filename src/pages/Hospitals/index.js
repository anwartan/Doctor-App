import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, ImageBackground,
} from 'react-native';
import { ILHospital } from '../../assets';
import { colors, fonts } from '../../utils';
import { Gap } from '../../components/atoms';
import ListHospital from '../../components/molecules/ListHospital';
import { Fire } from '../../config';

const Hospitals = () => {
  const [hospital, setHospital] = useState([]);
  useEffect(() => {
    Fire.database().ref('hospitals/').once('value')
      .then((res) => {
        if (res.val()) {
          setHospital(res.val());
        }
      });
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imgBg} source={ILHospital}>
        <Gap height={36} />
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.deskripsi}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        {hospital.map((item) => (
          <ListHospital image={item.image} key={item.id} title={item.name} address={item.address} />
        ))}

      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  imgBg: {
    height: 240,
  },
  title: {
    fontFamily: fonts.primary[500],
    fontSize: 20,
    color: colors.text.secondary,
    textAlign: 'center',
  },
  deskripsi: {
    fontFamily: fonts.primary[300],
    fontSize: 14,
    color: colors.text.secondary,
    textAlign: 'center',

  },
  content: {
    backgroundColor: colors.primary,
    flex: 1,
    borderRadius: 20,
    marginTop: -20,
  },
});
