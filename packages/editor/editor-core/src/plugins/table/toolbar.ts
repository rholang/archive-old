import { defineMessages } from 'react-intl';
import RemoveIcon from '@atlaskit/icon/glyph/editor/remove';

import commonMessages from '../../messages';
import { FloatingToolbarHandler } from '../floating-toolbar/types';
import { TablePluginState, ColumnResizingPluginState } from './types';
import { pluginKey } from './pm-plugins/main';
import { pluginKey as tableResizingPluginKey } from './pm-plugins/table-resizing/index';
import { hoverTable, clearHoverSelection } from './commands';
import { checkIfNumberColumnEnabled } from './utils';
import {
  toggleHeaderRowWithAnalytics,
  toggleHeaderColumnWithAnalytics,
  toggleNumberColumnWithAnalytics,
  deleteTableWithAnalytics,
} from './commands-with-analytics';

export const messages = defineMessages({
  tableOptions: {
    id: 'fabric.editor.tableOptions',
    defaultMessage: 'Table options',
    description: 'Opens a menu with additional table options',
  },
  headerRow: {
    id: 'fabric.editor.headerRow',
    defaultMessage: 'Header row',
    description: 'Marks the first table row as a header row',
  },
  headerColumn: {
    id: 'fabric.editor.headerColumn',
    defaultMessage: 'Header column',
    description: 'Marks the first table column as a header row',
  },
  numberedColumn: {
    id: 'fabric.editor.numberedColumn',
    defaultMessage: 'Numbered column',
    description: 'Adds an auto-numbering column to your table',
  },
});

export const getToolbarConfig: FloatingToolbarHandler = (
  state,
  { formatMessage },
) => {
  const tableState: TablePluginState | undefined = pluginKey.getState(state);
  const resizeState:
    | ColumnResizingPluginState
    | undefined = tableResizingPluginKey.getState(state);
  if (tableState && tableState.tableRef && tableState.pluginConfig) {
    const { pluginConfig } = tableState;
    return {
      title: 'Table floating controls',
      getDomRef: () => tableState.tableWrapperTarget!,
      nodeType: state.schema.nodes.table,
      offset: [0, 3],
      items: [
        {
          type: 'dropdown',
          title: formatMessage(messages.tableOptions),
          hidden: !(
            pluginConfig.allowHeaderRow && pluginConfig.allowHeaderColumn
          ),
          options: [
            {
              title: formatMessage(messages.headerRow),
              onClick: toggleHeaderRowWithAnalytics(),
              selected: tableState.isHeaderRowEnabled,
              hidden: !pluginConfig.allowHeaderRow,
            },
            {
              title: formatMessage(messages.headerColumn),
              onClick: toggleHeaderColumnWithAnalytics(),
              selected: tableState.isHeaderColumnEnabled,
              hidden: !pluginConfig.allowHeaderColumn,
            },
            {
              title: formatMessage(messages.numberedColumn),
              onClick: toggleNumberColumnWithAnalytics(),
              selected: checkIfNumberColumnEnabled(state),
              hidden: !pluginConfig.allowNumberColumn,
            },
          ],
        },
        {
          type: 'separator',
          hidden: !(
            pluginConfig.allowBackgroundColor &&
            pluginConfig.allowHeaderRow &&
            pluginConfig.allowHeaderColumn &&
            pluginConfig.allowMergeCells
          ),
        },
        {
          type: 'button',
          appearance: 'danger',
          icon: RemoveIcon,
          onClick: deleteTableWithAnalytics(),
          disabled: !!resizeState && !!resizeState.dragging,
          onMouseEnter: hoverTable(true),
          onMouseLeave: clearHoverSelection(),
          title: formatMessage(commonMessages.remove),
        },
      ],
    };
  }
  return;
};
