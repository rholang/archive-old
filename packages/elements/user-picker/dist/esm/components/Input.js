import { __assign, __extends } from "tslib";
import * as React from 'react';
import { components } from '@atlaskit/select';
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onKeyPress is used instead as
        // react-select is using onKeyDown for capturing keyboard input
        _this.handleKeyPress = function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
            }
        };
        return _this;
    }
    Input.prototype.render = function () {
        var selectProps = this.props.selectProps;
        return (React.createElement(components.Input, __assign({}, this.props, { innerRef: this.props.innerRef, disabled: selectProps && selectProps.disableInput, onKeyPress: this.handleKeyPress })));
    };
    return Input;
}(React.Component));
export { Input };
//# sourceMappingURL=Input.js.map