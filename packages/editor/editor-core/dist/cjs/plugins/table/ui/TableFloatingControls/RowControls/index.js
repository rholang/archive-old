"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var commands_1 = require("../../../commands");
var types_1 = require("../../../types");
var utils_1 = require("../../../utils");
var RowControls = /** @class */ (function (_super) {
    tslib_1.__extends(RowControls, _super);
    function RowControls() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clearHoverSelection = function () {
            var _a = _this.props.editorView, state = _a.state, dispatch = _a.dispatch;
            commands_1.clearHoverSelection()(state, dispatch);
        };
        return _this;
    }
    RowControls.prototype.render = function () {
        var _this = this;
        var _a = this.props, editorView = _a.editorView, tableRef = _a.tableRef, hoveredRows = _a.hoveredRows, isInDanger = _a.isInDanger, isResizing = _a.isResizing;
        if (!tableRef) {
            return null;
        }
        var selection = editorView.state.selection;
        var rowHeights = utils_1.getRowHeights(tableRef);
        var rowsParams = utils_1.getRowsParams(rowHeights);
        return (React.createElement("div", { className: types_1.TableCssClassName.ROW_CONTROLS },
            React.createElement("div", { className: types_1.TableCssClassName.ROW_CONTROLS_INNER }, rowsParams.map(function (_a) {
                var startIndex = _a.startIndex, endIndex = _a.endIndex, height = _a.height;
                return (React.createElement("div", { className: types_1.TableCssClassName.ROW_CONTROLS_BUTTON_WRAP + " " + utils_1.getRowClassNames(startIndex, selection, hoveredRows, isInDanger, isResizing), key: startIndex, style: { height: height } },
                    React.createElement("button", { type: "button", className: types_1.TableCssClassName.ROW_CONTROLS_BUTTON + "\n                  " + types_1.TableCssClassName.CONTROLS_BUTTON + "\n                ", onClick: function (event) {
                            return _this.props.selectRow(startIndex, event.shiftKey);
                        }, onMouseOver: function () { return _this.props.hoverRows([startIndex]); }, onMouseOut: _this.clearHoverSelection, "data-start-index": startIndex, "data-end-index": endIndex }),
                    React.createElement("div", { className: types_1.TableCssClassName.CONTROLS_INSERT_MARKER })));
            }))));
    };
    return RowControls;
}(react_1.Component));
exports.default = RowControls;
//# sourceMappingURL=index.js.map