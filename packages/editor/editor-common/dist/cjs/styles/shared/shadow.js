"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = require("styled-components");
var theme_1 = require("@atlaskit/theme");
var OverflowShadow_1 = require("../../ui/OverflowShadow");
var styles_1 = require("../../styles");
var shadowWidth = 8;
/**
 * TODO: This is close to working and removes a tone of JS from OverflowShadow component
 *
 *  background: linear-gradient(to right, white 30%, rgba(255, 255, 255, 0)),
 *         linear-gradient(to right, rgba(255, 255, 255, 0), white 70%) 100% 0,
 *        linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)),
 *         linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)) 100% 0;
 *       background-repeat: no-repeat;
 *       background-color: white;
 *       background-size: 40px 100%, 40px 100%, 14px 100%, 14px 100%;
 *
 *      background-attachment: local, local, scroll, scroll;
 */
var shadowSharedStyle = styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &\n    .", "::before,\n    .", "::after,\n    .", "::before,\n    .", "::after {\n    display: none;\n    position: absolute;\n    pointer-events: none;\n    z-index: ", ";\n    width: ", "px;\n    content: '';\n    /* Scrollbar is outside the content in IE, inset in other browsers. */\n    height: calc(100%);\n  }\n\n  & .", ", .", " {\n    position: relative;\n  }\n\n  & .", "::before {\n    background: linear-gradient(\n      to left,\n      rgba(99, 114, 130, 0) 0,\n      ", " 100%\n    );\n    top: 0px;\n    left: 0;\n    display: block;\n  }\n\n  & .", "::after {\n    background: linear-gradient(\n      to right,\n      rgba(99, 114, 130, 0) 0,\n      ", " 100%\n    );\n    left: calc(100% - ", "px);\n    top: 0px;\n    display: block;\n  }\n"], ["\n  &\n    .", "::before,\n    .", "::after,\n    .", "::before,\n    .", "::after {\n    display: none;\n    position: absolute;\n    pointer-events: none;\n    z-index: ", ";\n    width: ", "px;\n    content: '';\n    /* Scrollbar is outside the content in IE, inset in other browsers. */\n    height: calc(100%);\n  }\n\n  & .", ", .", " {\n    position: relative;\n  }\n\n  & .", "::before {\n    background: linear-gradient(\n      to left,\n      rgba(99, 114, 130, 0) 0,\n      ", " 100%\n    );\n    top: 0px;\n    left: 0;\n    display: block;\n  }\n\n  & .", "::after {\n    background: linear-gradient(\n      to right,\n      rgba(99, 114, 130, 0) 0,\n      ", " 100%\n    );\n    left: calc(100% - ", "px);\n    top: 0px;\n    display: block;\n  }\n"])), OverflowShadow_1.shadowClassNames.RIGHT_SHADOW, OverflowShadow_1.shadowClassNames.RIGHT_SHADOW, OverflowShadow_1.shadowClassNames.LEFT_SHADOW, OverflowShadow_1.shadowClassNames.LEFT_SHADOW, styles_1.akEditorSmallZIndex, shadowWidth, OverflowShadow_1.shadowClassNames.RIGHT_SHADOW, OverflowShadow_1.shadowClassNames.LEFT_SHADOW, OverflowShadow_1.shadowClassNames.LEFT_SHADOW, theme_1.colors.N40A, OverflowShadow_1.shadowClassNames.RIGHT_SHADOW, theme_1.colors.N40A, shadowWidth);
exports.shadowSharedStyle = shadowSharedStyle;
var templateObject_1;
//# sourceMappingURL=shadow.js.map