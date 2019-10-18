import React from 'react';
import ReactDOM from 'react-dom';
import { getExamplesFor } from '@atlaskit/build-utils/getExamples';
import { ssr } from '@atlaskit/ssr';
import waitForExpect from 'wait-for-expect';

declare var global: any;

jest.spyOn(global.console, 'error');

afterEach(() => {
  jest.resetAllMocks();
});
// TODO: https://ecosystem.atlassian.net/browse/AK-6450
test.skip('should ssr then hydrate checkbox correctly', async () => {
  const [example] = await getExamplesFor('checkbox');
  const Example = require(example.filePath).default; // eslint-disable-line import/no-dynamic-require

  const elem = document.createElement('div');
  elem.innerHTML = await ssr(example.filePath);

  ReactDOM.hydrate(<Example />, elem);
  await waitForExpect(() => {
    expect(console.error).not.toBeCalled(); // eslint-disable-line no-console
  });
});
