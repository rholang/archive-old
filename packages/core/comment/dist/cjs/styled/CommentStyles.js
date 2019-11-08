"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
var ThemeColor = {
    text: {
        default: colors_1.N800,
        disabled: colors_1.N100A,
    },
};
exports.Content = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  margin-top: ", "px;\n"], ["\n  color: ",
    ";\n  margin-top: ", "px;\n"])), function (p) {
    return p.isDisabled ? ThemeColor.text.disabled : ThemeColor.text.default;
}, constants_1.gridSize() / 2);
var templateObject_1;
//# sourceMappingURL=CommentStyles.js.map