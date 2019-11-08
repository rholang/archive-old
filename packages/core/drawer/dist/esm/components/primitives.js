/** @jsx jsx */
import { __assign, __extends, __rest } from "tslib";
import { Component } from 'react';
import { layers, gridSize } from '@atlaskit/theme/constants';
import { N0, N500, N30A, B50 } from '@atlaskit/theme/colors';
import ArrowLeft from '@atlaskit/icon/glyph/arrow-left';
import { jsx } from '@emotion/core';
import { Slide } from './transitions';
// Misc.
// ------------------------------
var widths = {
    full: '100vw',
    extended: '95vw',
    narrow: 45 * gridSize(),
    medium: 60 * gridSize(),
    wide: 75 * gridSize(),
};
// Wrapper
// ------------------------------
var Wrapper = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 'narrow' : _b, shouldUnmountOnExit = _a.shouldUnmountOnExit, props = __rest(_a, ["width", "shouldUnmountOnExit"]);
    return (jsx("div", __assign({ css: {
            backgroundColor: N0,
            display: 'flex',
            height: '100vh',
            left: 0,
            overflow: 'hidden',
            position: 'fixed',
            top: 0,
            width: widths[width],
            zIndex: layers.blanket() + 1,
        } }, props)));
};
// Content
// ------------------------------
var Content = function (props) { return (jsx("div", __assign({ css: { flex: 1, marginTop: 3 * gridSize(), overflow: 'auto' } }, props))); };
// Sidebar / Icons etc.
// ------------------------------
var Sidebar = function (props) {
    return (jsx("div", __assign({ css: {
            alignItems: 'center',
            boxSizing: 'border-box',
            color: N500,
            display: 'flex',
            flexShrink: 0,
            flexDirection: 'column',
            height: '100vh',
            paddingBottom: 2 * gridSize(),
            paddingTop: 3 * gridSize(),
            width: 8 * gridSize(),
        } }, props)));
};
var IconWrapper = function (props) { return (jsx("button", __assign({ type: "button", css: {
        alignItems: 'center',
        background: 0,
        border: 0,
        borderRadius: '50%',
        color: 'inherit',
        cursor: props.onClick ? 'pointer' : undefined,
        display: 'flex',
        fontSize: 'inherit',
        height: 5 * gridSize(),
        justifyContent: 'center',
        lineHeight: 1,
        marginBottom: 2 * gridSize(),
        padding: 0,
        width: 5 * gridSize(),
        '&:hover': {
            backgroundColor: props.onClick ? N30A : undefined,
        },
        '&:active': {
            backgroundColor: props.onClick ? B50 : undefined,
            outline: 0,
        },
    } }, props))); };
var DrawerPrimitive = /** @class */ (function (_super) {
    __extends(DrawerPrimitive, _super);
    function DrawerPrimitive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DrawerPrimitive.prototype.render = function () {
        var _a = this.props, children = _a.children, Icon = _a.icon, onClose = _a.onClose, onCloseComplete = _a.onCloseComplete, props = __rest(_a, ["children", "icon", "onClose", "onCloseComplete"]);
        return (jsx(Slide, __assign({ component: Wrapper, onExited: onCloseComplete }, props),
            jsx(Sidebar, null,
                jsx(IconWrapper, { onClick: onClose, "data-test-selector": "DrawerPrimitiveSidebarCloseButton" }, Icon ? jsx(Icon, { size: "large" }) : jsx(ArrowLeft, { label: "Close drawer" }))),
            jsx(Content, null, children)));
    };
    return DrawerPrimitive;
}(Component));
export default DrawerPrimitive;
//# sourceMappingURL=primitives.js.map