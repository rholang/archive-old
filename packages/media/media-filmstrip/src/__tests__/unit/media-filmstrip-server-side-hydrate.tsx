import React from 'react';
import ReactDOM from 'react-dom';
import { getExamplesFor } from '@atlaskit/build-utils/getExamples';
import { ssr, mockConsole } from '@atlaskit/ssr';
import waitForExpect from 'wait-for-expect';

const getConsoleMockCalls = mockConsole(console);

afterEach(() => {
  jest.resetAllMocks();
});

test('should ssr then hydrate media-filmstrip correctly', async () => {
  const [example] = await getExamplesFor('media-filmstrip');
  const Example = require(example.filePath).default;
  const elem = document.createElement('div');
  elem.innerHTML = await ssr(example.filePath);

  await waitForExpect(() => {
    ReactDOM.hydrate(<Example />, elem);
    const mockCalls = getConsoleMockCalls();
    expect(mockCalls.length).toBe(0);
  });
});
