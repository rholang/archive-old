import { __assign, __extends } from "tslib";
import * as React from 'react';
import { PureComponent } from 'react';
import * as ReactDOM from 'react-dom';
export default function withOuterListeners(Component) {
    return /** @class */ (function (_super) {
        __extends(WithOutsideClick, _super);
        function WithOutsideClick() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.handleClick = function (evt) {
                var domNode = ReactDOM.findDOMNode(_this); // eslint-disable-line react/no-find-dom-node
                if (!domNode ||
                    (evt.target instanceof Node && !domNode.contains(evt.target))) {
                    _this.props.handleClickOutside(evt);
                }
            };
            _this.handleKeydown = function (evt) {
                if (evt.code === 'Escape' && _this.props.handleEscapeKeydown) {
                    _this.props.handleEscapeKeydown(evt);
                }
                else if (evt.code === 'Enter' && _this.props.handleEnterKeydown) {
                    _this.props.handleEnterKeydown(evt);
                }
            };
            return _this;
        }
        WithOutsideClick.prototype.componentDidMount = function () {
            if (this.props.handleClickOutside) {
                document.addEventListener('click', this.handleClick, false);
            }
            if (this.props.handleEscapeKeydown) {
                document.addEventListener('keydown', this.handleKeydown, false);
            }
        };
        WithOutsideClick.prototype.componentWillUnmount = function () {
            if (this.props.handleClickOutside) {
                document.removeEventListener('click', this.handleClick, false);
            }
            if (this.props.handleEscapeKeydown) {
                document.removeEventListener('keydown', this.handleKeydown, false);
            }
        };
        WithOutsideClick.prototype.render = function () {
            return React.createElement(Component, __assign({}, this.props));
        };
        return WithOutsideClick;
    }(PureComponent));
}
//# sourceMappingURL=with-outer-listeners.js.map