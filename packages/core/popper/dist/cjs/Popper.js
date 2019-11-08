"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var memoize_one_1 = tslib_1.__importDefault(require("memoize-one"));
var react_popper_1 = require("react-popper");
var react_popper_2 = require("react-popper");
exports.Manager = react_popper_2.Manager;
exports.Reference = react_popper_2.Reference;
var FlipBehavior = {
    auto: [],
    top: ['top', 'bottom', 'top'],
    right: ['right', 'left', 'right'],
    bottom: ['bottom', 'top', 'bottom'],
    left: ['left', 'right', 'left'],
};
var getFlipBehavior = function (side) { return FlipBehavior[side]; };
var Popper = /** @class */ (function (_super) {
    tslib_1.__extends(Popper, _super);
    function Popper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getModifiers = memoize_one_1.default(function (placement) {
            var flipBehavior = getFlipBehavior(placement.split('-')[0]);
            var modifiers = {
                flip: {
                    enabled: true,
                    behavior: flipBehavior,
                    boundariesElement: 'viewport',
                },
                hide: {
                    enabled: true,
                },
                offset: {
                    enabled: true,
                    offset: _this.props.offset,
                },
                preventOverflow: {
                    enabled: true,
                    escapeWithReference: false,
                    boundariesElement: 'window',
                },
            };
            if (_this.props.modifiers) {
                return tslib_1.__assign(tslib_1.__assign({}, modifiers), _this.props.modifiers);
            }
            return modifiers;
        });
        return _this;
    }
    Popper.prototype.render = function () {
        var _a = this.props, placement = _a.placement, children = _a.children, referenceElement = _a.referenceElement;
        var modifiers = this.getModifiers(this.props.placement);
        return (react_1.default.createElement(react_popper_1.Popper, tslib_1.__assign({ positionFixed: true, modifiers: modifiers, placement: placement }, (referenceElement ? { referenceElement: referenceElement } : {})), children));
    };
    Popper.defaultProps = {
        children: function () { return null; },
        offset: '0, 8px',
        placement: 'bottom-start',
    };
    return Popper;
}(react_1.default.Component));
exports.Popper = Popper;
//# sourceMappingURL=Popper.js.map