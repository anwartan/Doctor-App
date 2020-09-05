import React, { useState, Suspense } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { showMessage, hideMessage } from 'react-native-flash-message';
import {
  Header, Input, Button, Gap, Loading,
} from '../../components';
import { colors, useForm, storeData } from '../../utils';
import { Fire } from '../../config';

const Register = ({ navigation }) => {
  // const [fullname, setFullname] = useState('');
  // const [pekerjaan, setPekerjaan] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [form, setForm] = useForm({
    fullname: '',
    profession: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);


  const onContinue = () => {
    console.log(form);

    setLoading(true);
    Fire.auth().createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        setLoading(false);
        setForm('reset');

        const data = {
          fullname: form.fullname,
          profession: form.profession,
          email: form.email,
          uid: success.user.uid,
        };

        Fire.database()
          .ref(`users/${success.user.uid}/`)
          .set(data);
        storeData('user', data);
        navigation.navigate('UploadPhoto', data);
      })
      .catch((error) => {
        const errorMessage = error.message;

        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'danger',
          backgroundColor: colors.flash.failed,
          color: colors.text.secondary,

        });
        // Handle Errors here.
      // ...
      });
    // navigation.navigate('UploadPhoto');
  };
  return (
    <>
      <View style={{ flex: 1 }}>
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>

            <Input label="Full Name" value={form.fullname} onChangeText={(value) => { setForm('fullname', value); }} />
            <Gap height={24} />
            <Input label="Pekerjaan" value={form.profession} onChangeText={(value) => { setForm('profession', value); }} />
            <Gap height={24} />
            <Input label="Email Address" value={form.email} onChangeText={(value) => { setForm('email', value); }} />
            <Gap height={24} />
            <Input secureTextEntry label="Password" value={form.password} onChangeText={(value) => { setForm('password', value); }} />
            <Gap height={24} />
            <Button title="Continue" onPress={onContinue} />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>

  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,

    flex: 1,
    backgroundColor: colors.primary,
  },
});
