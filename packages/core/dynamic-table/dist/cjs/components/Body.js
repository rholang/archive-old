"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var TableRow_1 = tslib_1.__importDefault(require("./TableRow"));
var withSortedPageRows_1 = tslib_1.__importDefault(require("../hoc/withSortedPageRows"));
var Body = /** @class */ (function (_super) {
    tslib_1.__extends(Body, _super);
    function Body() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Body.prototype.render = function () {
        var _a = this.props, pageRows = _a.pageRows, head = _a.head, isFixedSize = _a.isFixedSize, highlightedRowIndex = _a.highlightedRowIndex;
        return (react_1.default.createElement("tbody", null, pageRows.map(function (row, rowIndex) { return (react_1.default.createElement(TableRow_1.default, { head: head, isFixedSize: isFixedSize, key: rowIndex, row: row, isHighlighted: highlightedRowIndex === rowIndex })); })));
    };
    return Body;
}(react_1.default.Component));
exports.default = withSortedPageRows_1.default(Body);
//# sourceMappingURL=Body.js.map