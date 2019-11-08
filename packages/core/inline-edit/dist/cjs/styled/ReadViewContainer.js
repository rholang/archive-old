"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var ReadViewContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  font-size: ", "px;\n  line-height: ", ";\n  max-width: 100%;\n  min-height: ", "em;\n  padding: ", "px\n    ", "px;\n  word-break: break-word;\n"], ["\n  display: flex;\n  font-size: ", "px;\n  line-height: ", ";\n  max-width: 100%;\n  min-height: ", "em;\n  padding: ", "px\n    ", "px;\n  word-break: break-word;\n"])), constants_1.fontSize(), (constants_1.gridSize() * 2.5) / constants_1.fontSize(), (constants_1.gridSize() * 2.5) / constants_1.fontSize(), function (props) { return (props.isCompact ? constants_1.gridSize() / 2 : constants_1.gridSize()); }, constants_1.gridSize() - 2);
ReadViewContainer.displayName = 'ReadViewContainer';
exports.default = ReadViewContainer;
var templateObject_1;
//# sourceMappingURL=ReadViewContainer.js.map