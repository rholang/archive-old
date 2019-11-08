"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
// TODO: Figure out a more scalable/responsive solution
// for vertical alignment.
// Current rationale: vertically positioned at the top of
// the smart card container (when set to 0). Offset this
// to position it with appropriate whitespace from the top.
exports.Icon = styled_components_1.default.img(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  height: 14px;\n  width: 14px;\n  margin-right: 4px;\n  border-radius: 2px;\n  user-select: none;\n  vertical-align: text-bottom;\n"], ["\n  height: 14px;\n  width: 14px;\n  margin-right: 4px;\n  border-radius: 2px;\n  user-select: none;\n  vertical-align: text-bottom;\n"])));
// Used for 'untrue' icons which claim to be 16x16 but
// are less than that in height/width.
// TODO: Replace this override with proper AtlasKit solution.
exports.AKIconWrapper = styled_components_1.default.span(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  margin-right: -2px;\n"], ["\n  margin-right: -2px;\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=Icon.js.map