"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
exports.EditorIconWrapper = styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  flex: 0 0 16px;\n  height: 16px;\n  width: 16px;\n  color: ", ";\n  margin: 2px ", "px 0 0;\n\n  > span {\n    margin: -8px;\n  }\n"], ["\n  flex: 0 0 16px;\n  height: 16px;\n  width: 16px;\n  color: ",
    ";\n  margin: 2px ", "px 0 0;\n\n  > span {\n    margin: -8px;\n  }\n"])), function (props) {
    return props.showPlaceholder
        ? theme_1.colors.N100
        : theme_1.themed({ light: theme_1.colors.G300, dark: theme_1.colors.G200 });
}, theme_1.gridSize);
var templateObject_1;
//# sourceMappingURL=DecisionItem.js.map