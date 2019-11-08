"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var chevron_left_large_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/chevron-left-large"));
var Navigator_1 = tslib_1.__importDefault(require("./Navigator"));
var LeftNavigator = /** @class */ (function (_super) {
    tslib_1.__extends(LeftNavigator, _super);
    function LeftNavigator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LeftNavigator.prototype.render = function () {
        return react_1.default.createElement(Navigator_1.default, tslib_1.__assign({}, this.props));
    };
    LeftNavigator.defaultProps = {
        'aria-label': 'previous',
        iconBefore: react_1.default.createElement(chevron_left_large_1.default, { label: "" }),
        isDisabled: false,
    };
    return LeftNavigator;
}(react_1.Component));
exports.default = LeftNavigator;
//# sourceMappingURL=LeftNavigator.js.map