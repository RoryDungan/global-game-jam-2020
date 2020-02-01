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
    acc[acc.length - 1].messages.push({
      text: curr.data.text
    });

    return acc;
  }, []);

  return (
    <View {...props} conversation={conversation} />
  )
};
