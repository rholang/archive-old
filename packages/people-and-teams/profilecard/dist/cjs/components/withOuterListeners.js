"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_dom_1 = tslib_1.__importDefault(require("react-dom"));
function withOuterListeners(Component) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(WithOuterListeners, _super);
        function WithOuterListeners() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.handleClick = function (evt) {
                var handleClickOutside = _this.props.handleClickOutside;
                if (handleClickOutside) {
                    var domNode = react_dom_1.default.findDOMNode(_this); // eslint-disable-line react/no-find-dom-node
                    if (!domNode ||
                        (evt.target instanceof Node && !domNode.contains(evt.target))) {
                        handleClickOutside();
                    }
                }
            };
            _this.handleKeydown = function (evt) {
                var handleEscapeKeydown = _this.props.handleEscapeKeydown;
                if (handleEscapeKeydown && evt.code === 'Escape') {
                    handleEscapeKeydown();
                }
            };
            return _this;
        }
        WithOuterListeners.prototype.componentDidMount = function () {
            if (this.props.handleClickOutside) {
                document.addEventListener('click', this.handleClick, false);
            }
            if (this.props.handleEscapeKeydown) {
                document.addEventListener('keydown', this.handleKeydown, false);
            }
        };
        WithOuterListeners.prototype.componentWillUnmount = function () {
            if (this.props.handleClickOutside) {
                document.removeEventListener('click', this.handleClick, false);
            }
            if (this.props.handleEscapeKeydown) {
                document.removeEventListener('keydown', this.handleKeydown, false);
            }
        };
        WithOuterListeners.prototype.render = function () {
            return React.createElement(Component, tslib_1.__assign({}, this.props));
        };
        return WithOuterListeners;
    }(React.PureComponent));
}
exports.default = withOuterListeners;
//# sourceMappingURL=withOuterListeners.js.map