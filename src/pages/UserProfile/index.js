import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import {
  Header, Profile, List, Gap,
} from '../../components';
import { colors, getData } from '../../utils';
import {
  ICEditProfile, ICLanguage, ICRate, ICHelp, ILDoctor4, ILNullPhoto,
} from '../../assets';
import { Fire } from '../../config';

const UserProfile = ({ navigation }) => {
  const [profile, setProfile] = useState({
    fullname: '',
    proffesion: '',
    photo: ILNullPhoto,
  });
  useEffect(() => {
    getData('user')
      .then((res) => {
        const data = res;
        data.photo = res.photo ? { uri: res.photo } : ILNullPhoto;
        setProfile(data);
      });
  }, []);
  const signOut = () => {
    Fire.auth().signOut().then((res) => (
      navigation.replace('GetStarted')
    )).catch((err) => {
      showMessage({
        message: err.message,
        type: 'default',
        backgroundColor: colors.flash.failed,
        color: colors.text.secondary,
      });
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <Header title="Profile" onPress={() => navigation.goBack()} />

      <View style={styles.container}>
        <Gap height={10} />
        {profile.fullname.length > 0 && (
        <Profile name={profile.fullname} image={profile.photo} proffesion={profile.proffesion} />

        )}
        <Gap height={10} />

        <List name="Edit Profile" desc="Last updated yesterday" icon={<ICEditProfile />} type="next" onPress={() => navigation.navigate('UpdateProfile')} />
        <List name="Language" desc="Available 12 languages" icon={<ICLanguage />} type="next" />
        <List name="Give Us Rate" desc="On Google Play Store" icon={<ICRate />} type="next" />
        <List name="Sign Out" desc="Read our guidelines" icon={<ICHelp />} type="next" onPress={signOut} />

      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
