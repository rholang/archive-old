"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var select_1 = require("@atlaskit/select");
var Input = /** @class */ (function (_super) {
    tslib_1.__extends(Input, _super);
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
        return (React.createElement(select_1.components.Input, tslib_1.__assign({}, this.props, { innerRef: this.props.innerRef, disabled: selectProps && selectProps.disableInput, onKeyPress: this.handleKeyPress })));
    };
    return Input;
}(React.Component));
exports.Input = Input;
//# sourceMappingURL=Input.js.map