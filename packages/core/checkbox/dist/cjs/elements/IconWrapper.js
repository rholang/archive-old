"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var core_1 = require("@emotion/core");
var utils_1 = require("../utils");
var disabledBorder = function (iconTokens) { return ({
    stroke: iconTokens.borderColor.disabled,
    strokeWidth: iconTokens.borderWidth,
}); };
var activeBorder = function (iconTokens) { return ({
    stroke: iconTokens.borderColor.active,
    strokeWidth: iconTokens.borderWidth,
}); };
var hoveredAndCheckedBorder = function (iconTokens) { return ({
    stroke: iconTokens.borderColor.hoveredAndChecked,
    strokeWidth: iconTokens.borderWidth,
}); };
var hoveredBorder = function (iconTokens) { return ({
    stroke: iconTokens.borderColor.hovered,
    strokeWidth: iconTokens.borderWidth,
}); };
var checkedBorder = function (iconTokens) { return ({
    stroke: iconTokens.borderColor.checked,
    strokeWidth: iconTokens.borderWidth,
}); };
var focusedBorder = function (iconTokens) { return ({
    stroke: iconTokens.borderColor.focused,
    strokeWidth: iconTokens.borderWidth,
}); };
var invalidBorder = function (iconTokens) { return ({
    stroke: iconTokens.borderColor.invalid,
    strokeWidth: iconTokens.borderWidth,
}); };
var getBorderColor = function (_a) {
    var tokens = _a.tokens, props = tslib_1.__rest(_a, ["tokens"]);
    if (props.isDisabled) {
        return disabledBorder(tokens.icon);
    }
    if (props.isActive) {
        return activeBorder(tokens.icon);
    }
    if (props.isHovered && props.isChecked) {
        return hoveredAndCheckedBorder(tokens.icon);
    }
    if (props.isHovered) {
        return hoveredBorder(tokens.icon);
    }
    if (props.isChecked) {
        return checkedBorder(tokens.icon);
    }
    if (props.isFocused) {
        return focusedBorder(tokens.icon);
    }
    if (props.isInvalid) {
        return invalidBorder(tokens.icon);
    }
    return {
        stroke: tokens.icon.borderColor.rest,
        strokeWidth: tokens.icon.borderWidth,
    };
};
var getTickColor = function (props) {
    var isChecked = props.isChecked, isDisabled = props.isDisabled, isActive = props.isActive, icon = props.tokens.icon;
    var color = icon.tickColor.checked;
    if (isDisabled && isChecked) {
        color = icon.tickColor.disabledAndChecked;
    }
    else if (isActive && isChecked && !isDisabled) {
        color = icon.tickColor.activeAndChecked;
    }
    else if (!isChecked) {
        color = icon.tickColor.rest;
    }
    return color;
};
var getBoxColor = function (props) {
    var isChecked = props.isChecked, isDisabled = props.isDisabled, isActive = props.isActive, isHovered = props.isHovered, icon = props.tokens.icon;
    // set the default
    var color = icon.boxColor.rest;
    if (isDisabled) {
        color = icon.boxColor.disabled;
    }
    else if (isActive) {
        color = icon.boxColor.active;
    }
    else if (isHovered && isChecked) {
        color = icon.boxColor.hoveredAndChecked;
    }
    else if (isHovered) {
        color = icon.boxColor.hovered;
    }
    else if (isChecked) {
        color = icon.boxColor.checked;
    }
    return color;
};
exports.iconWrapperCSS = function (props) { return ({
    lineHeight: 0,
    flexShrink: 0,
    color: getBoxColor(props),
    fill: getTickColor(props),
    transition: 'all 0.2s ease-in-out;',
    /* This is adding a property to the inner svg, to add a border to the checkbox */
    '& rect:first-of-type': tslib_1.__assign({ transition: 'stroke 0.2s ease-in-out;' }, getBorderColor(props)),
    /**
     * Need to set the Icon component wrapper to flex to avoid a scrollbar bug which
     * happens when checkboxes are flex items in a parent with overflow.
     * See AK-6321 for more details.
     **/
    '> span': {
        display: 'flex',
    },
}); };
function IconWrapper(_a) {
    var attributesFn = _a.attributesFn, cssFn = _a.cssFn, children = _a.children, props = tslib_1.__rest(_a, ["attributesFn", "cssFn", "children"]);
    return (core_1.jsx("span", tslib_1.__assign({ css: cssFn(props) }, attributesFn(props), { children: children })));
}
exports.IconWrapper = IconWrapper;
exports.default = {
    component: IconWrapper,
    cssFn: exports.iconWrapperCSS,
    attributesFn: utils_1.defaultAttributesFn,
};
//# sourceMappingURL=IconWrapper.js.map