"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var select_1 = require("@atlaskit/select");
var React = tslib_1.__importStar(require("react"));
var ReactDOM = tslib_1.__importStar(require("react-dom"));
var react_intl_1 = require("react-intl");
var i18n_1 = require("./i18n");
var utils_1 = require("./utils");
var MultiValueContainer = /** @class */ (function (_super) {
    tslib_1.__extends(MultiValueContainer, _super);
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
                return utils_1.isChildInput(child) && _this.showPlaceholder()
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
                return (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.addMore), function (addMore) { return _this.addPlaceholder(addMore); }));
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
        var _a = this.props, children = _a.children, valueContainerProps = tslib_1.__rest(_a, ["children"]);
        return (React.createElement(select_1.components.ValueContainer, tslib_1.__assign({}, valueContainerProps, { ref: this.containerRef }), this.renderChildren()));
    };
    return MultiValueContainer;
}(React.PureComponent));
exports.MultiValueContainer = MultiValueContainer;
//# sourceMappingURL=MultiValueContainer.js.map