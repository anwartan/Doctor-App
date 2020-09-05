import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Header, ChatItem, InputChat } from '../../components';
import {
  fonts, colors, getData, showError, getDateChat, setDateChat,
} from '../../utils';
import { ILNullPhoto } from '../../assets';
import { Fire } from '../../config';

const Chatting = ({ navigation, route }) => {
  const { doctorProfile } = route.params;
  console.log(doctorProfile);
  const [content, setContent] = useState('');
  const [user, setUser] = useState({});
  const [chatData, setChatData] = useState([]);
  console.log(user);
  useEffect(() => {
    getData('user').then((res) => {
      setUser(res);
    });
    const chatID = `${user.uid}_${doctorProfile.uid}`;
    const url = `chatting/${chatID}/allChat/`;
    Fire.database().ref(url).on('value', (snap) => {
      if (snap.val()) {
        const dataSnapshot = snap.val();
        const allDataChat = [];
        Object.keys(dataSnapshot).map((item) => {
          const dataChat = dataSnapshot[item];
          const newDataChat = [];
          Object.keys(dataChat).map((itemChat) => {
            newDataChat.push({
              id: itemChat,
              data: dataChat[itemChat],
            });
          });

          allDataChat.push({
            id: item,
            data: newDataChat,
          });
        });
        setChatData(allDataChat);
      }
      console.log(chatData);
    });
  }, [user.uid, doctorProfile.uid]);


  const send = () => {
    const today = new Date();
    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getDateChat(today),
      chatContent: content,
    };
    const chatId = `${user.uid}_${doctorProfile.uid}`;
    const urlFirebase = `chatting/${chatId}/allChat/${setDateChat(today)}`;
    const urlMessage = `messages/${user.uid}/${chatId}`;
    const urlMessageDoctor = `messages/${doctorProfile.uid}/${chatId}`;
    const dataHistoryForUser = {
      lastChatContent: content,
      lastChatDate: today.getTime(),
      uidPartner: doctorProfile.uid,
    };
    const dataHistoryForDoctor = {
      lastChatContent: content,
      lastChatDate: today.getTime(),
      uidPartner: user.uid,
    };
    Fire.database().ref(urlFirebase)
      .push(data)
      .then(() => {
        setContent('');
        Fire.database().ref(urlMessage).set(dataHistoryForUser);
        Fire.database().ref(urlMessageDoctor).set(dataHistoryForDoctor);
      })
      .catch((err) => {
        showError(err);
      });
  };

  const onChangeText = (text) => {
    setContent(text);
  };
  return (
    <View style={{ flex: 1 }}>
      <Header title={doctorProfile.fullName} image={doctorProfile.image || ILNullPhoto} desc={doctorProfile.profession} type="dark-profile" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <ScrollView>
          {
            chatData.map((item) => (
              <View key={item.id}>
                <Text style={styles.chatDate}>{item.id}</Text>
                {item.data.map((itemChat) => {
                  const isMe = itemChat.data.sendBy === user.uid;
                  return (<ChatItem key={itemChat.id} image={isMe ? null : (doctorProfile.image || ILNullPhoto)} content={itemChat.data.chatContent} time={itemChat.data.chatTime} isMe={isMe} />);
                })}
              </View>
            ))
          }

        </ScrollView>
        <InputChat value={content} onChangeText={onChangeText} onButtonPress={send} />
      </View>
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'space-between',
  },
  chatDate: {
    textAlign: 'center',
    fontFamily: fonts.primary.regular,
    fontSize: 12,
    color: colors.text.grey2,
  },
});
