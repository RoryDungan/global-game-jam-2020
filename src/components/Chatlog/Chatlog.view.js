import React from 'react';
import {
  MessageGroup,
  Typing,
} from '../';
import { StyledChatlog } from './Chatlog.styles';

export default ({ conversation, isTyping }) => (
  <StyledChatlog>
    {
      conversation.map((messageGroup, i) => (
        <MessageGroup messageGroup={messageGroup} key={i} />
      ))
    }
    {
      isTyping ? <Typing /> : ''
    }
  </StyledChatlog>
);
