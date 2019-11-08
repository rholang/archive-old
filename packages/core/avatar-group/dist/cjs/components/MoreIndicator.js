"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var avatar_1 = require("@atlaskit/avatar");
var MoreIndicator_1 = require("../styled/MoreIndicator");
var MAX_DISPLAY_COUNT = 99;
var MoreIndicator = /** @class */ (function (_super) {
    tslib_1.__extends(MoreIndicator, _super);
    function MoreIndicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoreIndicator.prototype.render = function () {
        var outerProps = avatar_1.getProps(this);
        var _a = this.props, appearance = _a.appearance, isActive = _a.isActive, isFocus = _a.isFocus, isHover = _a.isHover, size = _a.size, count = _a.count;
        var displayCount = count > MAX_DISPLAY_COUNT ? MAX_DISPLAY_COUNT : count;
        return (react_1.default.createElement(MoreIndicator_1.Outer, tslib_1.__assign({}, outerProps, { isInteractive: true }),
            react_1.default.createElement(MoreIndicator_1.Inner, { appearance: appearance, isActive: isActive, isFocus: isFocus, isHover: isHover, size: size },
                "+",
                displayCount)));
    };
    MoreIndicator.defaultProps = {
        count: 0,
        appearance: 'circle',
        size: 'medium',
    };
    return MoreIndicator;
}(react_1.Component));
exports.default = avatar_1.withPseudoState(MoreIndicator);
//# sourceMappingURL=MoreIndicator.js.map