import React from 'react';
import { MessageBubble } from '../';

// export default ({ messages }) => (
//   <div>
//     {
//       messages.map((message, i) => (
//         <MessageBubble message={message} key={i} />
//       ))
//     }
//   </div>
// );

export default ({ messageGroup }) => (
  messageGroup.sender === 'John Doe' ? (
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
          messageGroup.messages.map(message => (
            <MessageBubble
              text={message.text}
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
        messageGroup.messages.map(message => (
          <MessageBubble
            text={message.text}
            alignRight
          />
        ))
      }
    </div>
  )
);
