// @flow

import { BrowserTestCase } from '@atlaskit/webdriver-runner/runner';
import { getExampleUrl } from '@atlaskit/webdriver-runner/utils/example';
import Page from '@atlaskit/webdriver-runner/wd-wrapper';

/* Url to test the example */
const urlDrawer = getExampleUrl('core', 'droplist', 'basic-example');

/* Css selectors used for the test */
const droplistButton = 'button[type="button"]';
const droplist = '[data-testid="droplist--content"]';

BrowserTestCase(
  'Droplist should close when Escape key is pressed in IE and Edge But should still work on Chrome',
  { skip: ['safari', 'firefox'] }, // the issue was only occurring in IE and Edge - AK-4523
  async client => {
    const droplistTest = new Page(client);
    await droplistTest.goto(urlDrawer);
    await droplistTest.waitForSelector(droplistButton);
    await droplistTest.click(droplistButton);

    expect(await droplistTest.isExisting(droplist)).toBe(true);
    await droplistTest.keys('Escape');
    if (await droplistTest.isBrowser('internet explorer')) {
      // in IE11, after hitting escape, the element disappears from the DOM and can't be queried.
      try {
        await droplistTest.isExisting(droplist);
      } catch (err) {
        expect(err.toString()).toContain(
          `Error: Unable to find element with css selector == ${droplist}`,
        );
      }
    } else {
      await droplistTest.waitForSelector(droplist, 1000, true);
      expect(await droplistTest.isExisting(droplist)).toBe(false);
      await droplistTest.checkConsoleErrors();
    }
  },
);
