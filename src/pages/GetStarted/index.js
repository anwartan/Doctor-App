import React from 'react';
import {
  StyleSheet, Text, View, ImageBackground,
} from 'react-native';
import { Button, Gap } from '../../components/atoms';
import { ICLogo, ILGetStarted } from '../../assets';
import { fonts, colors } from '../../utils';

const GetStarted = ({ navigation }) => (
  <ImageBackground source={ILGetStarted} style={styles.container}>
    <View>

      <ICLogo />
      <Gap height={91} />
      <Text style={{ fontFamily: fonts.primary[500], fontSize: 28, color: colors.text.secondary }}>
        Konsultasi dengan
        dokter jadi lebih
        mudah & fleksibel
      </Text>
    </View>
    <View>
      <Button title="Get Started" onPress={() => navigation.navigate('Register')} />
      <Gap height={16} />
      <Button title="Sign In" type="secondary" onPress={() => navigation.navigate('SignIn')} />
    </View>

  </ImageBackground>
);

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'space-between',
  },
});
