"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var components_1 = require("@atlaskit/theme/components");
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
var backgroundColor = components_1.themed({
    light: colors_1.N800,
    dark: colors_1.DN0,
});
var textColor = components_1.themed({
    light: colors_1.N0,
    dark: colors_1.DN600,
});
var truncate = function (p) {
    return p.truncate
        ? styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n        max-width: 420px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      "], ["\n        max-width: 420px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      "]))) : '';
};
exports.TooltipPrimitive = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  z-index: ", ";\n  pointer-events: none;\n  position: fixed;\n"], ["\n  z-index: ", ";\n  pointer-events: none;\n  position: fixed;\n"])), constants_1.layers.tooltip);
exports.Tooltip = styled_components_1.default(exports.TooltipPrimitive)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", "px;\n  box-sizing: border-box;\n  color: ", ";\n  font-size: 12px;\n  left: 0;\n  line-height: 1.3;\n  max-width: 240px;\n  padding: 2px 6px;\n  top: 0;\n  /* Edge does not support overflow-wrap */\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  ", ";\n"], ["\n  background-color: ", ";\n  border-radius: ", "px;\n  box-sizing: border-box;\n  color: ", ";\n  font-size: 12px;\n  left: 0;\n  line-height: 1.3;\n  max-width: 240px;\n  padding: 2px 6px;\n  top: 0;\n  /* Edge does not support overflow-wrap */\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  ", ";\n"])), backgroundColor, constants_1.borderRadius, textColor, truncate);
// The inline-block here is needed to keep the tooltip appearing in the correct position
// when nested inside a wider parent (see position: relative example).
exports.Target = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  display: inline-block;\n"], ["\n  display: inline-block;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map