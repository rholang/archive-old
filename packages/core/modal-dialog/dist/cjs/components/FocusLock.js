"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var tiny_invariant_1 = tslib_1.__importDefault(require("tiny-invariant"));
var react_focus_lock_1 = tslib_1.__importDefault(require("react-focus-lock"));
// Thin wrapper over react-focus-lock. This wrapper only exists to ensure API compatibility.
// This component should be deleted during https://ecosystem.atlassian.net/browse/AK-5658
var FocusLock = /** @class */ (function (_super) {
    tslib_1.__extends(FocusLock, _super);
    function FocusLock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FocusLock.prototype.componentDidMount = function () {
        var _a = this.props, isEnabled = _a.isEnabled, autoFocus = _a.autoFocus;
        if (process.env.NODE_ENV !== 'production') {
            tiny_invariant_1.default(typeof autoFocus === 'boolean', '@atlaskit/modal-dialog: Passing a function as autoFocus is deprecated. Instead call focus on the element ref or use the autofocus property.');
        }
        if (typeof autoFocus === 'function' && isEnabled) {
            var elem = autoFocus();
            if (elem && elem.focus) {
                elem.focus();
            }
        }
    };
    FocusLock.prototype.render = function () {
        var _a = this.props, isEnabled = _a.isEnabled, autoFocus = _a.autoFocus, shouldReturnFocus = _a.shouldReturnFocus;
        return (react_1.default.createElement(react_focus_lock_1.default, { disabled: !isEnabled, autoFocus: !!autoFocus, returnFocus: shouldReturnFocus }, this.props.children));
    };
    FocusLock.defaultProps = {
        autoFocus: true,
        isEnabled: true,
        shouldReturnFocus: true,
    };
    return FocusLock;
}(react_1.default.Component));
exports.default = FocusLock;
//# sourceMappingURL=FocusLock.js.map