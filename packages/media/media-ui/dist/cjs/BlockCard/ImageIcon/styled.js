"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var mixins_1 = require("../../mixins");
exports.Image = styled_components_1.default.img(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", " ", ";\n\n  /* hide the alt text when the image cannot be found */\n  overflow: hidden;\n"], ["\n  ", " ", ";\n\n  /* hide the alt text when the image cannot be found */\n  overflow: hidden;\n"])), function (_a) {
    var size = _a.size;
    return mixins_1.size(size);
}, mixins_1.borderRadius);
var templateObject_1;
//# sourceMappingURL=styled.js.map