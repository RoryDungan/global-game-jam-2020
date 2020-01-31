import React from 'react';
import { AvatarImage } from './Avatar.styles';

export default ({ image }) => (
  <div>
    <AvatarImage src={image.src} />
  </div>
);
