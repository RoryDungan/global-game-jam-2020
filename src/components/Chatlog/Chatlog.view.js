import React from 'react';
import { MessageGroup } from '../';
import { StyledChatlog } from './Chatlog.styles';

export default ({ messageGroups }) => (
  <StyledChatlog>
    {
      messageGroups.map((messageGroup, i) => (
        <MessageGroup messageGroup={messageGroup} key={i} />
      ))
    }
  </StyledChatlog>
);

