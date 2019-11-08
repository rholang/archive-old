"use strict";
/** @jsx jsx */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
var arrow_left_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/arrow-left"));
var core_1 = require("@emotion/core");
var transitions_1 = require("./transitions");
// Misc.
// ------------------------------
var widths = {
    full: '100vw',
    extended: '95vw',
    narrow: 45 * constants_1.gridSize(),
    medium: 60 * constants_1.gridSize(),
    wide: 75 * constants_1.gridSize(),
};
// Wrapper
// ------------------------------
var Wrapper = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 'narrow' : _b, shouldUnmountOnExit = _a.shouldUnmountOnExit, props = tslib_1.__rest(_a, ["width", "shouldUnmountOnExit"]);
    return (core_1.jsx("div", tslib_1.__assign({ css: {
            backgroundColor: colors_1.N0,
            display: 'flex',
            height: '100vh',
            left: 0,
            overflow: 'hidden',
            position: 'fixed',
            top: 0,
            width: widths[width],
            zIndex: constants_1.layers.blanket() + 1,
        } }, props)));
};
// Content
// ------------------------------
var Content = function (props) { return (core_1.jsx("div", tslib_1.__assign({ css: { flex: 1, marginTop: 3 * constants_1.gridSize(), overflow: 'auto' } }, props))); };
// Sidebar / Icons etc.
// ------------------------------
var Sidebar = function (props) {
    return (core_1.jsx("div", tslib_1.__assign({ css: {
            alignItems: 'center',
            boxSizing: 'border-box',
            color: colors_1.N500,
            display: 'flex',
            flexShrink: 0,
            flexDirection: 'column',
            height: '100vh',
            paddingBottom: 2 * constants_1.gridSize(),
            paddingTop: 3 * constants_1.gridSize(),
            width: 8 * constants_1.gridSize(),
        } }, props)));
};
var IconWrapper = function (props) { return (core_1.jsx("button", tslib_1.__assign({ type: "button", css: {
        alignItems: 'center',
        background: 0,
        border: 0,
        borderRadius: '50%',
        color: 'inherit',
        cursor: props.onClick ? 'pointer' : undefined,
        display: 'flex',
        fontSize: 'inherit',
        height: 5 * constants_1.gridSize(),
        justifyContent: 'center',
        lineHeight: 1,
        marginBottom: 2 * constants_1.gridSize(),
        padding: 0,
        width: 5 * constants_1.gridSize(),
        '&:hover': {
            backgroundColor: props.onClick ? colors_1.N30A : undefined,
        },
        '&:active': {
            backgroundColor: props.onClick ? colors_1.B50 : undefined,
            outline: 0,
        },
    } }, props))); };
var DrawerPrimitive = /** @class */ (function (_super) {
    tslib_1.__extends(DrawerPrimitive, _super);
    function DrawerPrimitive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DrawerPrimitive.prototype.render = function () {
        var _a = this.props, children = _a.children, Icon = _a.icon, onClose = _a.onClose, onCloseComplete = _a.onCloseComplete, props = tslib_1.__rest(_a, ["children", "icon", "onClose", "onCloseComplete"]);
        return (core_1.jsx(transitions_1.Slide, tslib_1.__assign({ component: Wrapper, onExited: onCloseComplete }, props),
            core_1.jsx(Sidebar, null,
                core_1.jsx(IconWrapper, { onClick: onClose, "data-test-selector": "DrawerPrimitiveSidebarCloseButton" }, Icon ? core_1.jsx(Icon, { size: "large" }) : core_1.jsx(arrow_left_1.default, { label: "Close drawer" }))),
            core_1.jsx(Content, null, children)));
    };
    return DrawerPrimitive;
}(react_1.Component));
exports.default = DrawerPrimitive;
//# sourceMappingURL=primitives.js.map