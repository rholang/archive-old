"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var core_1 = require("@emotion/core");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var theme_1 = require("@atlaskit/theme");
var cross_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/cross"));
var constants_1 = require("../constants");
var padding = theme_1.gridSize() * 3;
exports.default = (function (_a) {
    var children = _a.children, onDismiss = _a.onDismiss;
    return (core_1.jsx("div", { css: core_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n        background-color: ", ";\n        border-radius: ", "px;\n        padding: ", "px;\n        ", "\n        width: ", "px;\n      "], ["\n        background-color: ", ";\n        border-radius: ", "px;\n        padding: ", "px;\n        ", "\n        width: ", "px;\n      "])), theme_1.colors.N0, theme_1.borderRadius(), padding, theme_1.elevation.e500(), constants_1.surveyInnerWidth) },
        core_1.jsx("div", { css: core_1.css(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n          position: absolute;\n          top: ", "px;\n          right: ", "px;\n        "], ["\n          position: absolute;\n          top: ", "px;\n          right: ", "px;\n        "])), padding - theme_1.gridSize(), padding - theme_1.gridSize()) },
            core_1.jsx(button_1.default, { iconBefore: core_1.jsx(cross_1.default, { label: "", primaryColor: theme_1.colors.N50 }), "aria-label": "Dismiss", appearance: "subtle", onClick: onDismiss })),
        children));
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=SurveyContainer.js.map