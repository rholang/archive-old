import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import FabricAnalyticsListeners, {
  AnalyticsWebClient,
} from '@atlaskit/analytics-listeners';
import { analyticsClient } from '@atlaskit/editor-test-helpers/src/analytics-client-mock';
import { doc, p, a, b, heading, text } from '@atlaskit/adf-utils';
import { EDITOR_APPEARANCE_CONTEXT } from '@atlaskit/analytics-namespaced-context';
import Renderer, {
  Renderer as BaseRenderer,
  Props,
} from '../../../ui/Renderer';
import { RendererAppearance } from '../../../ui/Renderer/types';

const initialDoc = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'Hello!',
        },
      ],
    },
  ],
};

const invalidDoc = {
  type: 'doc',
  content: 'foo',
};

const validDoc = doc(
  heading({ level: 1 })(text('test')),
  p(
    a({ href: 'https://www.atlassian.com' })('Hello, '),
    a({ href: 'https://www.atlassian.com' })(b('World!')),
  ),
);

describe('@atlaskit/renderer/ui/Renderer', () => {
  let renderer: ReactWrapper;

  const initRenderer = (doc: any = initialDoc, props: Partial<Props> = {}) =>
    mount(<Renderer document={doc} {...props} />);

  afterEach(() => {
    if (renderer && renderer.length === 1) {
      renderer.unmount();
    }
  });

  it('should re-render when appearance changes', () => {
    renderer = initRenderer();
    const renderSpy = jest.spyOn(
      renderer.find(BaseRenderer).instance() as any,
      'render',
    );
    renderer.setProps({ appearance: 'full-width' });
    renderer.setProps({ appearance: 'full-page' });
    expect(renderSpy).toHaveBeenCalledTimes(2);
  });

  it('should catch errors and render unsupported content text', () => {
    renderer = initRenderer(invalidDoc);
    expect(renderer.find('UnsupportedBlockNode')).toHaveLength(1);
  });

  it('should call onError callback when catch error', () => {
    const onError = jest.fn();
    renderer = initRenderer(invalidDoc, { onError });
    expect(onError).toHaveBeenCalled();
  });

  describe('Stage0', () => {
    const docWithStage0Mark = {
      type: 'doc',
      version: 1,
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Hello World',
              marks: [
                {
                  type: 'confluenceInlineComment',
                  attrs: {
                    reference: 'ref',
                  },
                },
              ],
            },
          ],
        },
      ],
    };

    it('should remove stage0 marks if flag is not explicitly set to "stage0"', () => {
      renderer = initRenderer(docWithStage0Mark);
      expect(renderer.find('ConfluenceInlineComment')).toHaveLength(0);
    });

    it('should keep stage0 marks if flag is explicitly set to "stage0"', () => {
      renderer = initRenderer(docWithStage0Mark, { adfStage: 'stage0' });
      expect(renderer.find('ConfluenceInlineComment')).toHaveLength(1);
    });
  });

  describe('Truncated Renderer', () => {
    it('should truncate to 95px when truncated prop is true and maxHeight is undefined', () => {
      renderer = initRenderer(initialDoc, { truncated: true });

      expect(renderer.find('TruncatedWrapper')).toHaveLength(1);

      const wrapper = renderer.find('TruncatedWrapper').childAt(0);
      expect(wrapper.props().height).toEqual(95);
    });

    it('should truncate to custom height when truncated prop is true and maxHeight is defined', () => {
      renderer = initRenderer(initialDoc, { truncated: true, maxHeight: 100 });
      expect(renderer.find('TruncatedWrapper')).toHaveLength(1);
      expect(renderer.find('TruncatedWrapper').props().height).toEqual(100);
    });

    it("shouldn't truncate when truncated prop is undefined and maxHeight is defined", () => {
      renderer = initRenderer(initialDoc, { maxHeight: 100 });
      expect(renderer.find('TruncatedWrapper')).toHaveLength(0);
    });

    it("shouldn't truncate when truncated prop is undefined and maxHeight is undefined", () => {
      renderer = initRenderer();
      expect(renderer.find('TruncatedWrapper')).toHaveLength(0);
    });
  });

  describe('Analytics', () => {
    let client: AnalyticsWebClient;

    const initRendererWithAnalytics = (props: Partial<Props> = {}) =>
      mount(
        <FabricAnalyticsListeners client={client}>
          <Renderer document={initialDoc} {...props} />
        </FabricAnalyticsListeners>,
      );

    beforeEach(() => {
      client = analyticsClient();
      jest.useFakeTimers();
      jest
        .spyOn(window, 'requestAnimationFrame')
        .mockImplementation((fn: Function) => fn());
    });

    afterEach(() => {
      (window.requestAnimationFrame as jest.Mock).mockRestore();
      jest.useRealTimers();
    });

    it('should fire heading anchor hit analytics event', () => {
      const oldHash = window.location.hash;
      window.location.hash = '#test';

      renderer = mount(
        <FabricAnalyticsListeners client={client}>
          <Renderer document={validDoc} />
        </FabricAnalyticsListeners>,
        {
          attachTo: document.body,
        },
      );

      jest.runAllTimers();

      expect(client.sendUIEvent).toHaveBeenCalledWith(
        expect.objectContaining({
          action: 'viewed',
          actionSubject: 'anchorLink',
          attributes: expect.objectContaining({
            platform: 'web',
            mode: 'renderer',
          }),
        }),
      );

      renderer.detach();
      window.location.hash = oldHash;
    });

    it('should fire analytics event on renderer started', () => {
      renderer = initRendererWithAnalytics();

      expect(client.sendUIEvent).toHaveBeenCalledWith(
        expect.objectContaining({
          action: 'started',
          actionSubject: 'renderer',
          attributes: expect.objectContaining({ platform: 'web' }),
        }),
      );
    });

    const appearances: {
      appearance: RendererAppearance;
      analyticsAppearance: EDITOR_APPEARANCE_CONTEXT;
    }[] = [
      {
        appearance: 'full-page',
        analyticsAppearance: EDITOR_APPEARANCE_CONTEXT.FIXED_WIDTH,
      },
      {
        appearance: 'comment',
        analyticsAppearance: EDITOR_APPEARANCE_CONTEXT.COMMENT,
      },
      {
        appearance: 'full-width',
        analyticsAppearance: EDITOR_APPEARANCE_CONTEXT.FULL_WIDTH,
      },
    ];
    appearances.forEach(appearance => {
      it(`adds appearance to analytics events for ${
        appearance.appearance
      } renderer`, () => {
        renderer = initRendererWithAnalytics({
          appearance: appearance.appearance,
        });

        expect(client.sendUIEvent).toHaveBeenCalledWith(
          expect.objectContaining({
            attributes: expect.objectContaining({
              appearance: appearance.analyticsAppearance,
            }),
          }),
        );
      });
    });
  });
});
