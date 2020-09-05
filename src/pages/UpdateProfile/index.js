import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import ImagePicker from 'react-native-image-picker';
import {
  Header, Profile, Input, Button, Gap,
} from '../../components';

import {
  colors, getData, useForm, storeData,
} from '../../utils';
import { ILDoctor4, ILNullPhoto } from '../../assets';
import { Fire } from '../../config';

const UpdateProfile = ({ navigation }) => {
  const [profile, setProfile] = useState({
    fullname: '',
    profession: '',
    email: '',
  });
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    getData('user').then((res) => {
      const data = res;

      setPhoto(res.photo ? { uri: res.photo } : ILNullPhoto);
      setProfile(data);
      console.log(profile);
    });
  }, []);

  const getImage = () => {
    ImagePicker.launchImageLibrary({ quality: 0.5, maxWidth: 200, maxHeight: 200 }, (response) => {
      console.log(response);
      const res = response;
      if (res.didCancel || res.error) {
        showMessage({
          message: 'Oops, anda tidak memilih foto ?',
          type: 'default',
          backgroundColor: colors.flash.failed,
          color: colors.text.secondary,
        });
      } else {
        setPhotoForDB(`data:${res.type};base64, ${res.data}`);
        const source = { uri: res.uri };
        setPhoto(source);
      }
    });
  };
  const updatePassword = () => {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        user.updatePassword(password).catch((err) => {
          showMessage({
            message: err.message,
            type: 'default',
            backgroundColor: colors.flash.failed,
            color: colors.text.secondary,
          });
        });
      }
    });
  };

  const updateProfileData = () => {
    const data = profile;
    data.photo = photoForDB;
    Fire.database().ref(`users/${profile.uid}/`)
      .update(data)
      .then((res) => {
        console.log('success');
        storeData('user', data);
      })
      .catch((err) => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.flash.failed,
          color: colors.text.secondary,
        });
      });
  };

  const update = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showMessage({
          message: 'Password kurang dari 6 Karakter',
          type: 'default',
          backgroundColor: colors.flash.failed,
          color: colors.text.secondary,
        });
      } else {
        updatePassword();
        updateProfileData();
        navigation.replace('MainApp');
      }
    } else {
      updateProfileData();
    }
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Profile onPress={getImage} image={photo} editable />
          <Input label="Full Name" value={profile.fullname} onChangeText={(value) => changeText('fullname', value)} />
          <Gap height={24} />
          <Input label="Pekerjaan" value={profile.profession} onChangeText={(value) => changeText('profession', value)} />
          <Gap height={24} />
          <Input label="Email Address" value={profile.email} disable />
          <Gap height={24} />
          <Input label="Password" secureTextEntry value={password} onChangeText={(value) => setPassword(value)} />
          <Gap height={40} />
          <Button title="Save Profile" onPress={update} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 0,
    backgroundColor: colors.primary,
  },
});
