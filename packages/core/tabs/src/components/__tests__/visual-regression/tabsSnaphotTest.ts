import {
  getExampleUrl,
  takeScreenShot,
} from '@atlaskit/visual-regression/helper';

declare var global: any;

describe('Snapshot Test', () => {
  it(`Basic example should match prod`, async () => {
    const url = getExampleUrl('core', 'tabs', 'basic', global.__BASEURL__);
    const image = await takeScreenShot(global.page, url);
    expect(image).toMatchProdImageSnapshot();
  });
});
