import {
  getExampleUrl,
  takeScreenShot,
} from '@atlaskit/visual-regression/helper';

describe('Snapshot Test', () => {
  it('Tag group basic should match production example', async () => {
    // @ts-ignore
    const url = getExampleUrl('core', 'tag-group', 'basic', global.__BASEURL__);
    // @ts-ignore
    const image = await takeScreenShot(global.page, url);
    expect(image).toMatchProdImageSnapshot();
  });
});
