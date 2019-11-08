"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
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
        var _a = this.props, isFocusLockEnabled = _a.isFocusLockEnabled, autoFocusFirstElem = _a.autoFocusFirstElem;
        if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
            tiny_invariant_1.default(typeof autoFocusFirstElem === 'boolean', '@atlaskit/modal-dialog: Passing a function as autoFocus is deprecated. Instead call focus on the element ref or use the autofocus property.');
        }
        if (typeof autoFocusFirstElem === 'function' && isFocusLockEnabled) {
            var elem = autoFocusFirstElem();
            if (elem && elem.focus) {
                elem.focus();
            }
        }
    };
    FocusLock.prototype.render = function () {
        var _a = this.props, isFocusLockEnabled = _a.isFocusLockEnabled, autoFocusFirstElem = _a.autoFocusFirstElem, shouldReturnFocus = _a.shouldReturnFocus;
        return (react_1.default.createElement(react_focus_lock_1.default, { disabled: !isFocusLockEnabled, autoFocus: !!autoFocusFirstElem, returnFocus: shouldReturnFocus }, this.props.children));
    };
    return FocusLock;
}(react_1.Component));
exports.default = FocusLock;
//# sourceMappingURL=focus-lock.js.map