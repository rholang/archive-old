"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
// TODO: remove this override behaviour for @atlaskit/icon-object
exports.IconObjectOverrides = "\n  & > span {\n    height: 16px;\n    width: 14px;\n    & > svg {\n      vertical-align: top;\n    }\n  }\n";
// TODO: remove this override behaviour for @atlaskit/icon
exports.IconOverrides = "\n  & > span > span {\n    height: 16px;\n    width: 14px;\n    & > svg {\n      vertical-align: top;\n    }\n  }\n";
// Wraps all icons represented in Inline Links. Icons have three sources/types:
// - JSON-LD: from the generator.icon property coming back from ORS.
// - @atlaskit/icon: for lock icons, unauthorized, etc.
// - @atlaskit/icon-object: for object icons, e.g. repository, branch, etc.
// NB: the first set of overrides style icons imported from @atlaskit/icon-object correctly.
// NB: the second set of overrides style icons imported from @atlaskit/icon correctly.
exports.IconWrapper = styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  margin-right: 4px;\n  user-select: none;\n  ", "\n  ", "\n"], ["\n  margin-right: 4px;\n  user-select: none;\n  ", "\n  ", "\n"])), exports.IconOverrides, exports.IconObjectOverrides);
// The main 'wrapping' element, title of the content.
// NB: `white-space` adds little whitespace before wrapping.
// NB: `hyphens` enables hyphenation on word break.
exports.IconTitleWrapper = styled_components_1.default.span(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  overflow-wrap: break-word;\n  word-break: break-word;\n  white-space: pre-wrap;\n  hyphens: auto;\n"], ["\n  overflow-wrap: break-word;\n  word-break: break-word;\n  white-space: pre-wrap;\n  hyphens: auto;\n"])));
exports.IconTitleHeadNoBreakWrapper = styled_components_1.default.span(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  overflow-wrap: break-word;\n  min-width: 8ch;\n"], ["\n  overflow-wrap: break-word;\n  min-width: 8ch;\n"])));
// TODO: Replace overrides with proper AtlasKit solution.
exports.LozengeWrapper = styled_components_1.default.span(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  display: inline-block;\n  vertical-align: text-bottom;\n  & > span {\n    margin-left: 4px;\n    padding: 2px 0 1px 0;\n  }\n"], ["\n  display: inline-block;\n  vertical-align: text-bottom;\n  & > span {\n    margin-left: 4px;\n    padding: 2px 0 1px 0;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map