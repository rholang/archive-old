import { __assign, __extends, __read, __spread } from "tslib";
import React, { Component } from 'react';
import { getDisplayName } from '../utils';
export default function withPseudoState(WrappedComponent) {
    var _a;
    return _a = /** @class */ (function (_super) {
            __extends(ComponentWithPseudoState, _super);
            function ComponentWithPseudoState() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.component = null;
                _this.actionKeys = [];
                _this.state = {
                    isActive: Boolean(_this.props.isActive),
                    isFocus: Boolean(_this.props.isActive),
                    isHover: Boolean(_this.props.isActive),
                    isInteractive: Boolean(_this.props.href || _this.props.isInteractive || _this.props.onClick),
                };
                _this.blur = function () {
                    // @ts-ignore reaching into the instance
                    if (_this.component && _this.component.blur)
                        _this.component.blur();
                };
                _this.focus = function () {
                    // @ts-ignore reaching into the instance
                    if (_this.component && _this.component.focus)
                        _this.component.focus();
                };
                _this.setComponent = function (component) {
                    _this.component = component;
                };
                _this.onBlur = function () {
                    var _a;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this.setState({ isActive: false, isFocus: false });
                    if (_this.props.onBlur) {
                        (_a = _this.props).onBlur.apply(_a, __spread(args));
                    }
                };
                _this.onFocus = function () {
                    var _a;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this.setState({ isFocus: true });
                    if (_this.props.onFocus) {
                        (_a = _this.props).onFocus.apply(_a, __spread(args));
                    }
                };
                _this.onMouseLeave = function () {
                    var _a;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this.setState({ isActive: false, isHover: false });
                    if (_this.props.onMouseLeave) {
                        (_a = _this.props).onMouseLeave.apply(_a, __spread(args));
                    }
                };
                _this.onMouseEnter = function () {
                    var _a;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this.setState({ isHover: true });
                    if (_this.props.onMouseEnter) {
                        (_a = _this.props).onMouseEnter.apply(_a, __spread(args));
                    }
                };
                _this.onMouseUp = function () {
                    var _a;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this.setState({ isActive: false });
                    if (_this.props.onMouseUp) {
                        (_a = _this.props).onMouseUp.apply(_a, __spread(args));
                    }
                };
                _this.onMouseDown = function () {
                    var _a;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this.setState({ isActive: true });
                    if (_this.props.onMouseDown) {
                        (_a = _this.props).onMouseDown.apply(_a, __spread(args));
                    }
                };
                _this.onKeyDown = function (event) {
                    var _a;
                    var rest = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        rest[_i - 1] = arguments[_i];
                    }
                    if (_this.actionKeys.indexOf(event.key) > -1) {
                        _this.setState({ isActive: true });
                    }
                    if (_this.props.onKeyDown) {
                        (_a = _this.props).onKeyDown.apply(_a, __spread([event], rest));
                    }
                };
                _this.onKeyUp = function (event) {
                    var _a;
                    var rest = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        rest[_i - 1] = arguments[_i];
                    }
                    if (_this.actionKeys.indexOf(event.key) > -1) {
                        _this.setState({ isActive: false });
                    }
                    if (_this.props.onKeyUp) {
                        (_a = _this.props).onKeyUp.apply(_a, __spread([event], rest));
                    }
                };
                return _this;
            }
            ComponentWithPseudoState.prototype.UNSAFE_componentWillMount = function () {
                var _a = this.props, href = _a.href, isInteractive = _a.isInteractive, onClick = _a.onClick;
                if (href || isInteractive || onClick) {
                    this.actionKeys = onClick || isInteractive ? ['Enter', ' '] : ['Enter'];
                }
            };
            ComponentWithPseudoState.prototype.render = function () {
                return (React.createElement(WrappedComponent, __assign({ ref: this.setComponent }, this.state, this.props, this.state.isInteractive && {
                    onBlur: this.onBlur,
                    onFocus: this.onFocus,
                    onMouseLeave: this.onMouseLeave,
                    onMouseEnter: this.onMouseEnter,
                    onMouseUp: this.onMouseUp,
                    onMouseDown: this.onMouseDown,
                    onKeyDown: this.onKeyDown,
                    onKeyUp: this.onKeyUp,
                })));
            };
            return ComponentWithPseudoState;
        }(Component)),
        _a.displayName = getDisplayName('withPseudoState', WrappedComponent),
        _a;
}
//# sourceMappingURL=withPseudoState.js.map