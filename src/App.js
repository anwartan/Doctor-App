import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import { Provider, useSelector } from 'react-redux';
import Router from './router';
import store from './redux/store';
import { Loading } from './components';

const MainApp = () => {
  const stateGlobal = useSelector((state) => state);
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
      {stateGlobal.loading && <Loading />}
    </>
  );
};
const App = () => (
  <Provider store={store}>
    <MainApp />
  </Provider>
);
export default App;
