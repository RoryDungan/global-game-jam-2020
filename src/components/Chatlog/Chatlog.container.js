import React from 'react';

export default ({ View, chatlog, ...props }) => (
  <View {...props} chatlog={chatlog} />
);
