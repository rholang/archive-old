import { __awaiter, __generator, __makeTemplateObject, __read } from "tslib";
/** @jsx jsx */
import { useState, useCallback } from 'react';
import { jsx, css } from '@emotion/core';
import Button from '@atlaskit/button';
import { fontSize, gridSize } from '@atlaskit/theme';
import SuccessContainer from './SuccessContainer';
export default (function (_a) {
    var onAnswer = _a.onAnswer;
    var _b = __read(useState(null), 2), pending = _b[0], setPending = _b[1];
    var answeredWith = useCallback(function (answer) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setPending(answer ? 'yes' : 'no');
                    return [4 /*yield*/, onAnswer(answer)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, [setPending, onAnswer]);
    var isDisabled = Boolean(pending);
    return (jsx(SuccessContainer, null,
        jsx("h1", { css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          font-size: ", "px;\n          font-weight: 600;\n          margin: 0;\n          line-height: ", "px;\n        "], ["\n          font-size: ", "px;\n          font-weight: 600;\n          margin: 0;\n          line-height: ", "px;\n        "])), fontSize(), gridSize() * 3) }, "Thanks for your feedback"),
        jsx("p", null, "Are you interested in participating in our research?"),
        jsx("p", null,
            "Sign up for the",
            ' ',
            jsx("a", { href: "https://www.atlassian.com/research-group" }, "Atlassian Research Group"),
            ' ',
            "and we may contact you in the future with research opportunities."),
        jsx("div", { css: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          margin-top: ", "px;\n          display: flex;\n          justify-content: flex-end;\n\n          & > * + * {\n            margin-left: ", "px;\n          }\n        "], ["\n          margin-top: ", "px;\n          display: flex;\n          justify-content: flex-end;\n\n          & > * + * {\n            margin-left: ", "px;\n          }\n        "])), gridSize() * 4, gridSize()) },
            jsx(Button, { appearance: "subtle", onClick: function () { return answeredWith(false); }, isDisabled: isDisabled, isLoading: pending === 'no' }, "No, thanks"),
            jsx(Button, { appearance: "primary", onClick: function () { return answeredWith(true); }, isDisabled: isDisabled, isLoading: pending === 'yes' }, "Yes, sign me up"))));
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=SignUpPrompt.js.map