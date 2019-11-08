"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var styles_1 = require("../../../ui/PanelTextInput/styles");
var TextField = /** @class */ (function (_super) {
    tslib_1.__extends(TextField, _super);
    function TextField(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (e) {
            _this.setState({ text: e.target.value });
        };
        _this.handleSubmit = function (e) {
            e.preventDefault();
            if (_this.props.onSubmit) {
                _this.props.onSubmit(_this.state.text);
            }
        };
        _this.handleBlur = function (e) {
            e.preventDefault();
            if (_this.props.onBlur) {
                _this.props.onBlur(_this.state.text);
            }
        };
        _this.state = {
            text: props.defaultValue || '',
        };
        return _this;
    }
    TextField.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (this.state.text !== nextProps.defaultValue) {
            this.setState({
                text: nextProps.defaultValue || '',
            });
        }
    };
    TextField.prototype.render = function () {
        var placeholder = this.props.placeholder;
        return (React.createElement("form", { onSubmit: this.handleSubmit },
            React.createElement(styles_1.Input, { value: this.state.text, onChange: this.handleChange, placeholder: placeholder, onBlur: this.handleBlur })));
    };
    return TextField;
}(react_1.Component));
exports.default = TextField;
//# sourceMappingURL=Input.js.map