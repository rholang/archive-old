import { snapshot, initEditorWithAdf, Appearance } from '../_utils';
import adf from './__fixtures__/table-inside-bodied-extension.adf.json';
import {
  insertRow,
  insertColumn,
  clickFirstCell,
} from '../../__helpers/page-objects/_table';
import { Page } from '../../__helpers/page-objects/_types';

describe('Snapshot Test: table insert/delete', () => {
  let page: Page;
  beforeAll(async () => {
    // @ts-ignore
    page = global.page;
  });

  beforeEach(async () => {
    await initEditorWithAdf(page, {
      appearance: Appearance.fullPage,
      adf,
      viewport: { width: 1040, height: 500 },
    });
    await clickFirstCell(page);
  });

  afterEach(async () => {
    await snapshot(page);
  });

  it('should be able to insert row', async () => {
    await insertRow(page, 1);
  });

  it('should be able to insert column', async () => {
    await insertColumn(page, 1, 'left');
  });
});
