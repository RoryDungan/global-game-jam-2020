import React from 'react';
import { MessageGroup } from '../';
import { StyledChatlog } from './Chatlog.styles';

const data = {
  conversation: [
    {
      sender: 'James Addison',
      messages: [
        {
          text: 'Hey, how\'ve you been??',
        },
      ],
    },
    {
      sender: 'John Doe',
      messages: [
        {
          text: 'Great! It\'s been such a long time!!! How are you??',
        },
      ],
    },
    {
      sender: 'James Addison',
      messages: [
        {
          text: 'It has!',
        },
        {
          text: 'I\'ve been okay, pretty stressed out from work, huge crunch time...',
        },
        {
          text: 'What about you?',
        },
      ],
    },
  ],
};

export default ({ messages }) => (
  <StyledChatlog>
    {/*<MessageGroup messages={messages} />*/}
    {
      data.conversation.map(messageGroup => (
        <MessageGroup messageGroup={messageGroup} />
      ))
    }
  </StyledChatlog>
);

