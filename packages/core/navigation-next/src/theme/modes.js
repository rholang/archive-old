// @flow

import { N0, B500, DN500, DN10, N800 } from '@atlaskit/theme/colors';

import modeGenerator from './modeGenerator';

export const light = modeGenerator({
  product: {
    text: N0,
    background: B500,
  },
});

export const dark = modeGenerator({
  product: {
    text: DN500,
    background: DN10,
  },
});

export const settings = modeGenerator({
  product: {
    text: N0,
    background: N800,
  },
});
