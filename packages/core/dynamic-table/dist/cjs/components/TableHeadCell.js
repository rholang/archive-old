"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var TableHead_1 = require("../styled/TableHead");
var TableHeadCell = /** @class */ (function (_super) {
    tslib_1.__extends(TableHeadCell, _super);
    function TableHeadCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableHeadCell.prototype.render = function () {
        var _a = this.props, content = _a.content, inlineStyles = _a.inlineStyles, rest = tslib_1.__rest(_a, ["content", "inlineStyles"]);
        return (react_1.default.createElement(TableHead_1.HeadCell, tslib_1.__assign({ style: inlineStyles }, rest, { tabIndex: rest.isSortable ? 0 : undefined }),
            react_1.default.createElement("span", null, content)));
    };
    TableHeadCell.defaultProps = {
        innerRef: function () { },
        inlineStyles: {},
    };
    return TableHeadCell;
}(react_1.default.Component));
exports.default = TableHeadCell;
//# sourceMappingURL=TableHeadCell.js.map