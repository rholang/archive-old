import { __makeTemplateObject } from "tslib";
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Button from '@atlaskit/button';
import Tooltip from '@atlaskit/tooltip';
import { gridSize, colors } from '@atlaskit/theme';
var tooltipMessage = [
    'Strongly disagree',
    'Disagree',
    'Slightly disagree',
    'Neutral',
    'Slightly agree',
    'Agree',
    'Strongly agree',
];
export default (function (_a) {
    var onChange = _a.onChange, value = _a.value;
    return (jsx("div", null,
        jsx("div", { css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        display: flex;\n        justify-content: space-between;\n\n        & > * + * {\n          margin-left: ", "px;\n        }\n\n        & > * {\n          flex: 1;\n\n          & > button {\n            width: 100%;\n            justify-content: center;\n          }\n        }\n      "], ["\n        display: flex;\n        justify-content: space-between;\n\n        & > * + * {\n          margin-left: ", "px;\n        }\n\n        & > * {\n          flex: 1;\n\n          & > button {\n            width: 100%;\n            justify-content: center;\n          }\n        }\n      "])), gridSize()) }, Array.from({ length: 7 }, function (_, i) {
            var score = i + 1;
            var isSelected = value === score;
            return (jsx(Tooltip, { content: tooltipMessage[i], key: score, hideTooltipOnClick: true },
                jsx(Button, { onClick: function () { return onChange(score); }, isSelected: isSelected, "aria-pressed": isSelected, "aria-describedby": "contextualSurveyStatement", "aria-label": tooltipMessage[i] }, score)));
        })),
        jsx("div", { css: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        font-size: 12px;\n        font-weight: 600;\n        color: ", ";\n        display: flex;\n        margin-top: ", "px;\n        margin-bottom: ", "px;\n\n        & > span {\n          width: ", "px;\n        }\n      "], ["\n        font-size: 12px;\n        font-weight: 600;\n        color: ", ";\n        display: flex;\n        margin-top: ", "px;\n        margin-bottom: ", "px;\n\n        & > span {\n          width: ", "px;\n        }\n      "])), colors.N200, gridSize(), gridSize() * 3, gridSize() * 10), "aria-hidden": true },
            jsx("span", null, "Strongly disagree"),
            jsx("span", { css: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          text-align: center;\n          margin: 0 auto;\n          padding: 0 ", "px;\n        "], ["\n          text-align: center;\n          margin: 0 auto;\n          padding: 0 ", "px;\n        "])), gridSize() * 6) }, "Neutral"),
            jsx("span", { css: css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          text-align: right;\n        "], ["\n          text-align: right;\n        "]))) }, "Strongly agree"))));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=FeedbackScoreButtons.js.map