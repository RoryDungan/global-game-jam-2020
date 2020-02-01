import React from 'react';
import { MessageBubble } from '../';
import { ChatServerMessageGroup, FriendMessageGroup, SelfMessageGroup } from './MessageGroup.styles';

export default ({ messageGroup }) => {
  switch (messageGroup.sender) {
    case 'friend':
      return <FriendMessageGroup>
        <div style={{ padding: '0.125em', paddingRight: '0.75em' }}>
          {/*<Avatar />*/}
        </div>
        <div>
          {
            messageGroup.messages.map((message, i) => (
              <MessageBubble
                key={i}
                text={message.text}
              />
            ))
          }
        </div>
      </FriendMessageGroup>
    case 'self':
      return <SelfMessageGroup>
        {
          messageGroup.messages.map((message, i) => (
            <MessageBubble
              key={i}
              text={message.text}
              alignRight
            />
          ))
        }
      </SelfMessageGroup>
    case 'chat':
      return <ChatServerMessageGroup>
      {
        messageGroup.messages.map((message, i) => (
          message.text
        ))
      }
      </ChatServerMessageGroup>
    default: return <div></div>;
  }
}
