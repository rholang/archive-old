"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var react_1 = require("react");
var react_transition_group_1 = require("react-transition-group");
var core_1 = require("@emotion/core");
var textarea_1 = tslib_1.__importDefault(require("@atlaskit/textarea"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var checkbox_1 = require("@atlaskit/checkbox");
var form_1 = tslib_1.__importStar(require("@atlaskit/form"));
var theme_1 = require("@atlaskit/theme");
var FeedbackScoreButtons_1 = tslib_1.__importDefault(require("./FeedbackScoreButtons"));
var getExpandedHeight = function (ref, state) {
    if (!ref.current) {
        return '0';
    }
    switch (state) {
        case 'entering':
            return ref.current.scrollHeight + "px";
        case 'entered':
            // needed for TextField auto height expand
            return "none";
        default:
            return '0';
    }
};
var transitionDuration = 200;
exports.default = (function (_a) {
    var question = _a.question, statement = _a.statement, textPlaceholder = _a.textPlaceholder, textLabel = _a.textLabel, onSubmit = _a.onSubmit;
    var _b = tslib_1.__read(react_1.useState(false), 2), expanded = _b[0], setExpanded = _b[1];
    var _c = tslib_1.__read(react_1.useState(false), 2), canContactDefault = _c[0], setCanContactDefault = _c[1];
    var hasAutoFilledCanContactRef = react_1.useRef(false);
    var expandedAreaRef = react_1.useRef(null);
    var onScoreSelect = react_1.useCallback(function () {
        setExpanded(true);
    }, [setExpanded]);
    // On the first type the user types some feedback we auto select
    // the option for allowing feedback. This automatic selection only
    // happens once. After that it is up to the user to control
    var onFeedbackChange = react_1.useCallback(function () {
        if (hasAutoFilledCanContactRef.current) {
            return;
        }
        hasAutoFilledCanContactRef.current = true;
        setCanContactDefault(true);
    }, []);
    return (core_1.jsx("section", { "aria-labelledby": "contextualSurveyQuestion" },
        core_1.jsx("h1", { id: "contextualSurveyQuestion", css: core_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n          font-size: ", "px;\n          font-weight: 600;\n        "], ["\n          font-size: ", "px;\n          font-weight: 600;\n        "])), theme_1.fontSize()) }, question),
        statement && core_1.jsx("p", { id: "contextualSurveyStatement" }, statement),
        core_1.jsx(form_1.default, { onSubmit: onSubmit }, function (_a) {
            var formProps = _a.formProps, submitting = _a.submitting;
            return (core_1.jsx("form", tslib_1.__assign({}, formProps),
                core_1.jsx(form_1.Field, { name: "feedbackScore", isDisabled: submitting, isRequired: true }, function (_a) {
                    var fieldProps = _a.fieldProps;
                    return (core_1.jsx(FeedbackScoreButtons_1.default, tslib_1.__assign({}, fieldProps, { onChange: function (score) {
                            fieldProps.onChange(score);
                            onScoreSelect();
                        } })));
                }),
                core_1.jsx(react_transition_group_1.Transition, { in: expanded, timeout: transitionDuration, mountOnEnter: true }, function (state) { return (core_1.jsx("div", { css: core_1.css(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n                    transition: max-height ", "ms ease-in-out;\n                    overflow: hidden;\n                    max-height: ", ";\n                  "], ["\n                    transition: max-height ", "ms ease-in-out;\n                    overflow: hidden;\n                    max-height: ", ";\n                  "])), transitionDuration, getExpandedHeight(expandedAreaRef, state)), ref: expandedAreaRef },
                    core_1.jsx(form_1.Field, { name: "writtenFeedback", defaultValue: "", isDisabled: submitting }, function (_a) {
                        var fieldProps = _a.fieldProps;
                        return (core_1.jsx(textarea_1.default, tslib_1.__assign({}, fieldProps, { "aria-label": textLabel, placeholder: textPlaceholder, autoFocus: true, onChange: function (event) {
                                fieldProps.onChange(event);
                                onFeedbackChange();
                            } })));
                    }),
                    core_1.jsx(form_1.CheckboxField, { name: "canContact", isDisabled: submitting, defaultIsChecked: canContactDefault }, function (_a) {
                        var fieldProps = _a.fieldProps;
                        return (core_1.jsx(checkbox_1.Checkbox, tslib_1.__assign({}, fieldProps, { label: "Atlassian can contact me about this feedback" })));
                    }),
                    core_1.jsx(form_1.FormFooter, null,
                        core_1.jsx(button_1.default, { type: "submit", appearance: "primary", isLoading: submitting }, "Submit")))); })));
        })));
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=SurveyForm.js.map