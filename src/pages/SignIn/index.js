import React from 'react';
import {
  ScrollView, StyleSheet, Text, View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { ICLogo } from '../../assets';
import {
  Button, Gap, Input, Link,
} from '../../components/atoms';
import { Fire } from '../../config';
import {
  colors, fonts, showError, storeData, useForm,
} from '../../utils';

const SignIn = ({ navigation }) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',

  });
  const dispatch = useDispatch();

  const signIn = () => {
    dispatch({ type: 'SET_LOADING', value: true });

    Fire.auth().signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((resDB) => {
            if (resDB.val()) {
              storeData('user', resDB.val());
              dispatch({ type: 'SET_LOADING', value: false });
              navigation.replace('MainApp');
            }
          });
      })
      .catch((err) => {
        dispatch({ type: 'SET_LOADING', value: false });
        showError(err.message);
      });
  };
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.container}>
          <ICLogo />
          <Gap height={40} />
          <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
          <Gap height={40} />
          <Input label="Email Address" value={form.email} onChangeText={(value) => setForm('email', value)} />
          <Gap height={24} />
          <Input label="Password" secureTextEntry value={form.password} onChangeText={(value) => setForm('password', value)} />
          <Gap height={10} />
          <Link title="Forget My Password" size={12} />
          <Gap height={40} />
          <Button title="Sign In" onPress={signIn} />
          <Gap height={30} />

          <Link title="Create New Account" align="center" size={16} onPress={() => navigation.navigate('Register')} />
        </View>
      </ScrollView>
    </>

  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 40,
  },
  title: {
    fontFamily: fonts.primary[500],
    fontSize: 20,
    width: 160,
  },
});
