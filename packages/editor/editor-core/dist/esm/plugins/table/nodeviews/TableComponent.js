import { __assign, __extends } from "tslib";
import * as React from 'react';
import rafSchedule from 'raf-schd';
import { isTableSelected } from 'prosemirror-utils';
import { browser, calcTableWidth, akEditorMobileBreakoutPoint, } from '@atlaskit/editor-common';
import TableFloatingControls from '../ui/TableFloatingControls';
import { getPluginState } from '../pm-plugins/main';
import { scaleTable } from '../pm-plugins/table-resizing';
import { getLayoutSize, insertColgroupFromNode as recreateResizeColsByNode, updateControls, } from '../pm-plugins/table-resizing/utils';
import { TableCssClassName as ClassName, } from '../types';
import classnames from 'classnames';
var isIE11 = browser.ie_version === 11;
import { containsHeaderRow, tablesHaveDifferentColumnWidths, tablesHaveDifferentNoOfColumns, } from '../utils';
import { autoSizeTable } from '../commands';
import { getParentNodeWidth } from '../../../utils/node-width';
var TableComponent = /** @class */ (function (_super) {
    __extends(TableComponent, _super);
    function TableComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            scroll: 0,
            tableContainerWidth: 'inherit',
            parentWidth: undefined,
        };
        _this.handleScroll = function (event) {
            if (!_this.wrapper || event.target !== _this.wrapper) {
                return;
            }
            _this.setState({ scroll: _this.wrapper.scrollLeft });
        };
        _this.handleTableResizing = function () {
            var _a = _this.props, node = _a.node, containerWidth = _a.containerWidth, options = _a.options;
            var prevNode = _this.node;
            var prevAttrs = prevNode.attrs;
            // We only consider a layout change valid if it's done outside of an autoSize.
            var layoutChanged = prevAttrs.layout !== node.attrs.layout &&
                prevAttrs.__autoSize === node.attrs.__autoSize;
            var parentWidth = _this.getParentNodeWidth();
            var parentWidthChanged = parentWidth && parentWidth !== _this.state.parentWidth;
            var layoutSize = _this.tableNodeLayoutSize(node, containerWidth.width, options);
            if (
            // Breakout mode/layout changed
            layoutChanged ||
                // We need to react if our parent changes
                // Scales the cols widths relative to the new parent width.
                parentWidthChanged ||
                // Enabling / disabling this feature reduces or adds size to the table.
                prevAttrs.isNumberColumnEnabled !== node.attrs.isNumberColumnEnabled ||
                // Adding or removing columns from the table, should snap the remaining / new columns to the layout width.
                tablesHaveDifferentNoOfColumns(node, prevNode) ||
                // This last check is also to cater for dynamic text sizing changing the 'default' layout width
                // Usually happens on window resize.
                layoutSize !== _this.layoutSize) {
                _this.scaleTable({ parentWidth: parentWidth, layoutChanged: layoutChanged });
                _this.updateParentWidth(parentWidth);
            }
            _this.updateTableContainerWidth();
            _this.node = node;
            _this.containerWidth = containerWidth;
            _this.layoutSize = layoutSize;
        };
        _this.scaleTable = function (scaleOptions) {
            var _a = _this.props, view = _a.view, node = _a.node, getPos = _a.getPos, containerWidth = _a.containerWidth, options = _a.options;
            var state = view.state, dispatch = view.dispatch;
            var domAtPos = view.domAtPos.bind(view);
            var width = containerWidth.width;
            if (_this.frameId && window) {
                window.cancelAnimationFrame(_this.frameId);
            }
            scaleTable(_this.table, __assign(__assign(__assign({}, scaleOptions), { node: node, prevNode: _this.node || node, start: getPos() + 1, containerWidth: width, previousContainerWidth: _this.containerWidth.width || width }), options), domAtPos)(state, dispatch);
        };
        _this.handleAutoSize = function () {
            if (_this.table) {
                var _a = _this.props, view = _a.view, node = _a.node, getPos = _a.getPos, options = _a.options, containerWidth = _a.containerWidth;
                autoSizeTable(view, node, _this.table, getPos(), {
                    dynamicTextSizing: (options && options.dynamicTextSizing) || false,
                    containerWidth: containerWidth.width,
                });
            }
        };
        _this.handleWindowResize = function () {
            var _a = _this.props, node = _a.node, containerWidth = _a.containerWidth;
            var layoutSize = _this.tableNodeLayoutSize(node);
            if (containerWidth.width > layoutSize) {
                return;
            }
            var parentWidth = _this.getParentNodeWidth();
            _this.frameId = _this.scaleTableDebounced(parentWidth);
        };
        _this.updateTableContainerWidth = function () {
            var _a = _this.props, node = _a.node, containerWidth = _a.containerWidth, options = _a.options;
            if (options && options.isBreakoutEnabled === false) {
                return;
            }
            _this.setState(function (prevState) {
                var tableContainerWidth = calcTableWidth(node.attrs.layout, containerWidth.width);
                if (options &&
                    options.isBreakoutEnabled === false &&
                    prevState.tableContainerWidth !== 'inherit') {
                    return { tableContainerWidth: 'inherit' };
                }
                if (prevState.tableContainerWidth === tableContainerWidth) {
                    return null;
                }
                return {
                    tableContainerWidth: tableContainerWidth,
                };
            });
        };
        _this.getParentNodeWidth = function () {
            return getParentNodeWidth(_this.props.getPos(), _this.props.view.state, _this.props.containerWidth, _this.props.options && _this.props.options.isFullWidthModeEnabled);
        };
        _this.updateParentWidth = function (width) {
            _this.setState({ parentWidth: width });
        };
        _this.tableNodeLayoutSize = function (node, containerWidth, options) {
            return getLayoutSize(node.attrs.layout, containerWidth || _this.props.containerWidth.width, options || _this.props.options || {});
        };
        _this.scaleTableDebounced = rafSchedule(_this.scaleTable);
        _this.handleTableResizingDebounced = rafSchedule(_this.handleTableResizing);
        _this.handleScrollDebounced = rafSchedule(_this.handleScroll);
        _this.handleAutoSizeDebounced = rafSchedule(_this.handleAutoSize);
        _this.handleWindowResizeDebounced = rafSchedule(_this.handleWindowResize);
        var options = props.options, containerWidth = props.containerWidth, node = props.node;
        _this.node = node;
        _this.containerWidth = containerWidth;
        // store table size using previous full-width mode so can detect if it has changed
        var dynamicTextSizing = options ? options.dynamicTextSizing : false;
        var isFullWidthModeEnabled = options
            ? options.wasFullWidthModeEnabled
            : false;
        _this.layoutSize = _this.tableNodeLayoutSize(node, containerWidth.width, {
            dynamicTextSizing: dynamicTextSizing,
            isFullWidthModeEnabled: isFullWidthModeEnabled,
        });
        // Disable inline table editing and resizing controls in Firefox
        // https://github.com/ProseMirror/prosemirror/issues/432
        if ('execCommand' in document) {
            ['enableObjectResizing', 'enableInlineTableEditing'].forEach(function (cmd) {
                if (document.queryCommandSupported(cmd)) {
                    document.execCommand(cmd, false, 'false');
                }
            });
        }
        return _this;
    }
    TableComponent.prototype.componentDidMount = function () {
        var allowColumnResizing = this.props.allowColumnResizing;
        if (allowColumnResizing && this.wrapper && !isIE11) {
            this.wrapper.addEventListener('scroll', this.handleScrollDebounced);
        }
        if (allowColumnResizing) {
            /**
             * We no longer use `containerWidth` as a variable to determine an update for table resizing (avoids unnecessary updates).
             * Instead we use the resize event to only trigger updates when necessary.
             */
            window.addEventListener('resize', this.handleWindowResizeDebounced);
            this.updateTableContainerWidth();
            this.frameId = this.handleTableResizingDebounced(this.props);
        }
    };
    TableComponent.prototype.componentWillUnmount = function () {
        if (this.wrapper && !isIE11) {
            this.wrapper.removeEventListener('scroll', this.handleScrollDebounced);
        }
        this.handleScrollDebounced.cancel();
        if (this.props.allowColumnResizing) {
            window.removeEventListener('resize', this.handleWindowResizeDebounced);
        }
        if (this.frameId && window) {
            window.cancelAnimationFrame(this.frameId);
        }
    };
    TableComponent.prototype.componentDidUpdate = function (prevProps) {
        updateOverflowShadows(this.wrapper, this.table, this.rightShadow, this.leftShadow);
        if (this.props.node.attrs.__autoSize) {
            // Wait for next tick to handle auto sizing, gives the browser time to do layout calc etc.
            this.handleAutoSizeDebounced();
        }
        else if (this.props.allowColumnResizing && this.table) {
            // If col widths (e.g. via collab) or number of columns (e.g. delete a column) have changed,
            // re-draw colgroup.
            if (tablesHaveDifferentColumnWidths(this.props.node, prevProps.node) ||
                tablesHaveDifferentNoOfColumns(this.props.node, prevProps.node)) {
                var view = this.props.view;
                recreateResizeColsByNode(this.table, this.props.node);
                updateControls(view.state);
            }
            this.frameId = this.handleTableResizingDebounced(prevProps);
        }
    };
    TableComponent.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, view = _b.view, node = _b.node, pluginState = _b.pluginState, tableResizingPluginState = _b.tableResizingPluginState, width = _b.width;
        var _c = pluginState.pluginConfig.allowControls, allowControls = _c === void 0 ? true : _c;
        // doesn't work well with WithPluginState
        var _d = getPluginState(view.state), isInDanger = _d.isInDanger, hoveredRows = _d.hoveredRows;
        var tableRef = this.table || undefined;
        var tableActive = this.table === pluginState.tableRef;
        var isResizing = !!tableResizingPluginState && !!tableResizingPluginState.dragging;
        var rowControls = [
            React.createElement("div", { key: 0, className: ClassName.ROW_CONTROLS_WRAPPER },
                React.createElement(TableFloatingControls, { editorView: view, tableRef: tableRef, tableActive: tableActive, hoveredRows: hoveredRows, isInDanger: isInDanger, isResizing: isResizing, isNumberColumnEnabled: node.attrs.isNumberColumnEnabled, isHeaderRowEnabled: pluginState.isHeaderRowEnabled, ordering: pluginState.ordering, isHeaderColumnEnabled: pluginState.isHeaderColumnEnabled, hasHeaderRow: containsHeaderRow(view.state, node), 
                    // pass `selection` and `tableHeight` to control re-render
                    selection: view.state.selection, tableHeight: tableRef ? tableRef.offsetHeight : undefined })),
        ];
        return (React.createElement("div", { style: {
                width: this.state.tableContainerWidth,
            }, className: classnames(ClassName.TABLE_CONTAINER, (_a = {},
                _a[ClassName.WITH_CONTROLS] = allowControls && tableActive,
                _a[ClassName.HOVERED_DELETE_BUTTON] = isInDanger,
                _a[ClassName.TABLE_SELECTED] = isTableSelected(view.state.selection),
                _a['less-padding'] = width < akEditorMobileBreakoutPoint,
                _a)), "data-number-column": node.attrs.isNumberColumnEnabled, "data-layout": node.attrs.layout },
            allowControls && rowControls,
            React.createElement("div", { ref: function (elem) {
                    _this.leftShadow = elem;
                }, className: ClassName.TABLE_LEFT_SHADOW }),
            React.createElement("div", { className: classnames(ClassName.TABLE_NODE_WRAPPER), ref: function (elem) {
                    _this.wrapper = elem;
                    _this.props.contentDOM(elem ? elem : undefined);
                    if (elem) {
                        _this.table = elem.querySelector('table');
                    }
                } }),
            React.createElement("div", { ref: function (elem) {
                    _this.rightShadow = elem;
                }, className: ClassName.TABLE_RIGHT_SHADOW })));
    };
    return TableComponent;
}(React.Component));
export var updateOverflowShadows = function (wrapper, table, rightShadow, leftShadow) {
    // Right shadow
    if (table && wrapper) {
        if (rightShadow) {
            var diff = table.offsetWidth - wrapper.offsetWidth;
            rightShadow.style.display =
                diff > 0 && diff > wrapper.scrollLeft ? 'block' : 'none';
        }
        if (leftShadow) {
            leftShadow.style.display = wrapper.scrollLeft > 0 ? 'block' : 'none';
        }
    }
    return;
};
export default TableComponent;
//# sourceMappingURL=TableComponent.js.map