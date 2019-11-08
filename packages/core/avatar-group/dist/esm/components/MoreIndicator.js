import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import { withPseudoState, getProps, } from '@atlaskit/avatar';
import { Outer, Inner } from '../styled/MoreIndicator';
var MAX_DISPLAY_COUNT = 99;
var MoreIndicator = /** @class */ (function (_super) {
    __extends(MoreIndicator, _super);
    function MoreIndicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoreIndicator.prototype.render = function () {
        var outerProps = getProps(this);
        var _a = this.props, appearance = _a.appearance, isActive = _a.isActive, isFocus = _a.isFocus, isHover = _a.isHover, size = _a.size, count = _a.count;
        var displayCount = count > MAX_DISPLAY_COUNT ? MAX_DISPLAY_COUNT : count;
        return (React.createElement(Outer, __assign({}, outerProps, { isInteractive: true }),
            React.createElement(Inner, { appearance: appearance, isActive: isActive, isFocus: isFocus, isHover: isHover, size: size },
                "+",
                displayCount)));
    };
    MoreIndicator.defaultProps = {
        count: 0,
        appearance: 'circle',
        size: 'medium',
    };
    return MoreIndicator;
}(Component));
export default withPseudoState(MoreIndicator);
//# sourceMappingURL=MoreIndicator.js.map