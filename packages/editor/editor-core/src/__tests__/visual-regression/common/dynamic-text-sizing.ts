import { initFullPageEditorWithAdf, snapshot } from '../_utils';
import dynamicTextExample from './__fixtures__/dynamic-text-adf.json';
import { emojiReadySelector } from '../../__helpers/page-objects/_emoji';
import { waitForLoadedBackgroundImages } from '@atlaskit/visual-regression/helper';

describe('Dynamic Text Sizing', () => {
  let page: any;
  // move this to the test since its used only here
  const dynamicTextViewportSizes = [
    { width: 768, height: 4500 },
    { width: 1024, height: 5000 },
    { width: 1280, height: 5500 },
    { width: 1440, height: 6000 },
  ];
  beforeAll(async () => {
    // @ts-ignore
    page = global.page;
    await initFullPageEditorWithAdf(page, dynamicTextExample);
    await waitForLoadedBackgroundImages(page, emojiReadySelector, 10000);
  });

  for (const viewSize of dynamicTextViewportSizes) {
    it(`should correctly render ${viewSize.width}`, async () => {
      await page.setViewport(viewSize);
      await page.waitFor(1000); // waiting for resize to occur :(
      await snapshot(page);
    });
  }
});
