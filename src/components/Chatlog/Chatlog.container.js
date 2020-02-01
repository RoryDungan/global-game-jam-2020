import React from 'react';

const defaultConversation = [
  {
    sender: 'me',
    type: 'text',
    timestamp: Date.now(),
    data: {
      message: 'Hey, how\'ve you been??',
    },
  },
  {
    sender: 'friend',
    type: 'text',
    timestamp: Date.now(),
    data: {
      message: 'Great! It\'s been such a long time!!! How are you??',
    },
  },
  {
    sender: 'me',
    type: 'text',
    timestamp: Date.now(),
    data: {
      message: 'it has!',
    },
  },
  {
    sender: 'me',
    type: 'text',
    timestamp: Date.now(),
    data: {
      message: 'I\'ve been okay, pretty stressed out from work, huge crunch time...',
    },
  },
  {
    sender: 'me',
    type: 'text',
    timestamp: Date.now(),
    data: {
      message: 'What about you?',
    },
  },
];

const toMessageGroupsDto = conversation => {
  const messageGroup = [];
  conversation.forEach(message => {
    if (messageGroup.length === 0 || messageGroup[messageGroup.length - 1].sender !== message.sender) {
      messageGroup.push({
          sender: message.sender,
          messages: [
            {
              type: message.type,
              timestamp: message.timestamp,
              data: JSON.parse(JSON.stringify(message.data)),
            },
          ],
        },
      );
    } else {
      messageGroup[messageGroup.length - 1].messages.push({
        type: message.type,
        timestamp: message.timestamp,
        data: JSON.parse(JSON.stringify(message.data)),
      })
    }
  });
  return messageGroup;
};

export default ({ View, chatlog: { conversation }, ...props }) => {
  const messageGroupsDto = toMessageGroupsDto(defaultConversation);
  return (
    <View {...props} messageGroups={messageGroupsDto} />
  );
};
