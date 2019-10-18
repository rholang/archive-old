import { ssr_hydrate } from '@atlaskit/elements-test-helpers';

const ExamplesPath = '../../../../examples';

describe.skip('server side rendering and hydration', () => {
  beforeEach(() => {
    jest.spyOn(global.console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  test.each([
    ['00-picker-and-reactions.tsx'],
    ['01-picker-with-all-emojis-enabled.tsx'],
    ['02-reactions.tsx'],
    ['03-empty-reactions.tsx'],
    ['04-reactions-with-all-emoji-enabled.tsx'],
    ['05-reactions-with-all-emoji-enabled-overflow.tsx'],
    ['07-multiple-reactions.tsx'],
  ])('ssr("%s")', async (fileName: string) => {
    await ssr_hydrate(__dirname, `${ExamplesPath}/${fileName}`);

    // ignore warnings caused by emotion's server-side rendering approach
    // @ts-ignore
    // eslint-disable-next-line no-console
    const mockCalls = console.error.mock.calls.filter(
      ([f, s]: [any, any]) =>
        !(
          f ===
            'Warning: Did not expect server HTML to contain a <%s> in <%s>.' &&
          s === 'style'
        ),
    );

    expect(mockCalls).toHaveLength(0);
  });
});
