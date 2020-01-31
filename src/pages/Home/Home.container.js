import React, { useState } from 'react';
import { avatarImage } from '../../assets/images';

export default ({ View, ...props }) => {
  const [chatlog, setChatlog] = useState({
    messages: [{
      type: 'text',
      data: {
        text: 'Hey there!',
      },
    }],
  });
  const [otherUser, setOtherUser] = useState({
    username: 'Les',
    avatar: {
      src: avatarImage,
    },
  });

  return (
    <View {...props} chatlog={chatlog} otherUser={otherUser} />
  );
};
