import React from 'react';
import { MessageBubble } from '../';

export default ({ messageGroup }) => (
  messageGroup.sender === 'friend' ? (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        padding: '0.75em',
      }}
    >
      <div style={{ padding: '0.125em', paddingRight: '0.75em' }}>
        {/*<Avatar />*/}
      </div>
      <div>
        {
          messageGroup.messages.map((message, i) => (
            <MessageBubble
              key={i}
              text={message.data.message}
            />
          ))
        }
      </div>
    </div>
  ) : (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: '1em',
      }}
    >
      {
        messageGroup.messages.map((message, i) => (
          <MessageBubble
            key={i}
            text={message.data.message}
            alignRight
          />
        ))
      }
    </div>
  )
);
