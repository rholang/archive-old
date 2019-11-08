"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var core_1 = require("@emotion/core");
var theme_1 = require("@atlaskit/theme");
var check_circle_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/check-circle"));
exports.default = (function (_a) {
    var children = _a.children;
    return (core_1.jsx("section", { css: core_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      margin-left: ", "px;\n    "], ["\n      margin-left: ", "px;\n    "])), theme_1.gridSize() * 5) },
        core_1.jsx("div", { css: core_1.css(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n        position: absolute;\n        top: ", "px;\n        left: ", "px;\n      "], ["\n        position: absolute;\n        top: ", "px;\n        left: ", "px;\n      "])), theme_1.gridSize() * 3, theme_1.gridSize() * 3) },
            core_1.jsx(check_circle_1.default, { label: "", "aria-hidden": true, primaryColor: theme_1.colors.G300 })),
        children));
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=SuccessContainer.js.map