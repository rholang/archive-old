import { __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import { InactivityDetectorWrapper } from './styled';
import { findParentByClassname, hideControlsClassName } from '..';
var mouseMovementDelay = 2000;
/**
 * Hides all the child elements with `hideControlsClassName` classname when user is inactive,
 * which means he hasn't moved mouse over the component for `mouseMovementDelay` ms.
 * Exception is if user holding mouse over one of the hideable elements (those that have specified classname).
 *
 */
var InactivityDetector = /** @class */ (function (_super) {
    __extends(InactivityDetector, _super);
    function InactivityDetector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.contentWrapperElement = React.createRef();
        _this.state = {
            controlsAreVisible: true,
        };
        _this.clearTimeout = function () {
            if (_this.checkActivityTimeout) {
                window.clearTimeout(_this.checkActivityTimeout);
            }
        };
        _this.hideControls = function (element) { return function () {
            if (element) {
                var isOverHideableElement = findParentByClassname(element, hideControlsClassName, _this.contentWrapperElement.current || undefined);
                if (!isOverHideableElement) {
                    _this.setState({ controlsAreVisible: false });
                }
            }
            else {
                _this.setState({ controlsAreVisible: false });
            }
        }; };
        _this.checkMouseMovement = function (e) {
            var controlsAreVisible = _this.state.controlsAreVisible;
            _this.clearTimeout();
            // This check is needed to not trigger a render call on every movement.
            // Even if nothing will be re-renderer since the value is the same, it
            // will go into any children render method for nothing.
            if (!controlsAreVisible) {
                _this.setState({ controlsAreVisible: true });
            }
            _this.checkActivityTimeout = window.setTimeout(_this.hideControls(e && e.target), mouseMovementDelay);
        };
        return _this;
    }
    InactivityDetector.prototype.componentDidMount = function () {
        this.checkMouseMovement();
    };
    InactivityDetector.prototype.componentWillUnmount = function () {
        this.clearTimeout();
    };
    InactivityDetector.prototype.render = function () {
        var _this = this;
        var controlsAreVisible = this.state.controlsAreVisible;
        var children = this.props.children;
        return (React.createElement(InactivityDetectorWrapper, { innerRef: this.contentWrapperElement, controlsAreVisible: controlsAreVisible, onMouseMove: this.checkMouseMovement, onMouseOut: function () {
                // Do not pass element, hence forcing elements to be hidden.
                return _this.checkMouseMovement();
            }, onClick: this.checkMouseMovement }, children(this.checkMouseMovement)));
    };
    return InactivityDetector;
}(Component));
export { InactivityDetector };
//# sourceMappingURL=inactivityDetector.js.map