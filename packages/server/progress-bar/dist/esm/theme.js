import { __makeTemplateObject } from "tslib";
import { createTheme, colors } from '@atlaskit/theme';
import { keyframes } from '@emotion/core';
var increasingBarAnimation = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from { left: -5%; width: 5%; }\n  to { left: 130%; width: 100%;}\n"], ["\n  from { left: -5%; width: 5%; }\n  to { left: 130%; width: 100%;}\n"])));
var decreasingBarAnimation = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  from { left: -80%; width: 80%; }\n  to { left: 110%; width: 10%;}\n"], ["\n  from { left: -80%; width: 80%; }\n  to { left: 110%; width: 10%;}\n"])));
export var Theme = createTheme(function (props) { return ({
    container: {
        background: colors.N40A,
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
        background: colors.N500,
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