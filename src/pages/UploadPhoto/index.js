import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import {
  Header, Button, Link, Gap,
} from '../../components';
import { colors, fonts, storeData } from '../../utils';
import { ILNullPhoto, ICPlus, ICRemove } from '../../assets';
import { Fire } from '../../config';

const UploadPhoto = ({ navigation, route }) => {
  const { fullname, profession, uid } = route.params;
  const [photoForDB, setPhotoForDB] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
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
        setHasPhoto(true);
      }
    });
  };
  const uploadAndContinue = () => {
    Fire.database()
      .ref(`users/${uid}/`)
      .update({ photo: photoForDB });

    const data = route.params;
    data.photo = photoForDB;
    storeData('user', data);
    navigation.replace('MainApp');
  };
  return (
    <View style={{ flex: 1 }}>
      <Header title="Upload Photo" icon="back-dark" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.profile}>

          <TouchableOpacity onPress={getImage} style={styles.wrapperImage}>
            <Image source={photo} style={{ width: 110, height: 110, borderRadius: 110 / 2 }} />
            { !hasPhoto && <ICPlus style={styles.icon} />}
            {hasPhoto && <ICRemove style={styles.icon} />}
          </TouchableOpacity>
          <Gap height={26} />
          <Text style={styles.name}>{fullname}</Text>
          <Text style={styles.profession}>{profession}</Text>
        </View>
        <View>
          <Button disable={!hasPhoto} title="Upload and Continue" onPress={uploadAndContinue} />
          <Gap height={30} />
          <Link align="center" title="Skip for this" size={16} onPress={() => navigation.replace('MainApp')} />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingBottom: 64,
    justifyContent: 'space-between',
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperImage: {

    width: 130,
    height: 130,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.image.border,
    borderRadius: 130 / 2,
  },
  name: {
    fontFamily: fonts.primary[500],
    fontSize: 24,
    color: colors.text.primary,
    textAlign: 'center',
  },
  profession: {
    fontFamily: fonts.primary[400],
    fontSize: 18,
    color: colors.text.grey2,
    textAlign: 'center',

  },
  icon: {
    position: 'absolute', bottom: 0, right: 0,
  },
});
