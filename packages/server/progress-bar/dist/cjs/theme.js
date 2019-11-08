"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var theme_1 = require("@atlaskit/theme");
var core_1 = require("@emotion/core");
var increasingBarAnimation = core_1.keyframes(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  from { left: -5%; width: 5%; }\n  to { left: 130%; width: 100%;}\n"], ["\n  from { left: -5%; width: 5%; }\n  to { left: 130%; width: 100%;}\n"])));
var decreasingBarAnimation = core_1.keyframes(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  from { left: -80%; width: 80%; }\n  to { left: 110%; width: 10%;}\n"], ["\n  from { left: -80%; width: 80%; }\n  to { left: 110%; width: 10%;}\n"])));
exports.Theme = theme_1.createTheme(function (props) { return ({
    container: {
        background: theme_1.colors.N40A,
        borderRadius: 3,
        height: 6,
        overflow: 'hidden',
        position: 'relative',
        width: "100%",
    },
    bar: {
        borderRadius: 3,
        display: 'block',
        height: 6,
        position: 'absolute',
        background: theme_1.colors.N500,
    },
    determinateBar: {
        transition: 'width 0.2s',
        width: Number(props.value) * 100 + "%",
    },
    increasingBar: {
        animation: increasingBarAnimation + " 2s infinite",
    },
    decreasingBar: {
        animation: decreasingBarAnimation + " 2s 0.5s infinite",
    },
}); });
var templateObject_1, templateObject_2;
//# sourceMappingURL=theme.js.map