"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_transition_group_1 = require("react-transition-group");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("./constants");
var styledContainer_1 = tslib_1.__importDefault(require("./styledContainer"));
var styledSvg_1 = tslib_1.__importDefault(require("./styledSvg"));
var Outer = styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: inline-block;\n  vertical-align: middle;\n"], ["\n  display: inline-block;\n  vertical-align: middle;\n"])));
Outer.displayName = 'Outer';
var Spinner = /** @class */ (function (_super) {
    tslib_1.__extends(Spinner, _super);
    function Spinner(props) {
        var _this = _super.call(this, props) || this;
        _this.transitionNode = null;
        _this.enter = function () {
            var delay = _this.props.delay;
            if (delay) {
                _this.setState({ phase: 'DELAY' });
            }
            else {
                _this.setState({ phase: 'ENTER' });
            }
        };
        _this.idle = function () {
            _this.setState({ phase: 'IDLE' });
        };
        _this.exit = function () {
            _this.setState({ phase: 'LEAVE' });
        };
        _this.endListener = function (node, done) {
            var executeCallback = function (event) {
                // ignore animation events on the glyph
                if (event.target.tagName === 'svg') {
                    return;
                }
                if (_this.state.phase === 'DELAY') {
                    _this.setState({ phase: 'ENTER' });
                    _this.endListener(node, done);
                }
                else {
                    done();
                }
                return node && node.removeEventListener('animationend', executeCallback);
            };
            // FIX - jest-emotion doesn't recognise the DOM node so it can't add
            // the eventListener in the @atlaskit/button tests.
            // Should be fixed when we move to emotion@10
            if (node && node.addEventListener) {
                return node.addEventListener('animationend', executeCallback);
            }
            return done();
        };
        _this.validateSize = function () {
            var size = _this.props.size;
            var spinnerSize = constants_1.SIZES_MAP[size] || size;
            return typeof spinnerSize === 'number' ? spinnerSize : constants_1.DEFAULT_SIZE;
        };
        _this.state = {
            phase: '',
        };
        return _this;
    }
    Spinner.prototype.render = function () {
        var _this = this;
        var phase = this.state.phase;
        var _a = this.props, delay = _a.delay, invertColor = _a.invertColor, isCompleting = _a.isCompleting, testId = _a.testId;
        var size = this.validateSize();
        var strokeWidth = Math.round(size / 10);
        var strokeRadius = size / 2 - strokeWidth / 2;
        return (react_1.default.createElement(Outer, null,
            react_1.default.createElement(react_transition_group_1.Transition, { addEndListener: this.endListener, appear: true, in: !isCompleting, mountOnEnter: true, unmountOnExit: true, onEnter: this.enter, onEntered: this.idle, onExit: this.exit, onExited: function () { return _this.props.onComplete(); }, timeout: 0, ref: function (node) {
                    _this.transitionNode = node;
                } },
                react_1.default.createElement(styledContainer_1.default, { delay: delay / 1000, phase: phase, size: size, "data-testid": testId },
                    react_1.default.createElement(styledSvg_1.default, { focusable: "false", height: size, invertColor: invertColor, phase: phase, size: size, viewBox: "0 0 " + size + " " + size, width: size, xmlns: "http://www.w3.org/2000/svg" },
                        react_1.default.createElement("circle", { cx: size / 2, cy: size / 2, r: strokeRadius }))))));
    };
    Spinner.defaultProps = {
        delay: 100,
        isCompleting: false,
        invertColor: false,
        onComplete: function () { },
        size: 'medium',
    };
    return Spinner;
}(react_1.Component));
exports.default = Spinner;
var templateObject_1;
//# sourceMappingURL=index.js.map