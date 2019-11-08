import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import ToggleStateless from './ToggleStateless';
// This component is a thin wrapper around the stateless component that manages
// the isChecked state for you
var Toggle = /** @class */ (function (_super) {
    __extends(Toggle, _super);
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
        return (React.createElement(ToggleStateless, __assign({}, this.props, { isChecked: this.state.isChecked, onChange: this.onChange })));
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
}(Component));
export default Toggle;
//# sourceMappingURL=Toggle.js.map