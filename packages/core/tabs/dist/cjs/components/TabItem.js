"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var styled_1 = require("../styled");
var noop = function () { };
var TabItem = /** @class */ (function (_super) {
    tslib_1.__extends(TabItem, _super);
    function TabItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabItem.prototype.render = function () {
        var _a = this.props, data = _a.data, elementProps = _a.elementProps, innerRef = _a.innerRef, isSelected = _a.isSelected;
        return (react_1.default.createElement(styled_1.NavItem, tslib_1.__assign({}, elementProps, { innerRef: innerRef, status: isSelected ? 'selected' : 'normal' }),
            data.label,
            isSelected && react_1.default.createElement(styled_1.NavLine, { status: "selected" })));
    };
    TabItem.defaultProps = {
        data: {},
        elementProps: {},
        innerRef: noop,
        isSelected: false,
    };
    return TabItem;
}(react_1.Component));
exports.default = TabItem;
//# sourceMappingURL=TabItem.js.map