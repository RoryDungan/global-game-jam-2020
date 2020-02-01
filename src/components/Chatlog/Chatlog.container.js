import React from 'react';

export default ({ View, chatlog, ...props }) => {
  const conversation = chatlog.reduce((acc, curr) => {
    if (acc.length <= 0 || acc[acc.length - 1].sender !== curr.sender) {
      acc.push({
        sender: curr.sender,
        messages: []
      });
    }

    // TODO: handle images
    const text = curr.data.text;
    if (text) {
      acc[acc.length - 1].messages.push({ text });
    }

    return acc;
  }, []);

  return (
    <View {...props} conversation={conversation} />
  )
};
