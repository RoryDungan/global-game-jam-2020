import React from 'react';
import { StyledOptionsLayout } from './OptionsLayout.styles';
import { Button } from '../';

export default ({options, onOptionSelected}) => {
  console.log('rendering OptionsLayoutView')
  console.dir(options)
  return options.length >= 2
    ? <StyledOptionsLayout>
      <Button optionId={options[0]} onOptionSelected={onOptionSelected} style={{ marginBottom: '0.5em' }} />
      <Button optionId={options[1]} onOptionSelected={onOptionSelected} style={{ marginTop: '0.5em' }} />
    </StyledOptionsLayout>
  : <StyledOptionsLayout></StyledOptionsLayout>
}
