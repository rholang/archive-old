import { EditorView } from 'prosemirror-view';
import * as React from 'react';
import { defineMessages, injectIntl, InjectedIntlProps } from 'react-intl';
import styled from 'styled-components';
import ExpandIcon from '@atlaskit/icon/glyph/chevron-down';
import { akEditorMenuZIndex } from '@atlaskit/editor-common';
import { borderRadius, colors } from '@atlaskit/theme';
import { withAnalytics } from '../../../../analytics';
import ToolbarButton from '../../../../ui/ToolbarButton';
import ColorPalette from '../../../../ui/ColorPalette';
import Dropdown from '../../../../ui/Dropdown';
import { TextColorPluginState } from '../../pm-plugins/main';
import * as commands from '../../commands/change-color';
import { EditorTextColorIcon } from './icon';
import {
  Separator,
  TriggerWrapper,
  MenuWrapper,
  ExpandIconWrapper,
} from '../../../../ui/styles';

export const messages = defineMessages({
  textColor: {
    id: 'fabric.editor.textColor',
    defaultMessage: 'Text color',
    description: '',
  },
});

const TextColorIconWrapper = styled.div`
  position: relative;
`;

const TextColorIconBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 16px;
  margin: auto;
  width: 12px;
  height: 3px;
  border-radius: ${borderRadius() + 'px'};

  ${({
    gradientColors,
    selectedColor,
  }: {
    gradientColors: string;
    selectedColor?: string | false | null;
  }) => {
    if (selectedColor) {
      return `background: ${selectedColor}`;
    }
    return `background: ${gradientColors}`;
  }};
`;

const createSteppedRainbow = (colors: string[]) => {
  return `
    linear-gradient(
      to right,
      ${colors
        .map((color, i) => {
          const inc = 100 / colors.length;
          const pos = i + 1;

          if (i === 0) {
            return `${color} ${pos * inc}%,`;
          }

          if (i === colors.length - 1) {
            return `${color} ${(pos - 1) * inc}%`;
          }

          return `
            ${color} ${(pos - 1) * inc}%,
            ${color} ${pos * inc}%,
          `;
        })
        .join('\n')}
    );
    `;
};

const rainbow = createSteppedRainbow([
  colors.P300,
  colors.T300,
  colors.Y400,
  colors.R400,
]);
const disabledRainbow = createSteppedRainbow([
  colors.N80,
  colors.N60,
  colors.N40,
  colors.N60,
]);

export interface State {
  isOpen: boolean;
}

export interface Props {
  pluginState: TextColorPluginState;
  editorView: EditorView;
  popupsMountPoint?: HTMLElement;
  popupsBoundariesElement?: HTMLElement;
  popupsScrollableElement?: HTMLElement;
  isReducedSpacing?: boolean;
}

class ToolbarTextColor extends React.Component<
  Props & InjectedIntlProps,
  State
> {
  state: State = {
    isOpen: false,
  };

  changeColor = (color: string) =>
    commands.changeColor(color)(
      this.props.editorView.state,
      this.props.editorView.dispatch,
    );

  render() {
    const { isOpen } = this.state;
    const {
      popupsMountPoint,
      popupsBoundariesElement,
      popupsScrollableElement,
      isReducedSpacing,
      pluginState,
      intl: { formatMessage },
    } = this.props;

    const labelTextColor = formatMessage(messages.textColor);
    return (
      <MenuWrapper>
        <Dropdown
          mountTo={popupsMountPoint}
          boundariesElement={popupsBoundariesElement}
          scrollableElement={popupsScrollableElement}
          isOpen={isOpen && !pluginState.disabled}
          handleClickOutside={this.hide}
          handleEscapeKeydown={this.hide}
          fitWidth={242}
          fitHeight={80}
          zIndex={akEditorMenuZIndex}
          trigger={
            <ToolbarButton
              spacing={isReducedSpacing ? 'none' : 'default'}
              disabled={pluginState.disabled}
              selected={isOpen}
              title={labelTextColor}
              onClick={this.toggleOpen}
              iconBefore={
                <TriggerWrapper>
                  <TextColorIconWrapper>
                    <EditorTextColorIcon />
                    <TextColorIconBar
                      selectedColor={
                        pluginState.color !== pluginState.defaultColor &&
                        pluginState.color
                      }
                      gradientColors={
                        pluginState.disabled ? disabledRainbow : rainbow
                      }
                    />
                  </TextColorIconWrapper>
                  <ExpandIconWrapper>
                    <ExpandIcon label={labelTextColor} />
                  </ExpandIconWrapper>
                </TriggerWrapper>
              }
            />
          }
        >
          <ColorPalette
            palette={pluginState.palette}
            onClick={color => this.changeTextColor(color, pluginState.disabled)}
            selectedColor={pluginState.color}
          />
        </Dropdown>
        <Separator />
      </MenuWrapper>
    );
  }

  private changeTextColor = withAnalytics(
    'atlassian.editor.format.textcolor.button',
    (color: string, disabled: boolean) => {
      if (!disabled) {
        this.toggleOpen();
        return this.changeColor(color);
      }

      return false;
    },
  );

  private toggleOpen = () => {
    this.handleOpenChange({ isOpen: !this.state.isOpen });
  };

  private handleOpenChange = ({ isOpen }: { isOpen: boolean }) => {
    this.setState({ isOpen });
  };

  private hide = () => {
    if (this.state.isOpen === true) {
      this.setState({ isOpen: false });
    }
  };
}

export default injectIntl(ToolbarTextColor);
