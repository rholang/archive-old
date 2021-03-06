"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = tslib_1.__importDefault(require("react"));
var spinner_1 = tslib_1.__importDefault(require("@atlaskit/spinner"));
var appearances = ['primary', 'danger'];
var LoadingSpinner = /** @class */ (function (_super) {
    tslib_1.__extends(LoadingSpinner, _super);
    function LoadingSpinner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.invertSpinner = function () {
            var _a = _this.props, appearance = _a.appearance, isSelected = _a.isSelected, isDisabled = _a.isDisabled;
            if (isSelected) {
                return true;
            }
            if (isDisabled) {
                return false;
            }
            if (appearance !== undefined) {
                if (appearances.indexOf(appearance) !== -1) {
                    return true;
                }
            }
            return false;
        };
        return _this;
    }
    LoadingSpinner.prototype.render = function () {
        var _a = this.props, spacing = _a.spacing, styles = _a.styles;
        var spinnerSize = spacing !== 'default' ? 'small' : 'medium';
        return (core_1.jsx("div", { css: styles },
            core_1.jsx(spinner_1.default, { size: spinnerSize, invertColor: this.invertSpinner() })));
    };
    return LoadingSpinner;
}(react_1.default.Component));
exports.default = LoadingSpinner;
//# sourceMappingURL=LoadingSpinner.js.map