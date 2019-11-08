"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var verticalMarginSize = constants_1.gridSize() * 6;
var columnWidth = constants_1.gridSize() * 8;
var gutter = constants_1.gridSize() * 2;
var wideContainerWidth = columnWidth * 6 + gutter * 5;
var narrowContainerWidth = columnWidth * 4 + gutter * 3;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  margin: ", "px auto;\n  text-align: center;\n  /* Use max-width so the component can shrink on smaller viewports. */\n  max-width: ", "px;\n"], ["\n  margin: ", "px auto;\n  text-align: center;\n  /* Use max-width so the component can shrink on smaller viewports. */\n  max-width: ",
    "px;\n"])), verticalMarginSize, function (props) {
    return props.size === 'narrow' ? narrowContainerWidth : wideContainerWidth;
});
exports.default = Container;
var templateObject_1;
//# sourceMappingURL=Container.js.map