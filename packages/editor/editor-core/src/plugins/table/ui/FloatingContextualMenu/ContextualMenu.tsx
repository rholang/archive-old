import * as React from 'react';
import { Component } from 'react';
import { defineMessages, injectIntl, InjectedIntlProps } from 'react-intl';
import { EditorView } from 'prosemirror-view';
import { splitCell, Rect } from 'prosemirror-tables';
import { colors } from '@atlaskit/theme';
import { canMergeCells } from '../../transforms';
import { getPluginState } from '../../pm-plugins/main';
import {
  hoverMergedCells,
  hoverColumns,
  hoverRows,
  clearHoverSelection,
  toggleContextualMenu,
} from '../../commands';
import { TableCssClassName as ClassName, SortOrder } from '../../types';
import { contextualMenuDropdownWidth } from '../styles';
import { Shortcut } from '../../../../ui/styles';
import DropdownMenu from '../../../../ui/DropdownMenu';
import ColorPalette from '../../../../ui/ColorPalette';
import tableMessages from '../messages';
import { INPUT_METHOD } from '../../../analytics';
import {
  setColorWithAnalytics,
  deleteRowsWithAnalytics,
  deleteColumnsWithAnalytics,
  insertRowWithAnalytics,
  mergeCellsWithAnalytics,
  splitCellWithAnalytics,
  emptyMultipleCellsWithAnalytics,
  insertColumnWithAnalytics,
  sortColumnWithAnalytics,
} from '../../commands-with-analytics';
import { closestElement } from '../../../../utils';
import {
  getMergedCellsPositions,
  getSelectedColumnIndexes,
  getSelectedRowIndexes,
} from '../../utils';
import {
  tooltip,
  addColumnAfter,
  addRowAfter,
  backspace,
} from '../../../../keymaps';
import { DropdownItem } from '../../../block-type/ui/ToolbarBlockType';
import cellBackgroundColorPalette from '../../../../ui/ColorPalette/Palettes/cellBackgroundColorPalette';

export const messages = defineMessages({
  cellBackground: {
    id: 'fabric.editor.cellBackground',
    defaultMessage: 'Cell background',
    description: 'Change the background color of a table cell.',
  },
  mergeCells: {
    id: 'fabric.editor.mergeCells',
    defaultMessage: 'Merge cells',
    description: 'Merge tables cells together.',
  },
  splitCell: {
    id: 'fabric.editor.splitCell',
    defaultMessage: 'Split cell',
    description: 'Split a merged table cell.',
  },
  clearCells: {
    id: 'fabric.editor.clearCells',
    defaultMessage: 'Clear {0, plural, one {cell} other {cells}}',
    description:
      'Clears the contents of the selected cells (this does not delete the cells themselves).',
  },
  sortColumnASC: {
    id: 'fabric.editor.sortColumnASC',
    defaultMessage: 'Sort column A → Z',
    description: 'Sort column in ascending order',
  },
  sortColumnDESC: {
    id: 'fabric.editor.sortColumnDESC',
    defaultMessage: 'Sort column Z → A',
    description: 'Sort column in descending order',
  },
  canNotSortTable: {
    id: 'fabric.editor.canNotSortTable',
    defaultMessage: `⚠️ You can't sort a table with merged cells`,
    description: `Split your cells to enable this feature`,
  },
});

export interface Props {
  editorView: EditorView;
  isOpen: boolean;
  selectionRect: Rect;
  targetCellPosition?: number;
  mountPoint?: HTMLElement;
  allowMergeCells?: boolean;
  allowColumnSorting?: boolean;
  allowBackgroundColor?: boolean;
  boundariesElement?: HTMLElement;
  offset?: Array<number>;
}

export interface State {
  isSubmenuOpen: boolean;
}

class ContextualMenu extends Component<Props & InjectedIntlProps, State> {
  state: State = {
    isSubmenuOpen: false,
  };

  static defaultProps = {
    boundariesElement: document.body,
  };

