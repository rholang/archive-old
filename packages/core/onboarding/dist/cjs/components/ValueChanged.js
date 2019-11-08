"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
// This component was born from the pain of using render props in lifecycle methods.
// On update, it checks whether the current value prop is equal to the previous value prop.
// If they are different, it calls the onChange function.
// We use this for updating Popper when the SpotlightDialog width changes.
var ValueChanged = /** @class */ (function (_super) {
    tslib_1.__extends(ValueChanged, _super);
    function ValueChanged() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValueChanged.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.value !== this.props.value) {
            this.props.onChange();
        }
    };
    ValueChanged.prototype.render = function () {
        return this.props.children;
    };
    return ValueChanged;
}(react_1.default.Component));
exports.default = ValueChanged;
//# sourceMappingURL=ValueChanged.js.map