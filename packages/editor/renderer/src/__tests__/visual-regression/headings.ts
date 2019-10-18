import { snapshot, initRendererWithADF } from './_utils';
import headings from '../__fixtures__/headings-adf.json';
import { waitForTooltip } from '@atlaskit/visual-regression/helper';
import { Page } from 'puppeteer';

const hoverOnHeading = async (page: Page, selector: string) => {
  await page.waitForSelector(selector);
  await page.hover(selector);
  await page.waitForSelector(`${selector} button`);
  await page.hover(`${selector} button`);
  await waitForTooltip(page);
};

describe('Headings:', () => {
  let page: Page;

  beforeEach(async () => {
    // @ts-ignore
    page = global.page;
    await initRendererWithADF(page, {
      adf: headings,
      rendererProps: {
        allowHeadingAnchorLinks: true,
        disableHeadingIDs: false,
      },
      appearance: 'full-page',
    });
  });

  afterEach(async () => {
    await snapshot(page);
  });

  test.each([1, 2, 3, 4, 5, 6])(
    'should render anchor link tooltip for h%s correctly',
    async headingLevel => {
      await hoverOnHeading(page, `h${headingLevel}:first-of-type`);
    },
  );

  it('should render first anchor link in layout correctly', async () => {
    await hoverOnHeading(page, '#Heading-in-layout');
  });

  it('should render second anchor link in layout correctly', async () => {
    await hoverOnHeading(page, '#Heading-in-layout\\.1');
  });
});
