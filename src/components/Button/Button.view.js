import React from 'react';
import { StyledButton } from './Button.styles';
import { SOUNDS, playSound } from '../../services/audioService';

export default ({ content, onClick, style }) => (
  <StyledButton
    style={style}
    onClick={() => {
      playSound(SOUNDS.SEND_MESSAGE);
      onClick();
    }}
  >
    {content}
  </StyledButton>
);
