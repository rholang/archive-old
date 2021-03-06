import { __assign, __extends } from "tslib";
import * as React from 'react';
import { calcTableWidth, WidthConsumer, TableSharedCssClassName, akEditorTableNumberColumnWidth, akEditorWideLayoutWidth, akEditorDefaultLayoutWidth, akEditorFullWidthLayoutWidth, akEditorTableLegacyCellMinWidth, tableCellBorderWidth, tableCellMinWidth, overflowShadow, getBreakpoint, mapBreakpointToLayoutMaxWidth, createCompareNodes, SortOrder, convertProsemirrorTableNodeToArrayOfRows, hasMergedCell, compose, } from '@atlaskit/editor-common';
import { FullPagePadding } from '../../ui/Renderer/style';
import { TableHeader } from './tableCell';
import { withSmartCardStorage, } from '../../ui/SmartCardStorage';
var orderChildren = function (children, tableNode, smartCardStorage, tableOrderStatus) {
    if (!tableOrderStatus || tableOrderStatus.order === SortOrder.NO_ORDER) {
        return children;
    }
    var compareNodes = createCompareNodes({
        getInlineCardTextFromStore: function (attrs) {
            var url = attrs.url;
            if (!url) {
                return null;
            }
            return smartCardStorage.get(url) || null;
        },
    });
    var order = tableOrderStatus.order, columnIndex = tableOrderStatus.columnIndex;
    var tableArray = convertProsemirrorTableNodeToArrayOfRows(tableNode);
    var tableArrayWithChildren = tableArray.map(function (rowNodes, index) { return ({ rowNodes: rowNodes, rowReact: children[index] }); });
    var headerRow = tableArrayWithChildren.shift();
    var sortedTable = tableArrayWithChildren.sort(function (rowA, rowB) {
        return (order === SortOrder.DESC ? -1 : 1) *
            compareNodes(rowA.rowNodes[columnIndex], rowB.rowNodes[columnIndex]);
    });
    if (headerRow) {
        sortedTable.unshift(headerRow);
    }
    return sortedTable.map(function (elem) { return elem.rowReact; });
};
var addSortableColumn = function (rows, tableOrderStatus, onSorting) {
    return React.Children.map(rows, function (row, index) {
        if (index === 0) {
            return React.cloneElement(React.Children.only(row), {
                tableOrderStatus: tableOrderStatus,
                onSorting: onSorting,
            });
        }
        return row;
    });
};
// we allow scaling down column widths by no more than 15%
var MAX_SCALING_PERCENT = 0.15;
export var calcScalePercent = function (_a) {
    var renderWidth = _a.renderWidth, tableWidth = _a.tableWidth, maxScale = _a.maxScale;
    var diffPercent = 1 - renderWidth / tableWidth;
    return diffPercent < maxScale ? diffPercent : maxScale;
};
var isHeaderRowEnabled = function (rows) {
    if (!rows.length) {
        return false;
    }
    var children = rows[0].props.children;
    if (!children.length) {
        return false;
    }
    if (children.length === 1) {
        return children[0].type === TableHeader;
    }
    return children.every(function (node) { return node.type === TableHeader; });
};
var getTableLayoutWidth = function (layout, opts) {
    switch (layout) {
        case 'full-width':
            return akEditorFullWidthLayoutWidth;
        case 'wide':
            return akEditorWideLayoutWidth;
        default:
            if (opts && opts.isDynamicTextSizingEnabled && opts.containerWidth) {
                return mapBreakpointToLayoutMaxWidth(getBreakpoint(opts.containerWidth));
            }
            return akEditorDefaultLayoutWidth;
    }
};
var isTableResized = function (columnWidths) {
    var filteredWidths = columnWidths.filter(function (width) { return width !== 0; });
    return !!filteredWidths.length;
};
var fixColumnWidth = function (columnWidth, _tableWidth, _layoutWidth, zeroWidthColumnsCount, scaleDownPercent) {
    if (columnWidth === 0) {
        return columnWidth;
    }
    // If the tables total width (including no zero widths col or cols without width) is less than the current layout
    // We scale up the columns to meet the minimum of the table layout.
    if (zeroWidthColumnsCount === 0 && scaleDownPercent) {
        return Math.floor((1 - scaleDownPercent) * columnWidth);
    }
    return Math.max(
    // We need to take tableCellBorderWidth, to avoid unneccesary overflow.
    columnWidth - tableCellBorderWidth, zeroWidthColumnsCount ? akEditorTableLegacyCellMinWidth : tableCellMinWidth);
};
var TableContainer = /** @class */ (function (_super) {
    __extends(TableContainer, _super);
    function TableContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            tableOrderStatus: undefined,
        };
        _this.addNumberColumnIndexes = function (rows) {
            var isNumberColumnEnabled = _this.props.isNumberColumnEnabled;
            var headerRowEnabled = isHeaderRowEnabled(rows);
            return React.Children.map(rows, function (row, index) {
                return React.cloneElement(React.Children.only(row), {
                    isNumberColumnEnabled: isNumberColumnEnabled,
                    index: headerRowEnabled ? (index === 0 ? '' : index) : index + 1,
                });
            });
        };
        _this.addSortableColumn = function (childrenArray) {
            var _a = _this.props, tableNode = _a.tableNode, allowColumnSorting = _a.allowColumnSorting, smartCardStorage = _a.smartCardStorage;
            var tableOrderStatus = _this.state.tableOrderStatus;
            if (allowColumnSorting &&
                isHeaderRowEnabled(childrenArray) &&
                tableNode &&
                !hasMergedCell(tableNode)) {
                return addSortableColumn(orderChildren(childrenArray, tableNode, smartCardStorage, tableOrderStatus), tableOrderStatus, _this.changeSortOrder);
            }
            return childrenArray;
        };
        _this.changeSortOrder = function (columnIndex, sortOrder) {
            _this.setState({
                tableOrderStatus: {
                    columnIndex: columnIndex,
                    order: sortOrder,
                },
            });
        };
        _this.renderColgroup = function () {
            var _a = _this.props, columnWidths = _a.columnWidths, layout = _a.layout, isNumberColumnEnabled = _a.isNumberColumnEnabled, renderWidth = _a.renderWidth, allowDynamicTextSizing = _a.allowDynamicTextSizing;
            if (!columnWidths || !isTableResized(columnWidths)) {
                return null;
            }
            // @see ED-6056
            var layoutWidth = getTableLayoutWidth(layout, {
                isDynamicTextSizingEnabled: allowDynamicTextSizing,
                containerWidth: renderWidth,
            });
            var maxTableWidth = renderWidth < layoutWidth ? renderWidth : layoutWidth;
            // If table has a layout of default, it is confined by the defined column width.
            // renderWidth is better used for breakout tables.
            // @see ED-6737
            if (layout === 'default') {
                renderWidth = Math.min(renderWidth, layoutWidth);
            }
            var tableWidth = isNumberColumnEnabled ? akEditorTableNumberColumnWidth : 0;
            var minTableWidth = tableWidth;
            var zeroWidthColumnsCount = 0;
            columnWidths.forEach(function (width) {
                if (width) {
                    tableWidth += Math.ceil(width);
                }
                else {
                    zeroWidthColumnsCount += 1;
                }
                minTableWidth += Math.ceil(width) || akEditorTableLegacyCellMinWidth;
            });
            var cellMinWidth = 0;
            var scaleDownPercent = 0;
            // fixes migration tables with zero-width columns
            if (zeroWidthColumnsCount > 0) {
                if (minTableWidth > maxTableWidth) {
                    var minWidth = Math.ceil((maxTableWidth - tableWidth) / zeroWidthColumnsCount);
                    cellMinWidth =
                        minWidth < akEditorTableLegacyCellMinWidth
                            ? akEditorTableLegacyCellMinWidth
                            : minWidth;
                }
            }
            // scaling down
            else if (renderWidth < tableWidth) {
                scaleDownPercent = calcScalePercent({
                    renderWidth: renderWidth,
                    tableWidth: tableWidth,
                    maxScale: MAX_SCALING_PERCENT,
                });
            }
            return (React.createElement("colgroup", null,
                isNumberColumnEnabled && (React.createElement("col", { style: { width: akEditorTableNumberColumnWidth } })),
                columnWidths.map(function (colWidth, idx) {
                    var width = fixColumnWidth(colWidth, minTableWidth, maxTableWidth, zeroWidthColumnsCount, scaleDownPercent) || cellMinWidth;
                    var style = width ? { width: width + "px" } : {};
                    return React.createElement("col", { key: idx, style: style });
                })));
        };
        return _this;
    }
    TableContainer.prototype.render = function () {
        var _a = this.props, isNumberColumnEnabled = _a.isNumberColumnEnabled, layout = _a.layout, renderWidth = _a.renderWidth, children = _a.children;
        if (!children) {
            return null;
        }
        var childrenArray = React.Children.toArray(children);
        return (React.createElement("div", { className: TableSharedCssClassName.TABLE_CONTAINER + " " + this.props.shadowClassNames, "data-layout": layout, ref: this.props.handleRef, style: { width: calcTableWidth(layout, renderWidth, false) } },
            React.createElement("div", { className: TableSharedCssClassName.TABLE_NODE_WRAPPER },
                React.createElement("table", { "data-number-column": isNumberColumnEnabled },
                    this.renderColgroup(),
                    React.createElement("tbody", null, compose(this.addNumberColumnIndexes, this.addSortableColumn)(childrenArray))))));
    };
    return TableContainer;
}(React.Component));
export { TableContainer };
var TableWithShadows = overflowShadow(TableContainer, {
    overflowSelector: "." + TableSharedCssClassName.TABLE_NODE_WRAPPER,
});
var TableWithWidth = function (props) { return (React.createElement(WidthConsumer, null, function (_a) {
    var width = _a.width;
    var renderWidth = props.rendererAppearance === 'full-page'
        ? width - FullPagePadding * 2
        : width;
    return React.createElement(TableWithShadows, __assign({ renderWidth: renderWidth }, props));
})); };
export default withSmartCardStorage(TableWithWidth);
//# sourceMappingURL=table.js.map