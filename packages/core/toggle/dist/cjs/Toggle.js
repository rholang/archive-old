"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var ToggleStateless_1 = tslib_1.__importDefault(require("./ToggleStateless"));
// This component is a thin wrapper around the stateless component that manages
// the isChecked state for you
var Toggle = /** @class */ (function (_super) {
    tslib_1.__extends(Toggle, _super);
    function Toggle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isChecked: _this.props.isDefaultChecked,
        };
        _this.onChange = function (event) {
            _this.setState({ isChecked: !_this.state.isChecked });
            _this.props.onChange(event);
        };
        return _this;
    }
    Toggle.prototype.render = function () {
        return (react_1.default.createElement(ToggleStateless_1.default, tslib_1.__assign({}, this.props, { isChecked: this.state.isChecked, onChange: this.onChange })));
    };
    Toggle.defaultProps = {
        isDisabled: false,
        onBlur: function () { },
        onChange: function () { },
        onFocus: function () { },
        size: 'regular',
        label: '',
        name: '',
        value: '',
        isDefaultChecked: false,
    };
    return Toggle;
}(react_1.Component));
exports.default = Toggle;
//# sourceMappingURL=Toggle.js.map