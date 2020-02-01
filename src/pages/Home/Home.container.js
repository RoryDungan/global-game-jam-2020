import React, { useState, useEffect } from 'react';
import { avatarImage } from '../../assets/images';
import { MUSICS, playMusic } from '../../services/audioService';

export default ({ View, ...props }) => {
  const [chatlog, setChatlog] = useState({
    conversation: [],
  });
  const [otherUser, setOtherUser] = useState({
    username: 'Les',
    avatar: {
      src: avatarImage,
    },
  });

  // useEffect(() => {
  //   playMusic(MUSICS.THEME);
  // }, []);

  return (
    <View {...props} chatlog={chatlog} otherUser={otherUser} />
  );
};
