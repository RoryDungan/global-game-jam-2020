import React from 'react';

/*
type: 'text' || 'image',
data: {
  message: '',
  image: '',
}
 */

export default ({ message }) => (
  <div>{JSON.stringify(message)}</div>
);
