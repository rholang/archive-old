import { __makeTemplateObject } from "tslib";
import styled, { css, keyframes } from 'styled-components';
import { layers } from '@atlaskit/theme/constants';
import { P300 } from '@atlaskit/theme/colors';
// NOTE:
// Pulse color "rgb(101, 84, 192)" derived from "colors.P300"
var baseShadow = "0 0 0 2px " + P300;
var easing = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)';
var pulseKeframes = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0%, 33% { box-shadow: ", ", 0 0 0 rgba(101, 84, 192, 1) }\n  66%, 100% { box-shadow: ", ", 0 0 0 10px rgba(101, 84, 192, 0.01) }\n"], ["\n  0%, 33% { box-shadow: ", ", 0 0 0 rgba(101, 84, 192, 1) }\n  66%, 100% { box-shadow: ", ", 0 0 0 10px rgba(101, 84, 192, 0.01) }\n"])), baseShadow, baseShadow);
var animation = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 3000ms ", " infinite;\n"], ["\n  animation: ", " 3000ms ", " infinite;\n"])), pulseKeframes, easing);
// IE11 and Edge: z-index needed because fixed position calculates z-index relative
// to body instead of nearest stacking context (Portal in our case).
export var Div = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  z-index: ", ";\n\n  ", "\n  ", "\n"], ["\n  z-index: ", ";\n\n  ", "\n  ",
    "\n"])), layers.spotlight() + 1, function (p) { return (p.bgColor ? "background-color: " + p.bgColor + ";" : null); }, function (p) {
    return p.radius ? "border-radius: " + p.radius + "px;" : null;
});
export var TargetInner = styled(Div)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (_a) {
    var pulse = _a.pulse;
    return (pulse ? animation : null);
});
export var TargetOverlay = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  cursor: ", ";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"], ["\n  cursor: ", ";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"])), function (p) { return (p.onClick ? 'pointer' : 'auto'); });
// exported for consumer
export var Pulse = styled(Div)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  ", ";\n"], ["\n  position: absolute;\n  ", ";\n"])), animation);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Target.js.map