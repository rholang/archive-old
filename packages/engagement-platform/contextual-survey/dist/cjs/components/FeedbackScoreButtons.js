"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var core_1 = require("@emotion/core");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var theme_1 = require("@atlaskit/theme");
var tooltipMessage = [
    'Strongly disagree',
    'Disagree',
    'Slightly disagree',
    'Neutral',
    'Slightly agree',
    'Agree',
    'Strongly agree',
];
exports.default = (function (_a) {
    var onChange = _a.onChange, value = _a.value;
    return (core_1.jsx("div", null,
        core_1.jsx("div", { css: core_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n        display: flex;\n        justify-content: space-between;\n\n        & > * + * {\n          margin-left: ", "px;\n        }\n\n        & > * {\n          flex: 1;\n\n          & > button {\n            width: 100%;\n            justify-content: center;\n          }\n        }\n      "], ["\n        display: flex;\n        justify-content: space-between;\n\n        & > * + * {\n          margin-left: ", "px;\n        }\n\n        & > * {\n          flex: 1;\n\n          & > button {\n            width: 100%;\n            justify-content: center;\n          }\n        }\n      "])), theme_1.gridSize()) }, Array.from({ length: 7 }, function (_, i) {
            var score = i + 1;
            var isSelected = value === score;
            return (core_1.jsx(tooltip_1.default, { content: tooltipMessage[i], key: score, hideTooltipOnClick: true },
                core_1.jsx(button_1.default, { onClick: function () { return onChange(score); }, isSelected: isSelected, "aria-pressed": isSelected, "aria-describedby": "contextualSurveyStatement", "aria-label": tooltipMessage[i] }, score)));
        })),
        core_1.jsx("div", { css: core_1.css(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n        font-size: 12px;\n        font-weight: 600;\n        color: ", ";\n        display: flex;\n        margin-top: ", "px;\n        margin-bottom: ", "px;\n\n        & > span {\n          width: ", "px;\n        }\n      "], ["\n        font-size: 12px;\n        font-weight: 600;\n        color: ", ";\n        display: flex;\n        margin-top: ", "px;\n        margin-bottom: ", "px;\n\n        & > span {\n          width: ", "px;\n        }\n      "])), theme_1.colors.N200, theme_1.gridSize(), theme_1.gridSize() * 3, theme_1.gridSize() * 10), "aria-hidden": true },
            core_1.jsx("span", null, "Strongly disagree"),
            core_1.jsx("span", { css: core_1.css(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n          text-align: center;\n          margin: 0 auto;\n          padding: 0 ", "px;\n        "], ["\n          text-align: center;\n          margin: 0 auto;\n          padding: 0 ", "px;\n        "])), theme_1.gridSize() * 6) }, "Neutral"),
            core_1.jsx("span", { css: core_1.css(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n          text-align: right;\n        "], ["\n          text-align: right;\n        "]))) }, "Strongly agree"))));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=FeedbackScoreButtons.js.map