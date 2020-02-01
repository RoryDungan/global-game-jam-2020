import React from 'react';
import { StyledButton } from './Button.styles';
import { SOUNDS, playSound } from '../../services/audioService';

export default ({ style }) => (
  <StyledButton
    style={style}
    onClick={() => {
      playSound(SOUNDS.SEND_MESSAGE);
    }}
  >
    Testing the average sentence length. you play a character of few words.
  </StyledButton>
);
