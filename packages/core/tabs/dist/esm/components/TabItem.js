import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import { NavItem, NavLine } from '../styled';
var noop = function () { };
var TabItem = /** @class */ (function (_super) {
    __extends(TabItem, _super);
    function TabItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabItem.prototype.render = function () {
        var _a = this.props, data = _a.data, elementProps = _a.elementProps, innerRef = _a.innerRef, isSelected = _a.isSelected;
        return (React.createElement(NavItem, __assign({}, elementProps, { innerRef: innerRef, status: isSelected ? 'selected' : 'normal' }),
            data.label,
            isSelected && React.createElement(NavLine, { status: "selected" })));
    };
    TabItem.defaultProps = {
        data: {},
        elementProps: {},
        innerRef: noop,
        isSelected: false,
    };
    return TabItem;
}(Component));
export default TabItem;
//# sourceMappingURL=TabItem.js.map