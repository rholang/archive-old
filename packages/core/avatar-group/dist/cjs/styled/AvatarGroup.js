"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
var avatar_1 = require("@atlaskit/avatar");
var gutterUnitless = constants_1.gridSize() / 2;
var gutter = gutterUnitless + "px";
exports.Grid = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  line-height: 1;\n  margin-left: -", ";\n  margin-right: -", ";\n\n  > * {\n    margin-bottom: ", ";\n    padding-left: ", ";\n    padding-right: ", ";\n  }\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  line-height: 1;\n  margin-left: -", ";\n  margin-right: -", ";\n\n  > * {\n    margin-bottom: ", ";\n    padding-left: ", ";\n    padding-right: ", ";\n  }\n"])), gutter, gutter, constants_1.gridSize, gutter, gutter);
exports.Stack = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  line-height: 1;\n  /* Balance the negative margin of the children */\n  margin-right: ", "px;\n\n  > * {\n    margin-right: -", "px;\n  }\n"], ["\n  display: flex;\n  line-height: 1;\n  /* Balance the negative margin of the children */\n  margin-right: ", "px;\n\n  > * {\n    margin-right: -", "px;\n  }\n"])), function (props) { return avatar_1.BORDER_WIDTH[props.size] * 2 + gutterUnitless; }, function (props) { return avatar_1.BORDER_WIDTH[props.size] * 2 + gutterUnitless; });
function getBackgroundColor(_a) {
    var isActive = _a.isActive, isHover = _a.isHover;
    var themedBackgroundColor = colors_1.backgroundOnLayer;
    if (isHover) {
        themedBackgroundColor = colors_1.backgroundHover;
    }
    if (isActive) {
        themedBackgroundColor = colors_1.backgroundActive;
    }
    return themedBackgroundColor;
}
exports.getBackgroundColor = getBackgroundColor;
var templateObject_1, templateObject_2;
//# sourceMappingURL=AvatarGroup.js.map