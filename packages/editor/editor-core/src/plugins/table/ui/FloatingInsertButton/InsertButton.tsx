import * as React from 'react';
import { SyntheticEvent } from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { akEditorTableNumberColumnWidth } from '@atlaskit/editor-common';
import Tooltip from '@atlaskit/tooltip';
import { TableCssClassName as ClassName } from '../../types';
import { tableToolbarSize } from '../styles';
import tableMessages from '../messages';
import { closestElement } from '../../../../utils';
import * as keymaps from '../../../../keymaps';

export interface ButtonProps {
  type: 'row' | 'column';
  tableRef: HTMLElement;
  onMouseDown: (event: SyntheticEvent<HTMLButtonElement>) => void;
}

const getInsertLineHeight = (tableRef: HTMLElement) => {
  // The line gets height 100% from the table,
  // but since we have an overflow on the left,
  // we should add an offset to make up for it.
  const LINE_OFFSET = 3;
  return tableRef.offsetHeight + tableToolbarSize + LINE_OFFSET;
};

const getToolbarSize = (tableRef: HTMLElement): number => {
  const parent = closestElement(tableRef, `.${ClassName.TABLE_CONTAINER}`);
  if (parent) {
    return parent.querySelector(`.${ClassName.NUMBERED_COLUMN}`)
      ? tableToolbarSize + akEditorTableNumberColumnWidth - 1
      : tableToolbarSize;
  }

  return tableToolbarSize;
};

const getInsertLineWidth = (tableRef: HTMLElement) => {
  // The line gets width 100% from the table,
  // but since we have an overflow on the left,
  // we should add an offset to make up for it.
  const LINE_OFFSET = 4;
  const { parentElement, offsetWidth } = tableRef;
  const parentOffsetWidth = parentElement!.offsetWidth;
  const { scrollLeft } = parentElement!;
  const diff = offsetWidth - parentOffsetWidth;
  const toolbarSize = getToolbarSize(tableRef);
  return (
    Math.min(
      offsetWidth + toolbarSize,
      parentOffsetWidth + toolbarSize - Math.max(scrollLeft - diff, 0),
    ) + LINE_OFFSET
  );
};

const tooltipMessageByType = (type: string) => {
  return type === 'row' ? tableMessages.insertRow : tableMessages.insertColumn;
};

const InsertButton = ({
  onMouseDown,
  tableRef,
  type,
  intl: { formatMessage },
}: ButtonProps & InjectedIntlProps) => {
  const content = (
    <Tooltip
      content={keymaps.renderTooltipContent(
        formatMessage(tooltipMessageByType(type)),
        type === 'row' ? keymaps.addRowAfter : keymaps.addColumnAfter,
      )}
      position="top"
    >
      <>
        <div className={ClassName.CONTROLS_INSERT_BUTTON_INNER}>
          <button
            type="button"
            className={ClassName.CONTROLS_INSERT_BUTTON}
            onMouseDown={onMouseDown}
          >
            <svg className={ClassName.CONTROLS_BUTTON_ICON}>
              <path
                d="M10 4a1 1 0 0 1 1 1v4h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H5a1 1 0 1 1 0-2h4V5a1 1 0 0 1 1-1z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className={ClassName.CONTROLS_INSERT_LINE}
          style={
            type === 'row'
              ? { width: getInsertLineWidth(tableRef) }
              : { height: getInsertLineHeight(tableRef) }
          }
        />
      </>
    </Tooltip>
  );

  const floatingButtonClassName =
    type === 'column'
      ? ClassName.CONTROLS_FLOATING_BUTTON_COLUMN
      : ClassName.CONTROLS_FLOATING_BUTTON_ROW;

  return (
    <div className={floatingButtonClassName}>
      <div
        className={`${ClassName.CONTROLS_INSERT_BUTTON_WRAP} ${
          ClassName.CONTROLS_INSERT_ROW
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default injectIntl(InsertButton);
