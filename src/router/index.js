import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Splash, GetStarted, SignIn, Register, UploadPhoto, Doctor, Messages, Hospitals, Chatting,
  UserProfile, UpdateProfile, DoctorProfile,
} from '../pages';
import { BottomNavigator } from '../components';
import ChooseDoctor from '../pages/ChooseDoctor';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => (
  <Tab.Navigator backBehavior="none" tabBar={(props) => <BottomNavigator {...props} />}>
    <Tab.Screen name="Doctor" component={Doctor} />
    <Tab.Screen name="Messages" component={Messages} />
    <Tab.Screen name="Hospitals" component={Hospitals} />

  </Tab.Navigator>
);
const Router = () => (
  <Stack.Navigator headerMode="none" initialRouteName="Splash">
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="GetStarted" component={GetStarted} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
    <Stack.Screen name="MainApp" component={MainApp} />
    <Stack.Screen name="ChooseDoctor" component={ChooseDoctor} />
    <Stack.Screen name="Chatting" component={Chatting} />
    <Stack.Screen name="UserProfile" component={UserProfile} />
    <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
    <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
  </Stack.Navigator>
);

export default Router;
