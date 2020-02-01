import React from 'react';
import {
  MessageGroup,
  Typing,
} from '../';
import { StyledChatlog } from './Chatlog.styles';

export default class Chatlog extends React.Component {
  render() {
    return <StyledChatlog>
      {
        this.props.conversation.map((messageGroup, i) => (
          <MessageGroup messageGroup={messageGroup} key={i} />
        ))
      }
      {
        this.props.isTyping ? <Typing /> : ''
      }
      <div style={{ float:"left", clear: "both" }}
        ref={(el) => { this.messagesEnd = el; }}>
      </div>
    </StyledChatlog>
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }
};
