"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var raf_schd_1 = tslib_1.__importDefault(require("raf-schd"));
var prosemirror_utils_1 = require("prosemirror-utils");
var editor_common_1 = require("@atlaskit/editor-common");
var TableFloatingControls_1 = tslib_1.__importDefault(require("../ui/TableFloatingControls"));
var main_1 = require("../pm-plugins/main");
var table_resizing_1 = require("../pm-plugins/table-resizing");
var utils_1 = require("../pm-plugins/table-resizing/utils");
var types_1 = require("../types");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var isIE11 = editor_common_1.browser.ie_version === 11;
var utils_2 = require("../utils");
var commands_1 = require("../commands");
var node_width_1 = require("../../../utils/node-width");
var TableComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TableComponent, _super);
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
                utils_2.tablesHaveDifferentNoOfColumns(node, prevNode) ||
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
            table_resizing_1.scaleTable(_this.table, tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, scaleOptions), { node: node, prevNode: _this.node || node, start: getPos() + 1, containerWidth: width, previousContainerWidth: _this.containerWidth.width || width }), options), domAtPos)(state, dispatch);
        };
        _this.handleAutoSize = function () {
            if (_this.table) {
                var _a = _this.props, view = _a.view, node = _a.node, getPos = _a.getPos, options = _a.options, containerWidth = _a.containerWidth;
                commands_1.autoSizeTable(view, node, _this.table, getPos(), {
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
                var tableContainerWidth = editor_common_1.calcTableWidth(node.attrs.layout, containerWidth.width);
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
            return node_width_1.getParentNodeWidth(_this.props.getPos(), _this.props.view.state, _this.props.containerWidth, _this.props.options && _this.props.options.isFullWidthModeEnabled);
        };
        _this.updateParentWidth = function (width) {
            _this.setState({ parentWidth: width });
        };
        _this.tableNodeLayoutSize = function (node, containerWidth, options) {
            return utils_1.getLayoutSize(node.attrs.layout, containerWidth || _this.props.containerWidth.width, options || _this.props.options || {});
        };
        _this.scaleTableDebounced = raf_schd_1.default(_this.scaleTable);
        _this.handleTableResizingDebounced = raf_schd_1.default(_this.handleTableResizing);
        _this.handleScrollDebounced = raf_schd_1.default(_this.handleScroll);
        _this.handleAutoSizeDebounced = raf_schd_1.default(_this.handleAutoSize);
        _this.handleWindowResizeDebounced = raf_schd_1.default(_this.handleWindowResize);
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
        exports.updateOverflowShadows(this.wrapper, this.table, this.rightShadow, this.leftShadow);
        if (this.props.node.attrs.__autoSize) {
            // Wait for next tick to handle auto sizing, gives the browser time to do layout calc etc.
            this.handleAutoSizeDebounced();
        }
        else if (this.props.allowColumnResizing && this.table) {
            // If col widths (e.g. via collab) or number of columns (e.g. delete a column) have changed,
            // re-draw colgroup.
            if (utils_2.tablesHaveDifferentColumnWidths(this.props.node, prevProps.node) ||
                utils_2.tablesHaveDifferentNoOfColumns(this.props.node, prevProps.node)) {
                var view = this.props.view;
                utils_1.insertColgroupFromNode(this.table, this.props.node);
                utils_1.updateControls(view.state);
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
        var _d = main_1.getPluginState(view.state), isInDanger = _d.isInDanger, hoveredRows = _d.hoveredRows;
        var tableRef = this.table || undefined;
        var tableActive = this.table === pluginState.tableRef;
        var isResizing = !!tableResizingPluginState && !!tableResizingPluginState.dragging;
        var rowControls = [
            React.createElement("div", { key: 0, className: types_1.TableCssClassName.ROW_CONTROLS_WRAPPER },
                React.createElement(TableFloatingControls_1.default, { editorView: view, tableRef: tableRef, tableActive: tableActive, hoveredRows: hoveredRows, isInDanger: isInDanger, isResizing: isResizing, isNumberColumnEnabled: node.attrs.isNumberColumnEnabled, isHeaderRowEnabled: pluginState.isHeaderRowEnabled, ordering: pluginState.ordering, isHeaderColumnEnabled: pluginState.isHeaderColumnEnabled, hasHeaderRow: utils_2.containsHeaderRow(view.state, node), 
                    // pass `selection` and `tableHeight` to control re-render
                    selection: view.state.selection, tableHeight: tableRef ? tableRef.offsetHeight : undefined })),
        ];
        return (React.createElement("div", { style: {
                width: this.state.tableContainerWidth,
            }, className: classnames_1.default(types_1.TableCssClassName.TABLE_CONTAINER, (_a = {},
                _a[types_1.TableCssClassName.WITH_CONTROLS] = allowControls && tableActive,
                _a[types_1.TableCssClassName.HOVERED_DELETE_BUTTON] = isInDanger,
                _a[types_1.TableCssClassName.TABLE_SELECTED] = prosemirror_utils_1.isTableSelected(view.state.selection),
                _a['less-padding'] = width < editor_common_1.akEditorMobileBreakoutPoint,
                _a)), "data-number-column": node.attrs.isNumberColumnEnabled, "data-layout": node.attrs.layout },
            allowControls && rowControls,
            React.createElement("div", { ref: function (elem) {
                    _this.leftShadow = elem;
                }, className: types_1.TableCssClassName.TABLE_LEFT_SHADOW }),
            React.createElement("div", { className: classnames_1.default(types_1.TableCssClassName.TABLE_NODE_WRAPPER), ref: function (elem) {
                    _this.wrapper = elem;
                    _this.props.contentDOM(elem ? elem : undefined);
                    if (elem) {
                        _this.table = elem.querySelector('table');
                    }
                } }),
            React.createElement("div", { ref: function (elem) {
                    _this.rightShadow = elem;
                }, className: types_1.TableCssClassName.TABLE_RIGHT_SHADOW })));
    };
    return TableComponent;
}(React.Component));
exports.updateOverflowShadows = function (wrapper, table, rightShadow, leftShadow) {
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
exports.default = TableComponent;
//# sourceMappingURL=TableComponent.js.map