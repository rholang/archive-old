import { Page } from '../../__helpers/page-objects/_types';
import { initEditorWithAdf, Appearance, snapshot, pmSelector } from '../_utils';
import { helpDialogSelector } from '../../__helpers/page-objects/_help-dialog';

describe('Help Dialog', () => {
  it('displays help dialog', async () => {
    // @ts-ignore
    const page: Page = global.page;
    await initEditorWithAdf(page, {
      appearance: Appearance.fullPage,
      viewport: { width: 800, height: 1400 },
    });
    await page.click(pmSelector);
    await page.keyboard.down('Control');
    await page.keyboard.down('/');
    await page.waitForSelector(helpDialogSelector);
    await snapshot(page, undefined, helpDialogSelector);
  });
});
