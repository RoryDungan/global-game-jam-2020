import React from 'react';
import { MessageGroup } from '../';
import { StyledChatlog } from './Chatlog.styles';

export default ({ conversation }) => {
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

