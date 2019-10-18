import { snapshot, initFullPageEditorWithAdf, Device } from '../_utils';
import complexTableWithMergedCells from './__fixtures__/complex-table-with-merged-cells.adf.json';
import lastColumnMergedTable from './__fixtures__/last-column-merged-table.adf.json';
import tableWithNumberedColumn from './__fixtures__/table-with-numbered-column.adf.json';
import {
  selectRow,
  selectColumn,
  selectTable,
  selectNumberedColumnRow,
  clickFirstCell,
} from '../../__helpers/page-objects/_table';
import { selectors } from '../../__helpers/page-objects/_editor';
import { Page } from '../../__helpers/page-objects/_types';

describe('Snapshot Test: Table selection', () => {
  let page: Page;
  beforeAll(async () => {
    // @ts-ignore
    page = global.page;
  });

  afterEach(async () => {
    await snapshot(page);
  });

  describe('Rows & Columns', () => {
    beforeEach(async () => {
      await initFullPageEditorWithAdf(
        page,
        complexTableWithMergedCells,
        Device.LaptopMDPI,
      );
      await clickFirstCell(page);
    });

    // #region Rows
    it('should be able select the first row', async () => {
      await selectRow(1);
    });

    it('should be able select the fourth row', async () => {
      await selectRow(4);
    });

    it('should be able select the fifth row', async () => {
      await selectRow(5);
    });

    it('should be able select the sixth row', async () => {
      await selectRow(6);
    });

    it('should be able select the seventh row', async () => {
      await selectRow(7);
    });

    it('should be able select multiple rows from a text selection', async () => {
      await selectRow(4, true);
    });

    it('should be able select multiple rows from a cell selection', async () => {
      await selectRow(4);
      await selectRow(6, true);
    });

    it('should be able select multiple rows after direction change', async () => {
      await selectRow(4);
      await selectRow(6, true);
      await selectRow(2, true);
    });
    // #endregion

    // #region Columns
    it('should be able select the first column', async () => {
      await selectColumn(0);
    });

    it('should be able select the second column', async () => {
      await selectColumn(1);
    });

    it('should be able select the third column', async () => {
      await selectColumn(2);
    });

    it('should be able select multiple columns from a text selection', async () => {
      await selectColumn(1, true);
    });

    it('should be able select multiple columns from a cell selection', async () => {
      await selectColumn(1);
      await selectColumn(2, true);
    });

    it('should be able select multiple columns after direction change', async () => {
      await selectColumn(1);
      await selectColumn(2, true);
      await selectColumn(0, true);
    });
    // #endregion

    it('should be able select multiple cells going from row to column', async () => {
      await selectRow(1);
      await selectColumn(1, true);
    });

    it('should be able select multiple cells going from column to row', async () => {
      await selectColumn(1);
      await selectRow(6, true);
    });
  });

  describe('Table', () => {
    beforeEach(async () => {
      // This ADF covers ED-6912
      await initFullPageEditorWithAdf(
        page,
        lastColumnMergedTable,
        Device.LaptopMDPI,
      );
      await clickFirstCell(page);
    });

    it('should be able select the table', async () => {
      await selectTable(page);
    });
  });

  describe('Current selection is outside Table', () => {
    beforeEach(async () => {
      // This ADF covers ED-6912
      await initFullPageEditorWithAdf(
        page,
        tableWithNumberedColumn,
        Device.LaptopMDPI,
      );
    });

    it(`should select the clicked row`, async () => {
      await page.waitForSelector(selectors.lastEditorParagraph);
      await page.click(selectors.lastEditorParagraph);
      await selectNumberedColumnRow(1);
    });

    it(`should select from the clicked row to last row`, async () => {
      await page.waitForSelector(selectors.lastEditorParagraph);
      await page.click(selectors.lastEditorParagraph);
      await selectNumberedColumnRow(1, true);
    });

    it(`should select from the clicked row to last first`, async () => {
      await page.waitForSelector(selectors.firstEditorParagraph);
      await page.click(selectors.firstEditorParagraph);
      await selectNumberedColumnRow(1, true);
    });
  });
});
