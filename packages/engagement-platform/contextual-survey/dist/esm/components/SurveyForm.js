import { __assign, __makeTemplateObject, __read } from "tslib";
/** @jsx jsx */
import { useState, useRef, useCallback } from 'react';
import { Transition } from 'react-transition-group';
import { jsx, css } from '@emotion/core';
import Textarea from '@atlaskit/textarea';
import Button from '@atlaskit/button';
import { Checkbox } from '@atlaskit/checkbox';
import Form, { Field, FormFooter, CheckboxField } from '@atlaskit/form';
import { fontSize } from '@atlaskit/theme';
import FeedbackScoreButtons from './FeedbackScoreButtons';
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
export default (function (_a) {
    var question = _a.question, statement = _a.statement, textPlaceholder = _a.textPlaceholder, textLabel = _a.textLabel, onSubmit = _a.onSubmit;
    var _b = __read(useState(false), 2), expanded = _b[0], setExpanded = _b[1];
    var _c = __read(useState(false), 2), canContactDefault = _c[0], setCanContactDefault = _c[1];
    var hasAutoFilledCanContactRef = useRef(false);
    var expandedAreaRef = useRef(null);
    var onScoreSelect = useCallback(function () {
        setExpanded(true);
    }, [setExpanded]);
    // On the first type the user types some feedback we auto select
    // the option for allowing feedback. This automatic selection only
    // happens once. After that it is up to the user to control
    var onFeedbackChange = useCallback(function () {
        if (hasAutoFilledCanContactRef.current) {
            return;
        }
        hasAutoFilledCanContactRef.current = true;
        setCanContactDefault(true);
    }, []);
    return (jsx("section", { "aria-labelledby": "contextualSurveyQuestion" },
        jsx("h1", { id: "contextualSurveyQuestion", css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          font-size: ", "px;\n          font-weight: 600;\n        "], ["\n          font-size: ", "px;\n          font-weight: 600;\n        "])), fontSize()) }, question),
        statement && jsx("p", { id: "contextualSurveyStatement" }, statement),
        jsx(Form, { onSubmit: onSubmit }, function (_a) {
            var formProps = _a.formProps, submitting = _a.submitting;
            return (jsx("form", __assign({}, formProps),
                jsx(Field, { name: "feedbackScore", isDisabled: submitting, isRequired: true }, function (_a) {
                    var fieldProps = _a.fieldProps;
                    return (jsx(FeedbackScoreButtons, __assign({}, fieldProps, { onChange: function (score) {
                            fieldProps.onChange(score);
                            onScoreSelect();
                        } })));
                }),
                jsx(Transition, { in: expanded, timeout: transitionDuration, mountOnEnter: true }, function (state) { return (jsx("div", { css: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                    transition: max-height ", "ms ease-in-out;\n                    overflow: hidden;\n                    max-height: ", ";\n                  "], ["\n                    transition: max-height ", "ms ease-in-out;\n                    overflow: hidden;\n                    max-height: ", ";\n                  "])), transitionDuration, getExpandedHeight(expandedAreaRef, state)), ref: expandedAreaRef },
                    jsx(Field, { name: "writtenFeedback", defaultValue: "", isDisabled: submitting }, function (_a) {
                        var fieldProps = _a.fieldProps;
                        return (jsx(Textarea, __assign({}, fieldProps, { "aria-label": textLabel, placeholder: textPlaceholder, autoFocus: true, onChange: function (event) {
                                fieldProps.onChange(event);
                                onFeedbackChange();
                            } })));
                    }),
                    jsx(CheckboxField, { name: "canContact", isDisabled: submitting, defaultIsChecked: canContactDefault }, function (_a) {
                        var fieldProps = _a.fieldProps;
                        return (jsx(Checkbox, __assign({}, fieldProps, { label: "Atlassian can contact me about this feedback" })));
                    }),
                    jsx(FormFooter, null,
                        jsx(Button, { type: "submit", appearance: "primary", isLoading: submitting }, "Submit")))); })));
        })));
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=SurveyForm.js.map