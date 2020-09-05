import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';
import IsMe from './IsMe';
import Other from './Other';

const ChatItem = ({
  isMe, content, time, image,
}) => {
  if (isMe === true) {
    return <IsMe content={content} time={time} />;
  }
  return (
    <Other content={content} time={time} image={image} />
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    maxWidth: '70%',
    marginBottom: 20,
  },
  content: {
    padding: 12,
    paddingRight: 13,
    backgroundColor: colors.card.primary,
    borderRadius: 10,

  },
  date: {
    fontFamily: fonts.primary.regular,
    fontSize: 11,
    color: colors.text.grey2,
  },
  message: {
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    fontSize: 14,
  },
});
