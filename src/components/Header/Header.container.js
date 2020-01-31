import React from 'react';

export default ({ View, user: { avatar, username }, ...props }) => (
  <View {...props} avatar={avatar} username={username} />
);
