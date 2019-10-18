import { snapshot, initEditorWithAdf, Appearance } from '../_utils';
import tableInExtAdf from './__fixtures__/nested-table-inside-bodied-ext.adf.json';
import { Page } from '../../__helpers/page-objects/_types';
import { clickFirstCell } from '../../../__tests__/__helpers/page-objects/_table';
import messages from '../../../messages';
// TODO: https://product-fabric.atlassian.net/browse/ED-7721
describe.skip('Snapshot Test: Nested table inside bodied extension', () => {
  let page: Page;

  const breakoutModes = [
    { name: 'default', label: messages.layoutFixedWidth.defaultMessage },
    { name: 'wide', label: messages.layoutWide.defaultMessage },
    { name: 'full-width', label: messages.layoutFullWidth.defaultMessage },
  ];

  const initEditor = async () => {
    await initEditorWithAdf(page, {
      appearance: Appearance.fullPage,
      adf: tableInExtAdf,
      viewport: { width: 1280, height: 500 },
      editorProps: { allowDynamicTextSizing: true },
    });
  };

  beforeAll(async () => {
    // @ts-ignore
    page = global.page;
  });

  beforeEach(async () => {
    await initEditor();
  });

  afterEach(async () => {
    await snapshot(page);
  });

  describe('resizing table when changing breakout mode', () => {
    breakoutModes.forEach(breakout => {
      it(`should resize when changing to ${breakout.name} layout`, async () => {
        const layoutBtnSelector = `[aria-label="${breakout.label}"]`;
        await page.waitForSelector(layoutBtnSelector);
        await page.click(layoutBtnSelector);
        await clickFirstCell(page);
      });
    });
  });
});
