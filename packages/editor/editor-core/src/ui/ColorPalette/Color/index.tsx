import * as React from 'react';
import { PureComponent } from 'react';
import { defineMessages, injectIntl, InjectedIntlProps } from 'react-intl';
import EditorDoneIcon from '@atlaskit/icon/glyph/editor/done';
import { colors } from '@atlaskit/theme';
import { Button, ButtonWrapper } from './styles';
import Tooltip from '@atlaskit/tooltip';
import { hexToRgba, N800, N0 } from '@atlaskit/adf-schema';
// IMO these should live inside @atlaskit/theme
const messages = defineMessages({
  selected: {
    id: 'fabric.editor.selected',
    defaultMessage: 'Selected',
    description: 'If the item is selected or not.',
  },
});

export interface Props {
  value: string;
  label: string;
  tabIndex?: number;
  isSelected?: boolean;
  onClick: (value: string) => void;
  borderColor?: string;
  checkMarkColor?: string;
}

const defaultBorderColor = hexToRgba(N800, 0.12) || N0;

class Color extends PureComponent<Props & InjectedIntlProps> {
  render() {
    const {
      tabIndex,
      value,
      label,
      isSelected,
      borderColor = defaultBorderColor,
      checkMarkColor = colors.N0,
      intl: { formatMessage },
    } = this.props;
    const borderStyle = `1px solid ${borderColor}`;

    return (
      <Tooltip content={label}>
        <ButtonWrapper>
          <Button
            onClick={this.onClick}
            onMouseDown={this.onMouseDown}
            tabIndex={tabIndex}
            className={`${isSelected ? 'selected' : ''}`}
            style={{
              backgroundColor: value || 'transparent',
              border: borderStyle,
            }}
          >
            {isSelected && (
              <EditorDoneIcon
                primaryColor={checkMarkColor}
                label={formatMessage(messages.selected)}
              />
            )}
          </Button>
        </ButtonWrapper>
      </Tooltip>
    );
  }

  onMouseDown = (e: React.MouseEvent<{}>) => {
    e.preventDefault();
  };

  onClick = (e: React.MouseEvent<{}>) => {
    const { onClick, value } = this.props;
    e.preventDefault();
    onClick(value);
  };
}

export default injectIntl(Color);
