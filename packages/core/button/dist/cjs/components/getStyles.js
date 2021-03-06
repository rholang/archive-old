"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var constants_1 = require("@atlaskit/theme/constants");
var theme_1 = require("../theme");
var compactButtonHeight = (constants_1.gridSize() * 3) / constants_1.fontSize() + "em";
var buttonHeight = (constants_1.gridSize() * 4) / constants_1.fontSize() + "em";
/** Background */
var getBackground = function (props) {
    return theme_1.applyPropertyStyle('background', props, theme_1.baseTheme);
};
/** Box Shadow */
var getBoxShadow = function (props) {
    var boxShadowColor = theme_1.applyPropertyStyle('boxShadowColor', props, theme_1.baseTheme);
    return "0 0 0 2px " + boxShadowColor;
};
/** Color */
var getColor = function (props) {
    return theme_1.applyPropertyStyle('color', props, theme_1.baseTheme);
};
/** Cursor */
var getCursor = function (_a) {
    var _b = _a.state, state = _b === void 0 ? 'default' : _b;
    return state === 'hover' || state === 'active' || state === 'selected'
        ? 'pointer'
        : state === 'disabled'
            ? 'not-allowed'
            : 'default';
};
/** Height */
var getHeight = function (_a) {
    var _b = _a.spacing, spacing = _b === void 0 ? 'default' : _b;
    return spacing === 'compact'
        ? compactButtonHeight
        : spacing === 'none'
            ? 'auto'
            : buttonHeight;
};
/** Line Height */
var getLineHeight = function (_a) {
    var _b = _a.spacing, spacing = _b === void 0 ? 'default' : _b;
    return spacing === 'compact'
        ? compactButtonHeight
        : spacing === 'none'
            ? 'inherit'
            : buttonHeight;
};
/** Padding */
var getPadding = function (_a) {
    var _b = _a.spacing, spacing = _b === void 0 ? 'default' : _b;
    return spacing === 'none' ? 0 : "0 " + constants_1.gridSize() + "px";
};
/** Text Decoration */
var getTextDecoration = function (_a) {
    var _b = _a.appearance, appearance = _b === void 0 ? 'default' : _b, _c = _a.state, state = _c === void 0 ? 'default' : _c;
    return state === 'hover' && (appearance === 'link' || appearance === 'subtle-link')
        ? 'underline'
        : 'inherit';
};
/** Transition */
var getTransition = function (_a) {
    var _b = _a.state, state = _b === void 0 ? 'default' : _b;
    return state === 'hover'
        ? 'background 0s ease-out, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38)'
        : 'background 0.1s ease-out, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38)';
};
/** Transition Duration */
var getTransitionDuration = function (_a) {
    var _b = _a.state, state = _b === void 0 ? 'default' : _b;
    return state === 'active' ? '0s' : state === 'focus' ? '0s, 0.2s' : '0.1s, 0.15s';
};
/** Vertical Align */
var getVerticalAlign = function (_a) {
    var _b = _a.spacing, spacing = _b === void 0 ? 'default' : _b;
    return spacing === 'none' ? 'baseline' : 'middle';
};
/** Width */
var getWidth = function (_a) {
    var shouldFitContainer = _a.shouldFitContainer;
    return shouldFitContainer ? '100%' : 'auto';
};
/** Base styles */
var staticStyles = {
    alignItems: 'baseline',
    borderWidth: 0,
    boxSizing: 'border-box',
    display: 'inline-flex',
    fontSize: 'inherit',
    fontStyle: 'normal',
    fontWeight: 'normal',
    maxWidth: '100%',
    outline: 'none !important',
    textAlign: 'center',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
};
/**
 * BUTTON STYLES
 */
exports.getButtonStyles = function (props) { return (tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, staticStyles), { background: getBackground(props), borderRadius: constants_1.borderRadius() + "px", boxShadow: getBoxShadow(props), color: getColor(props) + " !important", cursor: getCursor(props), height: getHeight(props), lineHeight: getLineHeight(props), padding: getPadding(props), transition: getTransition(props), transitionDuration: getTransitionDuration(props), verticalAlign: getVerticalAlign(props), width: getWidth(props), '&::-moz-focus-inner': {
        border: 0,
        margin: 0,
        padding: 0,
    }, '&:hover': {
        textDecoration: getTextDecoration(props),
    } }), (props.isLoading && { pointerEvents: 'none' }))); };
/**
 * SPINNER STYLES
 */
exports.getSpinnerStyles = function () { return ({
    display: 'flex',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
}); };
//# sourceMappingURL=getStyles.js.map