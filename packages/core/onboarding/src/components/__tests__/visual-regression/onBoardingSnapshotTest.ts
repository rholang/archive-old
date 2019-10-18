import {
  getExampleUrl,
  takeElementScreenShot,
} from '@atlaskit/visual-regression/helper';

const openModalBtn = "[type='button']";
const modalDialog = "[role='dialog']";

describe('Snapshot Test', () => {
  it('Modal Basic example should match production example', async () => {
    const url = getExampleUrl(
      'core',
      'onboarding',
      'modal-basic',
      // @ts-ignore
      global.__BASEURL__,
    );

    // @ts-ignore
    const { page } = global;

    await page.goto(url);
    await page.waitForSelector(openModalBtn);
    await page.click(openModalBtn);
    await page.waitForSelector(modalDialog);
    // We need to wait for the animation to finish.
    await page.waitFor(1000);

    const image = await takeElementScreenShot(page, modalDialog);
    expect(image).toMatchProdImageSnapshot();
  });
});
