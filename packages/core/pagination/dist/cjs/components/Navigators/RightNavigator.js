"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var chevron_right_large_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/chevron-right-large"));
var Navigator_1 = tslib_1.__importDefault(require("./Navigator"));
var RightNavigator = /** @class */ (function (_super) {
    tslib_1.__extends(RightNavigator, _super);
    function RightNavigator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RightNavigator.prototype.render = function () {
        return react_1.default.createElement(Navigator_1.default, tslib_1.__assign({}, this.props));
    };
    RightNavigator.defaultProps = {
        'aria-label': 'next',
        iconBefore: react_1.default.createElement(chevron_right_large_1.default, { label: "" }),
        isDisabled: false,
    };
    return RightNavigator;
}(react_1.Component));
exports.default = RightNavigator;
//# sourceMappingURL=RightNavigator.js.map