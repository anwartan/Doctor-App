import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Gap } from '../../components/atoms';
import {
  DoctorCategory, HomeProfile, NewsItem, RatedDoctor,
} from '../../components/molecules';
import { Fire } from '../../config';
import { colors, fonts, showError } from '../../utils';

const Doctor = ({ navigation }) => {
  const [news, setNews] = useState([]);
  const [kategory, setKategory] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const parseArray = (listObject) => {
    const data = [];
    Object.keys(listObject).map((key) => {
      data.push({
        id: key,
        data: listObject[key],
      });
    });
    return data;
  };
  const getNews = () => {
    Fire.database().ref('news/').once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter((x) => x !== null);
          setNews(filterData);
        }
      })
      .catch((err) => showError(err.message));
  };
  const getCategory = () => {
    Fire.database().ref('kategory_dokter/').once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter((x) => x !== null);
          setKategory(filterData);
        }
      })
      .catch((err) => showError(err.message));
  };

  const getDoctor = () => {
    Fire.database().ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val();
          setDoctors(parseArray(data));
        }
      })
      .catch((err) => showError(err.message));
  };
  useEffect(() => {
    getNews();
    getCategory();
    getDoctor();
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={20} />
          <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
          <Gap height={30} />
          <Text style={styles.welcome}>
            Mau konsultasi dengan siapa hari ini?
          </Text>
          <Gap height={16} />
          <View style={styles.wrapperScroll}>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.sectionDoctor}>
                <Gap width={16} />
                {kategory.map((item) => (
                  <DoctorCategory key={item.id} onPress={() => navigation.navigate('ChooseDoctor', { itemCategory: item })} type={item.kategory} />

                ))}

                <Gap width={6} />
              </View>
            </ScrollView>
          </View>
          <Text style={styles.sectionTitle}>
            Top Rated Doctors
          </Text>
          <Gap height={10} />
          <View>
            {
              doctors.map((item) => {
                const doctorProfile = {
                  id: item.id,
                  ...item.data,
                };
                return (
                  <RatedDoctor
                    rate={item.data.rate}
                    key={item.id}
                    name={item.data.fullName}
                    proffesion={item.data.profession}
                    image={{ uri: item.data.photo }}
                    onPress={() => navigation.navigate('DoctorProfile', { doctorProfile })}
                  />

                );
              })
            }

          </View>
          <Gap height={14} />
          <Text style={styles.sectionTitle}>
            Good News
          </Text>

          {news.map((item) => (
            <NewsItem key={item.id} title={item.title} date={item.date} image={item.image} />
          ))}

        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  welcome: {
    fontFamily: fonts.primary[500],
    fontSize: 20,
    width: 220,
    color: colors.text.primary,
  },
  sectionTitle: {
    fontFamily: fonts.primary[500],
    fontSize: 16,
    color: colors.text.primary,
  },
  sectionDoctor: {
    flexDirection: 'row',
    marginHorizontal: 0,

  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  content: {
    backgroundColor: colors.primary,
    flex: 1,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    paddingHorizontal: 16,
    paddingBottom: 30,
  },

});
