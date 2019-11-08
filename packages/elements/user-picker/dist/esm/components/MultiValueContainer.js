import { __assign, __extends, __rest } from "tslib";
import { components } from '@atlaskit/select';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FormattedMessage } from 'react-intl';
import { messages } from './i18n';
import { isChildInput } from './utils';
var MultiValueContainer = /** @class */ (function (_super) {
    __extends(MultiValueContainer, _super);
    function MultiValueContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.timeoutId = null;
        _this.scrollToBottom = function () {
            _this.timeoutId = window.setTimeout(function () {
                var current = _this.containerRef.current;
                if (current !== null) {
                    var container = ReactDOM.findDOMNode(current);
                    if (container instanceof HTMLDivElement) {
                        container.scrollTop = container.scrollHeight;
                    }
                }
                _this.timeoutId = null;
            });
        };
        _this.showPlaceholder = function () {
            var value = _this.props.selectProps.value;
            return value && value.length > 0;
        };
        _this.addPlaceholder = function (placeholder) {
            return React.Children.map(_this.props.children, function (child) {
                return isChildInput(child) && _this.showPlaceholder()
                    ? React.cloneElement(child, { placeholder: placeholder })
                    : child;
            });
        };
        _this.renderChildren = function () {
            var _a = _this.props.selectProps, addMoreMessage = _a.addMoreMessage, isDisabled = _a.isDisabled;
            // Do not render "Add more..." message if picker is disabled
            if (isDisabled) {
                return _this.props.children;
            }
            if (addMoreMessage === undefined) {
                return (React.createElement(FormattedMessage, __assign({}, messages.addMore), function (addMore) { return _this.addPlaceholder(addMore); }));
            }
            return _this.addPlaceholder(addMoreMessage);
        };
        _this.state = {
            valueSize: 0,
            previousValueSize: 0,
        };
        _this.containerRef = React.createRef();
        return _this;
    }
    MultiValueContainer.getDerivedStateFromProps = function (nextProps, prevState) {
        return {
            valueSize: nextProps.getValue ? nextProps.getValue().length : 0,
            previousValueSize: prevState.valueSize,
        };
    };
    MultiValueContainer.prototype.componentDidUpdate = function () {
        var _a = this.state, previousValueSize = _a.previousValueSize, valueSize = _a.valueSize;
        var isFocused = this.props.selectProps.isFocused;
        if (valueSize > previousValueSize && isFocused) {
            if (this.timeoutId) {
                window.clearTimeout(this.timeoutId);
                this.timeoutId = null;
            }
            this.scrollToBottom();
        }
    };
    MultiValueContainer.prototype.componentWillUnmount = function () {
        if (this.timeoutId) {
            window.clearTimeout(this.timeoutId);
        }
    };
    MultiValueContainer.prototype.render = function () {
        var _a = this.props, children = _a.children, valueContainerProps = __rest(_a, ["children"]);
        return (React.createElement(components.ValueContainer, __assign({}, valueContainerProps, { ref: this.containerRef }), this.renderChildren()));
    };
    return MultiValueContainer;
}(React.PureComponent));
export { MultiValueContainer };
//# sourceMappingURL=MultiValueContainer.js.map