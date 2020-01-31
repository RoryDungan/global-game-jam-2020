import React from 'react';
import { MessageBubble } from '../';

export default ({ messages }) => (
  <div>
    {
      messages.map((message, i) => (
        <MessageBubble message={message} key={i} />
      ))
    }
  </div>
);
