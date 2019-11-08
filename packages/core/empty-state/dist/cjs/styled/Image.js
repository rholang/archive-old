"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var Image = styled_components_1.default.img(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: block;\n  height: ", ";\n  margin: 0 auto ", "px;\n  max-height: ", "px;\n  max-width: ", "px;\n  width: ", ";\n"], ["\n  display: block;\n  height: ", ";\n  margin: 0 auto ", "px;\n  max-height: ", "px;\n  max-width: ", "px;\n  width: ", ";\n"])), function (props) { return props.height || 'auto'; }, constants_1.gridSize() * 3, function (props) { return props.maxHeight; }, function (props) { return props.maxWidth; }, function (props) { return props.width || 'auto'; });
exports.default = Image;
var templateObject_1;
//# sourceMappingURL=Image.js.map