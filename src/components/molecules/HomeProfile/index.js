import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, Image, TouchableOpacity,
} from 'react-native';
import { ILProfile, ILNullPhoto } from '../../../assets';
import { fonts, colors, getData } from '../../../utils';
import { Gap } from '../../atoms';

const HomeProfile = ({ onPress }) => {
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullname: '',
    profession: '',
  });
  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = res.photo ? { uri: res.photo } : ILNullPhoto;
      setProfile(res);
    });
  }, []);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={profile.photo} style={styles.imgProfile} />
      <Gap width={12} />
      <View>
        <Text style={styles.name}>{profile.fullname}</Text>
        <Text style={styles.proffesion}>{profile.profession}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  imgProfile: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontFamily: fonts.primary[500],
    fontSize: 16,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  proffesion: {
    color: colors.text.grey2,
    fontFamily: fonts.primary.regular,
    fontSize: 12,
    textTransform: 'capitalize',

  },
});
