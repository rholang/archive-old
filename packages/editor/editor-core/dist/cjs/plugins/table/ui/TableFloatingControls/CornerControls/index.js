"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var prosemirror_utils_1 = require("prosemirror-utils");
var prosemirror_tables_1 = require("prosemirror-tables");
var commands_1 = require("../../../commands");
var types_1 = require("../../../types");
var CornerControls = /** @class */ (function (_super) {
    tslib_1.__extends(CornerControls, _super);
    function CornerControls() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isActive = function () {
            var _a = _this.props, editorView = _a.editorView, hoveredRows = _a.hoveredRows, isResizing = _a.isResizing;
            var selection = editorView.state.selection;
            var table = prosemirror_utils_1.findTable(selection);
            if (!table) {
                return false;
            }
            return (prosemirror_utils_1.isTableSelected(selection) ||
                (hoveredRows &&
                    hoveredRows.length === prosemirror_tables_1.TableMap.get(table.node).height &&
                    !isResizing));
        };
        _this.clearHoverSelection = function () {
            var _a = _this.props.editorView, state = _a.state, dispatch = _a.dispatch;
            commands_1.clearHoverSelection()(state, dispatch);
        };
        _this.selectTable = function () {
            var _a = _this.props.editorView, state = _a.state, dispatch = _a.dispatch;
            dispatch(prosemirror_utils_1.selectTable(state.tr).setMeta('addToHistory', false));
        };
        _this.hoverTable = function () {
            var _a = _this.props.editorView, state = _a.state, dispatch = _a.dispatch;
            commands_1.hoverTable()(state, dispatch);
        };
        return _this;
    }
    CornerControls.prototype.render = function () {
        var _a = this.props, isInDanger = _a.isInDanger, tableRef = _a.tableRef, isHeaderColumnEnabled = _a.isHeaderColumnEnabled, isHeaderRowEnabled = _a.isHeaderRowEnabled;
        if (!tableRef) {
            return null;
        }
        var isActive = this.isActive();
        return (React.createElement("div", { className: classnames_1.default(types_1.TableCssClassName.CORNER_CONTROLS, {
                active: isActive,
            }) },
            React.createElement("button", { type: "button", className: classnames_1.default(types_1.TableCssClassName.CONTROLS_CORNER_BUTTON, {
                    danger: isActive && isInDanger,
                }), onClick: this.selectTable, onMouseOver: this.hoverTable, onMouseOut: this.clearHoverSelection }),
            !isHeaderRowEnabled && (React.createElement("div", { className: types_1.TableCssClassName.CORNER_CONTROLS_INSERT_ROW_MARKER },
                React.createElement("div", { className: types_1.TableCssClassName.CONTROLS_INSERT_MARKER }))),
            !isHeaderColumnEnabled && (React.createElement("div", { className: types_1.TableCssClassName.CORNER_CONTROLS_INSERT_COLUMN_MARKER },
                React.createElement("div", { className: types_1.TableCssClassName.CONTROLS_INSERT_MARKER })))));
    };
    return CornerControls;
}(react_1.Component));
exports.default = CornerControls;
//# sourceMappingURL=index.js.map