  render() {
    const { isOpen, mountPoint, offset, boundariesElement } = this.props;
    const items = this.createItems();
    if (!items) {
      return null;
    }

    return (
      <div onMouseLeave={this.closeSubmenu}>
        <DropdownMenu
          mountTo={mountPoint}
          items={items}
          isOpen={isOpen}
          onOpenChange={this.handleOpenChange}
          onItemActivated={this.onMenuItemActivated}
          onMouseEnter={this.handleItemMouseEnter}
          onMouseLeave={this.handleItemMouseLeave}
          fitHeight={188}
          fitWidth={contextualMenuDropdownWidth}
          boundariesElement={boundariesElement}
          offset={offset}
        />
      </div>
    );
  }

  private handleSubMenuRef = (ref: HTMLDivElement | null) => {
    const parent = closestElement(
      this.props.editorView.dom as HTMLElement,
      '.fabric-editor-popup-scroll-parent',
    );
    if (!(parent && ref)) {
      return;
    }
    const boundariesRect = parent.getBoundingClientRect();
    const rect = ref.getBoundingClientRect();
    if (rect.left + rect.width > boundariesRect.width) {
      ref.style.left = `-${rect.width}px`;
    }
  };

  private createItems = () => {
    const {
      allowMergeCells,
      allowColumnSorting,
      allowBackgroundColor,
      editorView: { state },
      targetCellPosition,
      isOpen,
      selectionRect,
      intl: { formatMessage },
    } = this.props;
    const items: any[] = [];
    const { isSubmenuOpen } = this.state;
    if (allowBackgroundColor) {
      const node =
        isOpen && targetCellPosition
          ? state.doc.nodeAt(targetCellPosition)
          : null;
      const background =
        node && node.attrs.background ? node.attrs.background : '#ffffff';
      items.push({
        content: formatMessage(messages.cellBackground),
        value: { name: 'background' },
        elemAfter: (
          <div>
            <div
              className={ClassName.CONTEXTUAL_MENU_ICON}
              style={{ background }}
            />
            {isSubmenuOpen && (
              <div
                className={ClassName.CONTEXTUAL_SUBMENU}
                ref={this.handleSubMenuRef}
              >
                <ColorPalette
                  cols={7}
                  palette={cellBackgroundColorPalette}
                  onClick={this.setColor}
                  selectedColor={background}
                  checkMarkColor={colors.N500}
                />
              </div>
            )}
          </div>
        ),
      });
    }

    items.push({
      content: formatMessage(tableMessages.insertColumn),
      value: { name: 'insert_column' },
      elemAfter: <Shortcut>{tooltip(addColumnAfter)}</Shortcut>,
    });

    items.push({
      content: formatMessage(tableMessages.insertRow),
      value: { name: 'insert_row' },
      elemAfter: <Shortcut>{tooltip(addRowAfter)}</Shortcut>,
    });

    const { top, bottom, right, left } = selectionRect;
    const noOfColumns = right - left;
    const noOfRows = bottom - top;

    items.push({
      content: formatMessage(tableMessages.removeColumns, {
        0: noOfColumns,
      }),
      value: { name: 'delete_column' },
    });

    items.push({
      content: formatMessage(tableMessages.removeRows, {
        0: noOfRows,
      }),
      value: { name: 'delete_row' },
    });

    if (allowMergeCells) {
      items.push({
        content: formatMessage(messages.mergeCells),
        value: { name: 'merge' },
        isDisabled: !canMergeCells(state.tr),
      });
      items.push({
        content: formatMessage(messages.splitCell),
        value: { name: 'split' },
        isDisabled: !splitCell(state),
      });
    }

    if (allowColumnSorting) {
      const hasMergedCellsInTable =
        getMergedCellsPositions(state.tr).length > 0;
      const warning = hasMergedCellsInTable
        ? {
            tooltipDescription: formatMessage(messages.canNotSortTable),
            isDisabled: true,
          }
        : {};

      items.push({
        content: formatMessage(messages.sortColumnASC),
        value: { name: 'sort_column_asc' },
        ...warning,
      });

      items.push({
        content: formatMessage(messages.sortColumnDESC),
        value: { name: 'sort_column_desc' },
        ...warning,
      });
    }

    items.push({
      content: formatMessage(messages.clearCells, {
        0: Math.max(noOfColumns, noOfRows),
      }),
      value: { name: 'clear' },
      elemAfter: <Shortcut>{tooltip(backspace)}</Shortcut>,
    });

    return items.length ? [{ items }] : null;
  };

