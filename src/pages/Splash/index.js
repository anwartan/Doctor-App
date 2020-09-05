import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ICLogo } from '../../assets';
import { fonts, colors } from '../../utils';
import { Gap } from '../../components';
import { Fire } from '../../config';

const Splash = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 3000);
    });

    return () => unsubscribe();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <ICLogo />
      <Gap height={20} />
      <Text style={{ fontFamily: fonts.primary[500], color: colors.text.primary, fontSize: 20 }}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary,
  },
});
