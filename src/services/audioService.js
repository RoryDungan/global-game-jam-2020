import UIfx from 'uifx'

import {
  hitBottomMessageLog,
  hitTopMessageLog,
  notification,
  receiveMessage,
  selection,
  sendMessage,
} from '../assets/audio';

const sounds = {
  hitBottomMessage:  new UIfx(
    hitBottomMessageLog,
    {
      volume: 0.4,
      throttleMs: 100,
    },
  ),
  hitTopMessage: new UIfx(
    hitTopMessageLog,
    {
      volume: 0.4,
      throttleMs: 100,
    },
  ),
  notification: new UIfx(
    notification,
    {
      volume: 0.4,
      throttleMs: 100,
    },
  ),
  receiveMessage: new UIfx(
    receiveMessage,
    {
      volume: 0.4,
      throttleMs: 100,
    },
  ),
  selection: new UIfx(
    selection,
    {
      volume: 0.4,
      throttleMs: 100,
    },
  ),
  sendMessage: new UIfx(
    sendMessage,
    {
      volume: 0.4,
      throttleMs: 100,
    },
  ),
};

export const SOUNDS = {
  HIT_BOTTOM_MESSAGE: 'hitBottomMessage',
  HIT_TOP_MESSAGE: 'hitTopMessage',
  NOTIFICATION: 'notification',
  RECEIVE_MESSAGE: 'receiveMessage',
  SELECTION: 'selection',
  SEND_MESSAGE: 'sendMessage',
};

export const playSound = sound => {
  sounds[sound].play();
};
