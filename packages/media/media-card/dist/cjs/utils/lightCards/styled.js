"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var media_ui_1 = require("@atlaskit/media-ui");
var components_1 = require("@atlaskit/theme/components");
var colors_1 = require("@atlaskit/theme/colors");
exports.blinkLoadingAnimation = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  0%{\n    opacity: 1;\n  }\n\n  50%{\n    opacity: 0.6;\n  }\n\n  100%{\n    opacity: 1;\n  }\n"], ["\n  0%{\n    opacity: 1;\n  }\n\n  50%{\n    opacity: 0.6;\n  }\n\n  100%{\n    opacity: 1;\n  }\n"])));
exports.Wrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", " background: ", ";\n  color: ", ";\n  ", "\n  max-height: 100%;\n  max-width: 100%;\n \n  ", "\n  > span {\n    animation: ", " 0.8s infinite;\n  }\n"], ["\n  ", " background: ", ";\n  color: ", ";\n  ", "\n  max-height: 100%;\n  max-width: 100%;\n \n  ",
    "\n  > span {\n    animation: ", " 0.8s infinite;\n  }\n"])), media_ui_1.center, components_1.themed({ light: colors_1.N20, dark: colors_1.DN50 }), components_1.themed({ light: colors_1.N50, dark: colors_1.DN100 }), media_ui_1.borderRadius, function (props) {
    return "\n      width: " + props.dimensions.width + ";\n      height: " + props.dimensions.height + ";\n    ";
}, exports.blinkLoadingAnimation);
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map