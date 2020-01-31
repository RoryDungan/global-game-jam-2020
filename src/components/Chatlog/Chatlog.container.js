import React from 'react';

export default ({ View, chatlog: { messages }, ...props }) => (
  <View {...props} messages={messages} />
);
