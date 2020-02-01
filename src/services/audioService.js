import UIfx from 'uifx';
import { HowlerSoundController } from 'howler-sound-controller';

import {
  hitBottomMessageLog,
  hitTopMessageLog,
  notification,
  receiveMessage,
  selection,
  sendMessage,
  // themeSong,
  themeSong2,
} from '../assets/audio';

const sounds = {
  hitBottomMessage:  new UIfx(
    hitBottomMessageLog,
    {
      volume: 1,
      throttleMs: 100,
    },
  ),
  hitTopMessage: new UIfx(
    hitTopMessageLog,
    {
      volume: 1,
      throttleMs: 100,
    },
  ),
  notification: new UIfx(
    notification,
    {
      volume: 1,
      throttleMs: 100,
    },
  ),
  receiveMessage: new UIfx(
    receiveMessage,
    {
      volume: 1,
      throttleMs: 100,
    },
  ),
  selection: new UIfx(
    selection,
    {
      volume: 1,
      throttleMs: 100,
    },
  ),
  sendMessage: new UIfx(
    sendMessage,
    {
      volume: 1,
      throttleMs: 100,
    },
  ),
};

// const musics = {
//   themeSong: new UIfx(
//     themeSong,
//     {
//       volume: 0.4,
//       throttleMs: 100,
//     },
//   ),
// };

export const SOUNDS = {
  HIT_BOTTOM_MESSAGE: 'hitBottomMessage',
  HIT_TOP_MESSAGE: 'hitTopMessage',
  NOTIFICATION: 'notification',
  RECEIVE_MESSAGE: 'receiveMessage',
  SELECTION: 'selection',
  SEND_MESSAGE: 'sendMessage',
};

export const MUSICS = {
  THEME: 'themeSong',
  THEME2: 'themeSong2',
};

export const playSound = sound => {
  sounds[sound].play();
};

// export const playMusic = music => {
//   musics[music].play();
// };

const controller = HowlerSoundController;
const loader = controller.getLoader();

loader
  .add('themeSong2', { src: [themeSong2], volume: 0.2 });

loader.once('loaded', () => {
  controller.playBackground('themeSong2');
});

loader.load();
