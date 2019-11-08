"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var theme_1 = require("@atlaskit/theme");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var types_1 = require("../../types");
var mentionStyle = (_a = {},
    _a[types_1.MentionType.SELF] = {
        background: theme_1.themed({ light: theme_1.colors.B400, dark: theme_1.colors.B200 }),
        border: 'transparent',
        text: theme_1.themed({ light: theme_1.colors.N20, dark: theme_1.colors.DN30 }),
    },
    _a[types_1.MentionType.RESTRICTED] = {
        background: 'transparent',
        border: theme_1.themed({ light: theme_1.colors.N500, dark: theme_1.colors.DN80 }),
        text: theme_1.themed({ light: theme_1.colors.N500, dark: theme_1.colors.DN100 }),
    },
    _a[types_1.MentionType.DEFAULT] = {
        background: theme_1.themed({ light: theme_1.colors.N30A, dark: theme_1.colors.DN80 }),
        border: 'transparent',
        text: theme_1.themed({ light: theme_1.colors.N500, dark: theme_1.colors.DN800 }),
    },
    _a);
var getStyle = function (props, property) {
    var obj = mentionStyle[props.mentionType][property];
    // themed() returns a function
    return typeof obj === 'string' ? obj : obj(props);
};
exports.MentionStyle = styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), function (props) { return "\n  display: inline;\n  background: " + getStyle(props, 'background') + ";\n  border: 1px solid " + getStyle(props, 'border') + ";\n  border-radius: 20px;\n  color: " + getStyle(props, 'text') + ";\n  cursor: pointer;\n  padding: 0 0.3em 2px 0.23em;\n  line-height: 1.714;\n  font-size: 1em;\n  font-weight: normal;\n  word-break: break-word;\n"; });
var templateObject_1;
//# sourceMappingURL=styles.js.map