import React, { useState, useEffect } from 'react';
import { avatarImage } from '../../assets/images';

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

  useEffect(() => {

  }, [chatlog]);

  return (
    <View {...props} chatlog={chatlog} otherUser={otherUser} />
  );
};
