import React from 'react';
import {
  StyleSheet, Text, View, Image, TouchableOpacity,
} from 'react-native';
import { color } from 'react-native-reanimated';
import { ILDoctor4, ICRemove } from '../../../assets';
import { colors, fonts } from '../../../utils';

const Profile = ({
  name, proffesion, image, gender, editable, onPress,
}) => (
  <View style={styles.container}>
    {!editable && (
    <View style={styles.wrapper}>
      <Image source={image} style={styles.avatar} />
      {editable
      && (
      <TouchableOpacity style={styles.remove}>

        <ICRemove />
      </TouchableOpacity>
      )}

    </View>
    )}
    {editable
    && (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <Image source={image} style={styles.avatar} />
      {editable
      && (
      <View style={styles.remove}>

        <ICRemove />
      </View>
      )}
    </TouchableOpacity>
    )}
    {name && (
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.proffesion}>{proffesion}</Text>
    </View>
    )}
  </View>
);

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  wrapper: {
    borderColor: colors.border.primary,
    borderWidth: 1,
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontFamily: fonts.primary[500],
    fontSize: 20,
    color: colors.text.primary,
    textAlign: 'center',
  },
  proffesion: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.grey2,
    textAlign: 'center',

  },
  remove: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
