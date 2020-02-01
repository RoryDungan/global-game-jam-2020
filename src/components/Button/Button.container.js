import React from 'react';
import { sendableOptions } from '../../assets/messages';

export default ({ View, optionId, onOptionSelected, ...props }) => {
  console.log('rendering button container, optionId: ', optionId)
  console.dir(sendableOptions)
  return (
    // TODO: support images
    <View
      content={sendableOptions[optionId].message.data.text}
      onClick={() => onOptionSelected(optionId)}
      {...props} />
  );
}