  private onMenuItemActivated = ({ item }: { item: DropdownItem }) => {
    const { editorView, selectionRect, targetCellPosition } = this.props;
    const { state, dispatch } = editorView;

    switch (item.value.name) {
      case 'sort_column_desc':
        sortColumnWithAnalytics(
          INPUT_METHOD.CONTEXT_MENU,
          selectionRect.left,
          SortOrder.DESC,
        )(state, dispatch);
        this.toggleOpen();
        break;
      case 'sort_column_asc':
        sortColumnWithAnalytics(
          INPUT_METHOD.CONTEXT_MENU,
          selectionRect.left,
          SortOrder.ASC,
        )(state, dispatch);
        this.toggleOpen();
        break;
      case 'merge':
        mergeCellsWithAnalytics()(state, dispatch);
        this.toggleOpen();
        break;
      case 'split':
        splitCellWithAnalytics()(state, dispatch);
        this.toggleOpen();
        break;
      case 'clear':
        emptyMultipleCellsWithAnalytics(
          INPUT_METHOD.CONTEXT_MENU,
          targetCellPosition,
        )(state, dispatch);
        this.toggleOpen();
        break;
      case 'insert_column':
        insertColumnWithAnalytics(
          INPUT_METHOD.CONTEXT_MENU,
          selectionRect.right,
        )(state, dispatch);
        this.toggleOpen();
        break;
      case 'insert_row':
        insertRowWithAnalytics(INPUT_METHOD.CONTEXT_MENU, selectionRect.bottom)(
          state,
          dispatch,
        );
        this.toggleOpen();
        break;
      case 'delete_column':
        deleteColumnsWithAnalytics(INPUT_METHOD.CONTEXT_MENU, selectionRect)(
          state,
          dispatch,
        );
        this.toggleOpen();
        break;
      case 'delete_row':
        const {
          pluginConfig: { isHeaderRowRequired },
        } = getPluginState(state);

        deleteRowsWithAnalytics(
          INPUT_METHOD.CONTEXT_MENU,
          selectionRect,
          !!isHeaderRowRequired,
        )(state, dispatch);
        this.toggleOpen();
        break;
    }
  };

  private toggleOpen = () => {
    const {
      isOpen,
      editorView: { state, dispatch },
    } = this.props;
    toggleContextualMenu()(state, dispatch);
    if (!isOpen) {
      this.setState({
        isSubmenuOpen: false,
      });
    }
  };

  private handleOpenChange = () => {
    const {
      editorView: { state, dispatch },
    } = this.props;
    toggleContextualMenu()(state, dispatch);
    this.setState({ isSubmenuOpen: false });
  };

  private handleItemMouseEnter = ({ item }: { item: any }) => {
    const {
      editorView: { state, dispatch },
      selectionRect,
    } = this.props;

    if (item.value.name === 'background') {
      if (!this.state.isSubmenuOpen) {
        this.setState({ isSubmenuOpen: true });
      }
    }

    if (item.value.name === 'delete_column') {
      hoverColumns(getSelectedColumnIndexes(selectionRect), true)(
        state,
        dispatch,
      );
    }

    if (item.value.name === 'delete_row') {
      hoverRows(getSelectedRowIndexes(selectionRect), true)(state, dispatch);
    }

    if (
      ['sort_column_asc', 'sort_column_desc'].indexOf(item.value.name) > -1 &&
      getMergedCellsPositions(state.tr).length !== 0
    ) {
      hoverMergedCells()(state, dispatch);
    }
  };

  private handleItemMouseLeave = ({ item }: { item: any }) => {
    const { state, dispatch } = this.props.editorView;
    if (item.value.name === 'background') {
      this.closeSubmenu();
    }
    if (
      [
        'sort_column_asc',
        'sort_column_desc',
        'delete_column',
        'delete_row',
      ].indexOf(item.value.name) > -1
    ) {
      clearHoverSelection()(state, dispatch);
    }
  };

  private closeSubmenu = () => {
    if (this.state.isSubmenuOpen) {
      this.setState({ isSubmenuOpen: false });
    }
  };

  private setColor = (color: string) => {
    const { targetCellPosition, editorView } = this.props;
    const { state, dispatch } = editorView;
    setColorWithAnalytics(color, targetCellPosition)(state, dispatch);
    this.toggleOpen();
  };
}

export default injectIntl(ContextualMenu);
