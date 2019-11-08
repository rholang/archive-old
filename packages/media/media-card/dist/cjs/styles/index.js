"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var media_ui_1 = require("@atlaskit/media-ui");
tslib_1.__exportStar(require("./config"), exports);
tslib_1.__exportStar(require("./mixins"), exports);
tslib_1.__exportStar(require("./easing"), exports);
tslib_1.__exportStar(require("./animations"), exports);
exports.Root = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  font-family: ", ";\n\n  * {\n    box-sizing: border-box;\n  }\n"], ["\n  box-sizing: border-box;\n  font-family: ", ";\n\n  * {\n    box-sizing: border-box;\n  }\n"])), constants_1.fontFamily());
exports.cardShadow = "\n  box-shadow: 0 1px 1px rgba(9, 30, 66, 0.2), 0 0 1px 0 rgba(9, 30, 66, 0.24);\n";
exports.FadeinImage = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), media_ui_1.fadeIn);
exports.default = exports.Root;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map