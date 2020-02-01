import styled from 'styled-components';

export const FriendMessageGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0.75em;
`;

export const SelfMessageGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 1em;
`;

export const ChatServerMessageGroup = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
  color: rgb(110,110,110);
`;
