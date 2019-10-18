import { waitForLoadedBackgroundImages } from '@atlaskit/visual-regression/helper';
import { Page } from 'puppeteer';
import { snapshot, initRendererWithADF } from './_utils';
import * as layoutWithDefaultBreakoutMark from '../__fixtures__/layout-default-breakout.adf.json';
import * as layout2Col from '../__fixtures__/layout-2-columns.adf.json';
import * as layout3Col from '../__fixtures__/layout-3-columns.adf.json';
import * as layoutLeftSidebar from '../__fixtures__/layout-left-sidebar.adf.json';
import * as layoutRightSidebar from '../__fixtures__/layout-right-sidebar.adf.json';
import * as layout3ColWithSidebars from '../__fixtures__/layout-3-columns-with-sidebars.adf.json';
import { emojiReadySelector } from '../__helpers/page-objects/_emoji';

const initRenderer = async (page: Page, adf: any) => {
  await initRendererWithADF(page, {
    appearance: 'full-page',
    viewport: { width: 1040, height: 700 },
    adf,
  });
};

describe('Snapshot Test: Layouts', () => {
  let page: Page;

  const layouts = [
    { name: '2 columns', adf: layout2Col },
    { name: '3 columns', adf: layout3Col },
    { name: 'left sidebar', adf: layoutLeftSidebar },
    { name: 'right sidebar', adf: layoutRightSidebar },
    { name: '3 columns with sidebars', adf: layout3ColWithSidebars },
  ];

  beforeAll(() => {
    // @ts-ignore
    page = global.page;
  });

  afterEach(async () => {
    await snapshot(page);
  });

  describe('Columns', () => {
    layouts.forEach(layout => {
      it(`should correctly render "${layout.name}" layout`, async () => {
        await initRenderer(page, layout.adf);
      });
    });
  });

  describe('Breakout Mark', () => {
    it(`should correctly render three column layout with a default breakout mark`, async () => {
      await initRenderer(page, layoutWithDefaultBreakoutMark);
      await waitForLoadedBackgroundImages(page, emojiReadySelector, 10000);
    });
  });
});
