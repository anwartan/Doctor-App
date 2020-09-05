import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List } from '../../components';
import { fonts, colors, getData } from '../../utils';
import { Fire } from '../../config';
import { ILNullPhoto } from '../../assets';

const Messages = ({ navigation }) => {
  const [user, setUser] = useState({});
  const [dataMessage, setDataMessage] = useState([]);
  useEffect(() => {
    getData('user').then((res) => {
      setUser(res);
    });

    const root = Fire.database().ref();
    const urlMessage = `messages/${user.uid}/`;
    const messageDB = root.child(urlMessage);

    messageDB.on('value', async (snapshot) => {
      if (snapshot.val()) {
        const oldData = snapshot.val();
        const data = [];
        const promise = await Object.keys(oldData).map(async (item) => {
          const urlIdDoctor = `doctors/${oldData[item].uidPartner}`;
          const detailDoctor = await root.child(urlIdDoctor).once('value');
          data.push({
            id: item,
            detailDoctor: detailDoctor.val(),
            ...oldData[item],
          });
        });
        await Promise.all(promise);
        setDataMessage(data);
      }
    });
  }, [user.uid]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>Messages</Text>
        {
          dataMessage.map((item) => {
            console.log(item.detailDoctor);
            return (
              <List key={item.id} name={item.detailDoctor.fullName} desc={item.lastChatContent} image={ILNullPhoto} onPress={() => navigation.navigate('Chatting', { doctorProfile: item.detailDoctor })} />

            );
          })
        }
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.primary,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,

  },
  title: {
    fontFamily: fonts.primary[500],
    fontSize: 20,
    marginTop: 30,
    marginLeft: 16,
  },
});
