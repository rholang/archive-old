import { __extends } from "tslib";
import * as React from 'react';
import { PureComponent } from 'react';
import DropdownList from '@atlaskit/droplist';
import { Popup } from '@atlaskit/editor-common';
import withOuterListeners from '../with-outer-listeners';
/**
 * Wrapper around @atlaskit/droplist which uses Popup and Portal to render
 * droplist outside of "overflow: hidden" containers when needed.
 *
 * Also it controls popper's placement.
 */
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.handleRef = function (target) {
            _this.setState({ target: target || undefined });
        };
        _this.updatePopupPlacement = function (placement) {
            _this.setState({ popupPlacement: placement });
        };
        _this.state = {
            popupPlacement: ['bottom', 'left'],
        };
        return _this;
    }
    Dropdown.prototype.renderDropdown = function () {
        var _a = this.state, target = _a.target, popupPlacement = _a.popupPlacement;
        var _b = this.props, children = _b.children, mountTo = _b.mountTo, boundariesElement = _b.boundariesElement, scrollableElement = _b.scrollableElement, onOpenChange = _b.onOpenChange, fitHeight = _b.fitHeight, fitWidth = _b.fitWidth, zIndex = _b.zIndex;
        return (React.createElement(Popup, { target: target, mountTo: mountTo, boundariesElement: boundariesElement, scrollableElement: scrollableElement, onPlacementChanged: this.updatePopupPlacement, fitHeight: fitHeight, fitWidth: fitWidth, zIndex: zIndex },
            React.createElement("div", { style: { height: 0, minWidth: fitWidth || 0 } },
                React.createElement(DropdownList, { isOpen: true, onOpenChange: onOpenChange, appearance: "tall", position: popupPlacement.join(' '), shouldFlip: false, shouldFitContainer: true }, children))));
    };
    Dropdown.prototype.render = function () {
        var _a = this.props, trigger = _a.trigger, isOpen = _a.isOpen;
        return (React.createElement("div", null,
            React.createElement("div", { ref: this.handleRef }, trigger),
            isOpen ? this.renderDropdown() : null));
    };
    return Dropdown;
}(PureComponent));
export { Dropdown };
var DropdownWithOuterListeners = withOuterListeners(Dropdown);
export default DropdownWithOuterListeners;
//# sourceMappingURL=index.js.map