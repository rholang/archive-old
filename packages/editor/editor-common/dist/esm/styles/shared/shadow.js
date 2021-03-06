import { __makeTemplateObject } from "tslib";
import { css } from 'styled-components';
import { colors } from '@atlaskit/theme';
import { shadowClassNames } from '../../ui/OverflowShadow';
import { akEditorSmallZIndex } from '../../styles';
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
var shadowSharedStyle = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &\n    .", "::before,\n    .", "::after,\n    .", "::before,\n    .", "::after {\n    display: none;\n    position: absolute;\n    pointer-events: none;\n    z-index: ", ";\n    width: ", "px;\n    content: '';\n    /* Scrollbar is outside the content in IE, inset in other browsers. */\n    height: calc(100%);\n  }\n\n  & .", ", .", " {\n    position: relative;\n  }\n\n  & .", "::before {\n    background: linear-gradient(\n      to left,\n      rgba(99, 114, 130, 0) 0,\n      ", " 100%\n    );\n    top: 0px;\n    left: 0;\n    display: block;\n  }\n\n  & .", "::after {\n    background: linear-gradient(\n      to right,\n      rgba(99, 114, 130, 0) 0,\n      ", " 100%\n    );\n    left: calc(100% - ", "px);\n    top: 0px;\n    display: block;\n  }\n"], ["\n  &\n    .", "::before,\n    .", "::after,\n    .", "::before,\n    .", "::after {\n    display: none;\n    position: absolute;\n    pointer-events: none;\n    z-index: ", ";\n    width: ", "px;\n    content: '';\n    /* Scrollbar is outside the content in IE, inset in other browsers. */\n    height: calc(100%);\n  }\n\n  & .", ", .", " {\n    position: relative;\n  }\n\n  & .", "::before {\n    background: linear-gradient(\n      to left,\n      rgba(99, 114, 130, 0) 0,\n      ", " 100%\n    );\n    top: 0px;\n    left: 0;\n    display: block;\n  }\n\n  & .", "::after {\n    background: linear-gradient(\n      to right,\n      rgba(99, 114, 130, 0) 0,\n      ", " 100%\n    );\n    left: calc(100% - ", "px);\n    top: 0px;\n    display: block;\n  }\n"])), shadowClassNames.RIGHT_SHADOW, shadowClassNames.RIGHT_SHADOW, shadowClassNames.LEFT_SHADOW, shadowClassNames.LEFT_SHADOW, akEditorSmallZIndex, shadowWidth, shadowClassNames.RIGHT_SHADOW, shadowClassNames.LEFT_SHADOW, shadowClassNames.LEFT_SHADOW, colors.N40A, shadowClassNames.RIGHT_SHADOW, colors.N40A, shadowWidth);
export { shadowSharedStyle };
var templateObject_1;
//# sourceMappingURL=shadow.js.map