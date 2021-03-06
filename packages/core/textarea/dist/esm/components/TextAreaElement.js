import { __assign, __extends, __rest } from "tslib";
import React from 'react';
var TextAreaElement = /** @class */ (function (_super) {
    __extends(TextAreaElement, _super);
    function TextAreaElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.textareaElement = null;
        _this.state = {
            height: '100%',
        };
        _this.getTextAreaRef = function (ref) {
            _this.textareaElement = ref;
            var forwardedRef = _this.props.forwardedRef;
            if (forwardedRef && typeof forwardedRef === 'object') {
                // @ts-ignore
                forwardedRef.current = ref;
            }
            if (forwardedRef && typeof forwardedRef === 'function') {
                forwardedRef(ref);
            }
        };
        _this.handleOnChange = function (event) {
            var onChange = _this.props.onChange;
            if (_this.props.resize === 'smart') {
                _this.setState({
                    height: 'auto',
                }, function () {
                    if (_this.props.resize === 'smart' && _this.textareaElement) {
                        _this.setState({
                            height: _this.textareaElement.scrollHeight + "px",
                        });
                    }
                });
            }
            if (onChange) {
                onChange(event);
            }
        };
        return _this;
    }
    TextAreaElement.prototype.componentDidMount = function () {
        if (this.props.resize === 'smart' && this.textareaElement) {
            this.setState({
                height: this.textareaElement.scrollHeight + "px",
            });
        }
    };
    TextAreaElement.prototype.render = function () {
        var _a = this.props, resize = _a.resize, forwardedRef = _a.forwardedRef, rest = __rest(_a, ["resize", "forwardedRef"]);
        var height = this.state.height;
        if (resize === 'smart') {
            return (React.createElement("textarea", __assign({ ref: this.getTextAreaRef, style: { height: height } }, rest, { onChange: this.handleOnChange })));
        }
        return (React.createElement("textarea", __assign({ ref: this.getTextAreaRef, style: { height: '100%' } }, rest)));
    };
    return TextAreaElement;
}(React.Component));
export default TextAreaElement;
//# sourceMappingURL=TextAreaElement.js.map