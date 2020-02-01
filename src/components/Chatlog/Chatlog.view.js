import React from 'react';
import { MessageGroup } from '../';
import { StyledChatlog } from './Chatlog.styles';

export default ({ chatlog }) => {
  console.log('chatlog')
  console.dir(chatlog)

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

  console.dir(conversation)
  return (
    <StyledChatlog>
      {/*<MessageGroup messages={messages} />*/}
      {
        conversation.map(messageGroup => (
          <MessageGroup messageGroup={messageGroup} />
        ))
      }
    </StyledChatlog>
  );
}

