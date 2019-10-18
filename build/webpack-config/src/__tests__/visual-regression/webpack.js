// @flow
import { takeElementScreenShot } from '@atlaskit/visual-regression/helper';

const app = '#app';
const atlaskitTitle = 'h1[data-testid="title"]';

describe('Webpack Website Snapshot >', () => {
  it('Home page title should match production', async () => {
    const url = global.__BASEURL__;
    const { page } = global;
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.waitForSelector(app);
    await page.setViewport({ width: 1240, height: 1000 });
    await page.waitForSelector(atlaskitTitle);
    const image = await takeElementScreenShot(page, atlaskitTitle);
    // $FlowFixMe
    expect(image).toMatchProdImageSnapshot();
  });
});
