import React from 'react';
import {
  Image, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { ICStar, ILNullPhoto } from '../../../assets';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';

const RatedDoctor = ({
  onPress, name, proffesion, image, rate,
}) => {
  const stars = [];
  for (let index = 0; index < rate; index++) {
    stars.push(
      <ICStar key={index} />,
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={image.uri || ILNullPhoto} style={styles.image} />
      <Gap width={12} />
      <View style={styles.detail}>

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.proffesion}>{proffesion}</Text>
      </View>
      <View style={styles.wrapperStar}>

        {stars}

      </View>
    </TouchableOpacity>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  wrapperStar: {
    flexDirection: 'row',
  },
  detail: {
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  name: {
    color: colors.text.primary,
    fontFamily: fonts.primary[500],
    fontSize: 16,
  },
  proffesion: {
    fontFamily: fonts.primary.regular,
    fontSize: 12,
    color: colors.text.grey2,
  },
});
