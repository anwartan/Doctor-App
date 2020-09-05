import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Header, List,
} from '../../components/molecules';
import { colors } from '../../utils';
import { ILDoctor1, ILNullPhoto } from '../../assets';
import { Fire } from '../../config';

const ChooseDoctor = ({ navigation, route }) => {
  const { itemCategory } = route.params;
  const [list, setList] = useState([]);
  const getDoctorByCategory = (category) => {
    Fire.database().ref('doctors/').orderByChild('category').equalTo(category)
      .once('value')
      .then((res) => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((item) => {
            data.push({
              id: item,
              data: oldData[item],
            });
          });
          setList(data);
        }
      });
  };
  useEffect(() => {
    getDoctorByCategory(itemCategory.kategory);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Header title={`Pilih ${itemCategory.kategory}`} type="dark" onPress={() => navigation.goBack()} />

      <View style={styles.container}>
        {
          list.map((item) => {
            const doctorProfile = {
              uid: item.id,
              ...item.data,
            };
            return (

              <List key={item.id} type="next" image={doctorProfile.image || ILNullPhoto} name={doctorProfile.fullName} desc={doctorProfile.gender} onPress={() => navigation.navigate('DoctorProfile', { doctorProfile })} />
            );
          })
        }

      </View>
    </View>

  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
