import React from 'react';
import { Avatar } from '../';
import { HeaderLayout, UsernameText } from './Header.styles';

export default ({ avatar, username }) => (
  <HeaderLayout>
    <Avatar image={avatar} />
    <UsernameText>{username}</UsernameText>
  </HeaderLayout>
);
