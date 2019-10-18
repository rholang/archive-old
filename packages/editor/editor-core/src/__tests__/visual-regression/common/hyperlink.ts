import { snapshot, initEditorWithAdf, Appearance } from '../_utils';
import { selectors } from '../../__helpers/page-objects/_editor';
import adf from './__fixtures__/hyperlink-adf.json';
import { Page } from '../../__helpers/page-objects/_types';

describe('Hyperlink:', () => {
  let page: Page;

  beforeEach(async () => {
    // @ts-ignore
    page = global.page;
    await initEditorWithAdf(page, {
      appearance: Appearance.fullPage,
      adf,
      viewport: { width: 800, height: 400 },
    });
  });

  afterEach(async () => {
    await snapshot(page);
  });

  describe('heading', () => {
    it('should display the link toolbar', async () => {
      await page.click(`${selectors.editor} > h1 > a`);
    });
  });

  describe('paragraph', () => {
    it('should display the link toolbar', async () => {
      await page.click(`${selectors.editor} > p > a`);
    });
  });

  describe('action item', () => {
    it('should display the link toolbar', async () => {
      await page.click(`${selectors.editor} .taskItemView-content-wrap a`);
    });
  });

  describe('decision item', () => {
    it('should display the link toolbar', async () => {
      await page.click(`${selectors.editor} .decisionItemView-content-wrap a`);
    });
  });
});
