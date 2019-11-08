"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var react_1 = require("react");
var core_1 = require("@emotion/core");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var theme_1 = require("@atlaskit/theme");
var SuccessContainer_1 = tslib_1.__importDefault(require("./SuccessContainer"));
exports.default = (function (_a) {
    var onAnswer = _a.onAnswer;
    var _b = tslib_1.__read(react_1.useState(null), 2), pending = _b[0], setPending = _b[1];
    var answeredWith = react_1.useCallback(function (answer) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
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
    return (core_1.jsx(SuccessContainer_1.default, null,
        core_1.jsx("h1", { css: core_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n          font-size: ", "px;\n          font-weight: 600;\n          margin: 0;\n          line-height: ", "px;\n        "], ["\n          font-size: ", "px;\n          font-weight: 600;\n          margin: 0;\n          line-height: ", "px;\n        "])), theme_1.fontSize(), theme_1.gridSize() * 3) }, "Thanks for your feedback"),
        core_1.jsx("p", null, "Are you interested in participating in our research?"),
        core_1.jsx("p", null,
            "Sign up for the",
            ' ',
            core_1.jsx("a", { href: "https://www.atlassian.com/research-group" }, "Atlassian Research Group"),
            ' ',
            "and we may contact you in the future with research opportunities."),
        core_1.jsx("div", { css: core_1.css(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n          margin-top: ", "px;\n          display: flex;\n          justify-content: flex-end;\n\n          & > * + * {\n            margin-left: ", "px;\n          }\n        "], ["\n          margin-top: ", "px;\n          display: flex;\n          justify-content: flex-end;\n\n          & > * + * {\n            margin-left: ", "px;\n          }\n        "])), theme_1.gridSize() * 4, theme_1.gridSize()) },
            core_1.jsx(button_1.default, { appearance: "subtle", onClick: function () { return answeredWith(false); }, isDisabled: isDisabled, isLoading: pending === 'no' }, "No, thanks"),
            core_1.jsx(button_1.default, { appearance: "primary", onClick: function () { return answeredWith(true); }, isDisabled: isDisabled, isLoading: pending === 'yes' }, "Yes, sign me up"))));
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=SignUpPrompt.js.map