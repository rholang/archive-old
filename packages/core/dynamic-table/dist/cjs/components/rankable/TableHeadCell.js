"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var withDimensions_1 = tslib_1.__importDefault(require("../../hoc/withDimensions"));
var TableHeadCell_1 = tslib_1.__importDefault(require("../TableHeadCell"));
var helpers_1 = require("../../internal/helpers");
var RankableTableHeadCell = /** @class */ (function (_super) {
    tslib_1.__extends(RankableTableHeadCell, _super);
    function RankableTableHeadCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankableTableHeadCell.prototype.render = function () {
        var _a = this.props, isRanking = _a.isRanking, refHeight = _a.refHeight, refWidth = _a.refWidth, innerRef = _a.innerRef, restProps = tslib_1.__rest(_a, ["isRanking", "refHeight", "refWidth", "innerRef"]);
        var inlineStyles = helpers_1.inlineStylesIfRanking(isRanking, refWidth);
        return (react_1.default.createElement(TableHeadCell_1.default, tslib_1.__assign({ inlineStyles: inlineStyles, innerRef: innerRef }, restProps)));
    };
    return RankableTableHeadCell;
}(react_1.default.Component));
exports.default = withDimensions_1.default(RankableTableHeadCell);
//# sourceMappingURL=TableHeadCell.js.map