import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ILNullPhoto } from '../../assets';
import { Button } from '../../components/atoms';
import { Header, Profile, ProfileItem } from '../../components/molecules';
import { colors } from '../../utils';

const DoctorProfile = ({ route, navigation }) => {
  const { doctorProfile } = route.params;
  console.log(route.params);
  return (
    <View style={{ flex: 1 }}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View>

          <Profile image={doctorProfile.image || ILNullPhoto} name={doctorProfile.fullName} proffesion={doctorProfile.category} />
          <ProfileItem label="Alumnus" content={doctorProfile.university} />
          <ProfileItem label="Tempat Praktik" content={doctorProfile.hospital_address} />
          <ProfileItem label="No. STR" content={doctorProfile.str_number} />
        </View>
        <View style={{ padding: 40 }}>

          <Button title="Start Consultation" onPress={() => navigation.navigate('Chatting', { doctorProfile })} />
        </View>
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'space-between',
  },
});
