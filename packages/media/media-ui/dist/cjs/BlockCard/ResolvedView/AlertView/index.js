"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var lodash_debounce_1 = tslib_1.__importDefault(require("lodash.debounce"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var ellipsify_1 = require("../../../ellipsify");
var styled_1 = require("./styled");
var contentWidthWhenCardIs400px = 384;
var AlertView = /** @class */ (function (_super) {
    tslib_1.__extends(AlertView, _super);
    function AlertView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        _this.handleRetry = function (event) {
            var onRetry = _this.props.onRetry;
            if (onRetry) {
                event.preventDefault();
                event.stopPropagation();
                onRetry();
            }
        };
        _this.handleDismis = function (event) {
            var onDismis = _this.props.onDismis;
            if (onDismis) {
                event.preventDefault();
                event.stopPropagation();
                onDismis();
            }
        };
        _this.handleMount = function (el) {
            if (el) {
                _this.el = el;
            }
        };
        _this.handleResize = lodash_debounce_1.default(function () {
            if (_this.el) {
                _this.setState({ width: _this.el.clientWidth });
            }
        }, 250);
        return _this;
    }
    AlertView.prototype.componentDidMount = function () {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    };
    AlertView.prototype.componentWillUnMount = function () {
        window.removeEventListener('resize', this.handleResize);
    };
    AlertView.prototype.renderContent = function () {
        var _a = this.props, type = _a.type, text = _a.text;
        var width = this.state.width;
        var txt = type === 'success' ? text : 'Something went wrong.';
        if (width && width < contentWidthWhenCardIs400px) {
            return React.createElement(ellipsify_1.Ellipsify, { text: txt, lines: 2, inline: true });
        }
        else {
            return React.createElement(ellipsify_1.Ellipsify, { text: txt, lines: 1, inline: true });
        }
    };
    AlertView.prototype.renderRetryAndCancel = function () {
        var type = this.props.type;
        if (type === 'success') {
            return null;
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(button_1.default, { appearance: "link", spacing: "none", onClick: this.handleRetry }, "Try again"),
            ' ',
            "or",
            ' ',
            React.createElement(button_1.default, { appearance: "link", spacing: "none", onClick: this.handleDismis }, "cancel"),
            "."));
    };
    AlertView.prototype.render = function () {
        var _a = this.props, type = _a.type, style = _a.style;
        return (React.createElement(styled_1.Wrapper, { innerRef: this.handleMount, type: type, style: style },
            this.renderContent(),
            " ",
            this.renderRetryAndCancel()));
    };
    return AlertView;
}(React.Component));
exports.default = AlertView;
//# sourceMappingURL=index.js.map