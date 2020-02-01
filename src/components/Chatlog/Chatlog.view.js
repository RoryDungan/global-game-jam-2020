import React from 'react';
import {
  MessageGroup,
  Typing,
} from '../';
import { StyledChatlog } from './Chatlog.styles';

export default ({ conversation }) => (
  <StyledChatlog>
    {
      conversation.map((messageGroup, i) => (
        <MessageGroup messageGroup={messageGroup} key={i} />
      ))
    }
    <Typing />
  </StyledChatlog>
);
