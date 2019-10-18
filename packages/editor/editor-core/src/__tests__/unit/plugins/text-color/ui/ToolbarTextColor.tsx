import * as React from 'react';
import {
  doc,
  code_block,
  p,
  createEditorFactory,
  mountWithIntl,
  createAnalyticsEventMock,
} from '@atlaskit/editor-test-helpers';
import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { ReactWrapper } from 'enzyme';

import {
  TextColorPluginState,
  pluginKey,
} from '../../../../../plugins/text-color/pm-plugins/main';
import Color from '../../../../../ui/ColorPalette/Color';
import ToolbarButton from '../../../../../ui/ToolbarButton';
import ToolbarTextColor, {
  Props as ToolbarTextColorProps,
} from '../../../../../plugins/text-color/ui/ToolbarTextColor';
import { AnalyticsHandler } from '../../../../../analytics';
import { PaletteColor } from '../../../../../ui/ColorPalette/Palettes/type';

/**
 * Simulate a click color
 * @param toolbarTextColor ToolbarTextColor enzyme wrapper
 * @param color
 */
function clickColor(
  toolbarTextColor: ReactWrapper<ToolbarTextColorProps>,
  color?: { hexCode: string } | null,
) {
  if (!color) {
    return;
  }

  toolbarTextColor.find('button').simulate('click');

  toolbarTextColor
    .find(`ColorPalette Color`)
    .filterWhere(n => n.prop('value') === color.hexCode)
    .find('button')
    .simulate('click');
}

/**
 * Get a color information from a palette of color
 *
 * @param {Map<string, string>} palette
 * @param {number} position
 * @returns Color information
 */
function getColorFromPalette(palette: PaletteColor[], position: number) {
  if (palette.length === 0 || palette.length < position) {
    return null;
  }

  const { value, label } = palette[position];

  return {
    hexCode: value,
    label,
  };
}

describe('ToolbarTextColor', () => {
  const createEditor = createEditorFactory<TextColorPluginState>();
  let createAnalyticsEvent: jest.MockInstance<UIAnalyticsEvent>;
  let analyticsHandler: jest.MockInstance<AnalyticsHandler>;
  let toolbarTextColor: ReactWrapper<ToolbarTextColorProps>;

  const editor = (doc: any) => {
    createAnalyticsEvent = createAnalyticsEventMock();
    analyticsHandler = jest.fn();
    return createEditor({
      doc,
      editorProps: {
        analyticsHandler: analyticsHandler as any,
        allowAnalyticsGASV3: true,
        allowTextColor: true,
        allowCodeBlocks: true,
      },
      pluginKey,
      createAnalyticsEvent: createAnalyticsEvent as any,
    });
  };

  afterEach(() => {
    if (toolbarTextColor && typeof toolbarTextColor.unmount === 'function') {
      toolbarTextColor.unmount();
    }
  });

  describe('inside a valid node', () => {
    let pluginState: TextColorPluginState;

    beforeEach(() => {
      const { editorView } = editor(doc(p('text')));
      pluginState = pluginKey.getState(editorView.state);
      toolbarTextColor = mountWithIntl(
        <ToolbarTextColor pluginState={pluginState} editorView={editorView} />,
      );
    });

    it('should sets disabled to false', () => {
      expect(toolbarTextColor.prop('pluginState').disabled).toBe(false);
    });

    it('should initialize with isOpen false', () => {
      expect(toolbarTextColor.state('isOpen')).toBe(false);
    });

    it('should make isOpen true when toolbar textColor button is clicked', () => {
      toolbarTextColor.find('button').simulate('click');

      expect(toolbarTextColor.state('isOpen')).toBe(true);
    });

    it('should make isOpen false when a color is clicked', () => {
      clickColor(toolbarTextColor, getColorFromPalette(pluginState.palette, 1)); // click on second color from palette

      expect(toolbarTextColor.state('isOpen')).toBe(false);
    });

    it('should make isOpen false when toolbar textColor button is clicked again', () => {
      toolbarTextColor.find('button').simulate('click');
      toolbarTextColor
        .find('button')
        .at(0)
        .simulate('click');

      expect(toolbarTextColor.state('isOpen')).toBe(false);
    });

    it('should have Color components as much as size of color palette', () => {
      toolbarTextColor.find('button').simulate('click');

      expect(toolbarTextColor.find(Color).length).toEqual(
        pluginState.palette.length,
      );
    });

    describe('analytics', () => {
      it('should trigger analyticsService.trackEvent when a color is clicked', () => {
        const color = getColorFromPalette(pluginState.palette, 1);

        clickColor(toolbarTextColor, color);

        expect(analyticsHandler).toHaveBeenCalledWith(
          'atlassian.editor.format.textcolor.button',
        );
      });

      it('should create analytics event when color change', () => {
        const defaultColor = getColorFromPalette(pluginState.palette, 0);
        const color = getColorFromPalette(pluginState.palette, 1); // Get not default (0) color

        clickColor(toolbarTextColor, color);

        expect(createAnalyticsEvent).toHaveBeenCalledWith({
          action: 'formatted',
          actionSubject: 'text',
          actionSubjectId: 'color',
          eventType: 'track',
          attributes: {
            newColor: color!.label.toLowerCase(),
            previousColor: defaultColor!.label.toLowerCase(),
          },
        });
      });
    });
  });

  describe('inside an invalid node', () => {
    beforeEach(() => {
      const { editorView } = editor(doc(code_block()('text')));
      const pluginState = pluginKey.getState(editorView.state);
      toolbarTextColor = mountWithIntl(
        <ToolbarTextColor pluginState={pluginState} editorView={editorView} />,
      );
    });

    it('sets disabled to true', () => {
      expect(toolbarTextColor.prop('pluginState').disabled).toBe(true);
    });

    it('should render disabled ToolbarButton', () => {
      expect(toolbarTextColor.find(ToolbarButton).prop('disabled')).toBe(true);
    });
  });
});
