"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var editor_common_1 = require("@atlaskit/editor-common");
var prosemirror_tables_1 = require("prosemirror-tables");
var prosemirror_utils_1 = require("prosemirror-utils");
var utils_1 = require("../../../../utils");
var analytics_1 = require("../../../analytics");
var commands_1 = require("../../commands");
var commands_with_analytics_1 = require("../../commands-with-analytics");
var main_1 = require("../../pm-plugins/main");
var types_1 = require("../../types");
var utils_2 = require("../../utils");
var messages_1 = tslib_1.__importDefault(require("../messages"));
var DeleteButton_1 = tslib_1.__importDefault(require("./DeleteButton"));
var getPopUpOptions_1 = tslib_1.__importDefault(require("./getPopUpOptions"));
function getSelectionType(selection) {
    if (!prosemirror_utils_1.isTableSelected(selection) && selection instanceof prosemirror_tables_1.CellSelection) {
        if (selection.isRowSelection()) {
            return 'row';
        }
        if (selection.isColSelection()) {
            return 'column';
        }
    }
    return;
}
exports.getSelectionType = getSelectionType;
var FloatingDeleteButton = /** @class */ (function (_super) {
    tslib_1.__extends(FloatingDeleteButton, _super);
    function FloatingDeleteButton(props) {
        var _this = _super.call(this, props) || this;
        _this.handleMouseEnter = function () {
            var _a = _this.props.editorView, state = _a.state, dispatch = _a.dispatch;
            switch (_this.state.selectionType) {
                case 'row': {
                    return commands_1.hoverRows(_this.state.indexes, true)(state, dispatch, _this.props.editorView);
                }
                case 'column': {
                    return commands_1.hoverColumns(_this.state.indexes, true)(state, dispatch, _this.props.editorView);
                }
            }
            return false;
        };
        _this.handleMouseLeave = function () {
            var _a = _this.props.editorView, state = _a.state, dispatch = _a.dispatch;
            return commands_1.clearHoverSelection()(state, dispatch);
        };
        /**
         *
         *
         * @private
         * @memberof FloatingDeleteButton
         */
        _this.handleClick = function () {
            var _a;
            var _b = _this.props.editorView, state = _b.state, dispatch = _b.dispatch;
            var isHeaderRowRequired = main_1.getPluginState(state).pluginConfig.isHeaderRowRequired;
            var rect = prosemirror_utils_1.getSelectionRect(state.selection);
            if (rect) {
                switch (_this.state.selectionType) {
                    case 'column': {
                        commands_with_analytics_1.deleteColumnsWithAnalytics(analytics_1.INPUT_METHOD.BUTTON, rect)(state, dispatch);
                        return;
                    }
                    case 'row': {
                        commands_with_analytics_1.deleteRowsWithAnalytics(analytics_1.INPUT_METHOD.BUTTON, rect, !!isHeaderRowRequired)(state, dispatch);
                        return;
                    }
                }
            }
            (_a = _this.props.editorView, state = _a.state, dispatch = _a.dispatch);
            commands_1.clearHoverSelection()(state, dispatch);
        };
        _this.state = {
            selectionType: undefined,
            top: 0,
            left: 0,
            indexes: [],
        };
        return _this;
    }
    FloatingDeleteButton.prototype.shouldComponentUpdate = function (_, nextState) {
        return (this.state.selectionType !== nextState.selectionType ||
            this.state.left !== nextState.left ||
            this.state.top !== nextState.top);
    };
    /**
     * We derivate the button state from the properties passed.
     * We do this in here because we need this information in different places
     * and this prevent to do multiple width calculations in the same component.
     */
    FloatingDeleteButton.getDerivedStateFromProps = function (nextProps, prevState) {
        var selectionType = getSelectionType(nextProps.selection);
        if (selectionType) {
            switch (selectionType) {
                case 'column': {
                    // Calculate the button position and indexes for columns
                    var columnsWidths = utils_2.getColumnsWidths(nextProps.editorView);
                    var deleteBtnParams = utils_2.getColumnDeleteButtonParams(columnsWidths, nextProps.editorView.state.selection);
                    if (deleteBtnParams) {
                        return tslib_1.__assign(tslib_1.__assign({}, deleteBtnParams), { top: 0, selectionType: selectionType });
                    }
                    return null;
                }
                case 'row': {
                    // Calculate the button position and indexes for rows
                    if (nextProps.tableRef) {
                        var rowHeights = utils_2.getRowHeights(nextProps.tableRef);
                        var deleteBtnParams = utils_2.getRowDeleteButtonParams(rowHeights, nextProps.editorView.state.selection);
                        if (deleteBtnParams) {
                            return tslib_1.__assign(tslib_1.__assign({}, deleteBtnParams), { left: 0, selectionType: selectionType });
                        }
                    }
                    return null;
                }
            }
        }
        // Clean state if no type
        if (prevState.selectionType !== selectionType) {
            return {
                selectionType: undefined,
                top: 0,
                left: 0,
                indexes: [],
            };
        }
        // Do nothing if doesn't change anything
        return null;
    };
    FloatingDeleteButton.prototype.render = function () {
        var _a = this.props, mountPoint = _a.mountPoint, boundariesElement = _a.boundariesElement, tableRef = _a.tableRef;
        var selectionType = this.state.selectionType;
        if (!selectionType || !tableRef) {
            return null;
        }
        var tableContainerWrapper = utils_1.closestElement(tableRef, "." + types_1.TableCssClassName.TABLE_CONTAINER);
        var tableWrapper = utils_1.closestElement(tableRef, "." + types_1.TableCssClassName.TABLE_NODE_WRAPPER);
        return (react_1.default.createElement(editor_common_1.Popup, tslib_1.__assign({ target: tableRef, mountTo: tableContainerWrapper || mountPoint, boundariesElement: tableContainerWrapper || boundariesElement, scrollableElement: tableWrapper, forcePlacement: true, allowOutOfBounds: true }, getPopUpOptions_1.default({
            left: this.state.left,
            top: this.state.top,
            selectionType: this.state.selectionType,
            tableWrapper: tableWrapper,
        })),
            react_1.default.createElement(DeleteButton_1.default, { removeLabel: selectionType === 'column'
                    ? messages_1.default.removeColumns
                    : messages_1.default.removeRows, onClick: this.handleClick, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave })));
    };
    return FloatingDeleteButton;
}(react_1.Component));
exports.default = FloatingDeleteButton;
//# sourceMappingURL=index.js.map