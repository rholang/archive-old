import * as React from 'react';
import {
  doc,
  p,
  createEditorFactory,
  mountWithIntl,
  createAnalyticsEventMock,
} from '@atlaskit/editor-test-helpers';
import { AnalyticsHandler } from '../../../../../analytics';
import {
  ListsPluginState,
  pluginKey,
} from '../../../../../plugins/lists/pm-plugins/main';
import { messages } from '../../../../../plugins/lists/messages';
import ToolbarButton from '../../../../../ui/ToolbarButton';
import DropdownMenu from '../../../../../ui/DropdownMenu';
import ToolbarLists from '../../../../../plugins/lists/ui/ToolbarLists';
import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { ReactWrapper } from 'enzyme';

function clickToolbarOption(toolbarOption: ReactWrapper, title: string) {
  toolbarOption
    .find(ToolbarButton)
    .filterWhere(toolbarButton =>
      toolbarButton
        .find('Icon')
        .prop('label')!
        .includes(title),
    )
    .find('button')
    .simulate('click');
}

describe('ToolbarLists', () => {
  const createEditor = createEditorFactory<ListsPluginState>();
  let toolBarListsWrapper: ReactWrapper;
  let createAnalyticsEvent: jest.MockInstance<UIAnalyticsEvent>;
  let analyticsHandler: AnalyticsHandler;

  afterEach(() => {
    if (toolBarListsWrapper) {
      if (toolBarListsWrapper.length > 0) {
        toolBarListsWrapper.unmount();
      }
      toolBarListsWrapper.detach();
    }
  });

  const editor = (doc: any) => {
    createAnalyticsEvent = createAnalyticsEventMock();
    analyticsHandler = jest.fn();
    return createEditor({
      doc,
      editorProps: {
        analyticsHandler,
        allowAnalyticsGASV3: true,
        allowLists: true,
        allowTasksAndDecisions: true,
      },
      pluginKey,
      createAnalyticsEvent: createAnalyticsEvent as any,
    });
  };

  const setup = ({ doc: any = doc(p('text')), ...toolbarProps }: any = {}) => {
    const editorWrapper = editor(doc);
    const toolBarListsWrapper = mountWithIntl(
      <ToolbarLists editorView={editorWrapper.editorView} {...toolbarProps} />,
    );
    return {
      ...editorWrapper,
      toolbarLists: toolBarListsWrapper,
    };
  };

  it('should render disabled ToolbarButtons if disabled property is true', () => {
    const { toolbarLists } = setup({ disabled: true });

    toolbarLists.find(ToolbarButton).forEach(node => {
      expect(node.prop('disabled')).toBe(true);
    });
  });

  it('should have a dropdown if option isSmall = true', () => {
    const { toolbarLists } = setup({ isSmall: true });

    expect(toolbarLists.find(DropdownMenu).length).toEqual(1);
  });

  describe('analytics', () => {
    let toolbarLists: ReactWrapper<any, any, any>;

    beforeEach(() => {
      ({ toolbarLists } = setup());
    });

    it('should trigger analyticsService.trackEvent when bulleted list button is clicked', () => {
      clickToolbarOption(toolbarLists, messages.unorderedList.defaultMessage);

      expect(analyticsHandler).toHaveBeenCalledWith(
        'atlassian.editor.format.list.bullet.button',
      );
    });

    it('should dispatch analytics event when bulleted list button is clicked', () => {
      clickToolbarOption(toolbarLists, messages.unorderedList.defaultMessage);

      expect(createAnalyticsEvent).toHaveBeenCalledWith({
        action: 'formatted',
        actionSubject: 'text',
        eventType: 'track',
        actionSubjectId: 'bulletedList',
        attributes: {
          inputMethod: 'toolbar',
        },
      });
    });

    it('should trigger analyticsService.trackEvent when numbered list button is clicked', () => {
      clickToolbarOption(toolbarLists, messages.orderedList.defaultMessage);

      expect(analyticsHandler).toHaveBeenCalledWith(
        'atlassian.editor.format.list.numbered.button',
      );
    });

    it('should dispatch analytics event when numbered list button is clicked', () => {
      clickToolbarOption(toolbarLists, messages.orderedList.defaultMessage);

      expect(createAnalyticsEvent).toHaveBeenCalledWith({
        action: 'formatted',
        actionSubject: 'text',
        eventType: 'track',
        actionSubjectId: 'numberedList',
        attributes: {
          inputMethod: 'toolbar',
        },
      });
    });
  });
});
