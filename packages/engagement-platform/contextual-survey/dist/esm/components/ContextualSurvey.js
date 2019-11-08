import { __awaiter, __generator, __read } from "tslib";
import React, { useCallback, useRef, useState, useEffect } from 'react';
import SurveyContainer from './SurveyContainer';
import SurveyForm from './SurveyForm';
import SignUpPrompt from './SignUpPrompt';
import SignUpSuccess from './SignUpSuccess';
import FeedbackAcknowledgement from './FeedbackAcknowledgement';
import useEscapeToDismiss from './useEscapeToDismiss';
export var DismissTrigger;
(function (DismissTrigger) {
    DismissTrigger["AutoDismiss"] = "AUTO_DISMISS";
    DismissTrigger["Manual"] = "MANUAL";
    DismissTrigger["Finished"] = "FINISHED";
    DismissTrigger["Unmount"] = "UNMOUNT";
})(DismissTrigger || (DismissTrigger = {}));
export var AUTO_DISAPPEAR_DURATION = 8000;
export default (function (_a) {
    var question = _a.question, statement = _a.statement, onDismiss = _a.onDismiss, onSubmit = _a.onSubmit, onMailingListAnswer = _a.onMailingListAnswer, getUserHasAnsweredMailingList = _a.getUserHasAnsweredMailingList, _b = _a.textLabel, textLabel = _b === void 0 ? 'Why did you give that rating' : _b, _c = _a.textPlaceholder, textPlaceholder = _c === void 0 ? 'Tell us why' : _c;
    var autoDisappearTimeoutRef = useRef(null);
    // only allow a single dismiss for a component
    var isDismissedRef = useRef(false);
    var tryDismiss = useCallback(function (trigger) {
        // Already called dismiss once
        if (isDismissedRef.current) {
            return;
        }
        isDismissedRef.current = true;
        onDismissRef.current({ trigger: trigger });
    }, []);
    var _d = __read(useState('SURVEY'), 2), currentStep = _d[0], setCurrentStep = _d[1];
    var trySetCurrentStep = useCallback(function (step) {
        // Already dismissed - cannot update the step
        if (isDismissedRef.current) {
            if (process.env.NODE_ENV !== 'production') {
                // eslint-disable-next-line no-console
                console.log("not setting step \"" + step + "\" as survey is already dismissed");
            }
            return;
        }
        setCurrentStep(step);
    }, [setCurrentStep]);
    // using a ref so that we don't break all of our caches if a consumer is using an arrow function
    var onDismissRef = useRef(onDismiss);
    useEffect(function () {
        onDismissRef.current = onDismiss;
    }, [onDismiss]);
    var tryClearTimeout = useCallback(function () {
        var id = autoDisappearTimeoutRef.current;
        if (id) {
            clearTimeout(id);
            autoDisappearTimeoutRef.current = null;
        }
    }, []);
    // Cleanup any auto dismiss after dismiss
    useEffect(function () {
        return function unmount() {
            tryClearTimeout();
            tryDismiss(DismissTrigger.Unmount);
        };
    }, [tryClearTimeout, tryDismiss]);
    var onSurveySubmit = useCallback(function (formValues, _, cleanup) { return __awaiter(void 0, void 0, void 0, function () {
        var userHasAnswered;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Submitting form: Phase 1 complete
                return [4 /*yield*/, onSubmit(formValues)];
                case 1:
                    // Submitting form: Phase 1 complete
                    _a.sent();
                    // Note: need to call cleanup just before we navigate away
                    // It cleans up the form (required)
                    // It will also clear the
                    // Optional Phase 2: Asking to join Atlassian Research Group
                    // Only enter phase 2 if:
                    // 1. not already dismissed; AND
                    // 2. permission given to contact; AND
                    // 3. user has previously not answered mailing list question (getUserHasAnsweredMailingList returns false)
                    // Not entering phase 2: User has dismissed while the submit promise was resolving
                    if (isDismissedRef.current) {
                        cleanup();
                        return [2 /*return*/];
                    }
                    // Not entering phase 2: no permission given to respond to feedback
                    if (!formValues.canContact) {
                        cleanup();
                        trySetCurrentStep('POST_SURVEY_NO_CONSENT');
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, getUserHasAnsweredMailingList()];
                case 2:
                    userHasAnswered = _a.sent();
                    cleanup();
                    // Not entering phase 2: user has already answered this question
                    if (userHasAnswered) {
                        trySetCurrentStep('POST_SURVEY_HAS_SIGN_UP');
                        return [2 /*return*/];
                    }
                    // Enter phase 2
                    trySetCurrentStep('SIGN_UP_PROMPT');
                    return [2 /*return*/];
            }
        });
    }); }, [getUserHasAnsweredMailingList, onSubmit, trySetCurrentStep]);
    var onMailingListResponse = useCallback(function (answer) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onMailingListAnswer(answer)];
                case 1:
                    _a.sent();
                    if (answer) {
                        trySetCurrentStep('SIGN_UP_SUCCESS');
                        return [2 /*return*/];
                    }
                    // We have already thanked to user, we can simply close
                    tryDismiss(DismissTrigger.Finished);
                    return [2 /*return*/];
            }
        });
    }); }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tryDismiss, trySetCurrentStep]);
    // Start the auto disappear when we are finished
    useEffect(function () {
        // Already dismissed
        if (isDismissedRef.current) {
            return;
        }
        // Timeout already scheduled
        if (autoDisappearTimeoutRef.current) {
            return;
        }
        if ([
            'SIGN_UP_SUCCESS',
            'POST_SURVEY_NO_CONSENT',
            'POST_SURVEY_HAS_SIGN_UP',
        ].includes(currentStep)) {
            autoDisappearTimeoutRef.current = window.setTimeout(function () { return tryDismiss(DismissTrigger.AutoDismiss); }, AUTO_DISAPPEAR_DURATION);
        }
    }, [currentStep, tryDismiss]);
    useEscapeToDismiss({ onDismiss: function () { return tryDismiss(DismissTrigger.Manual); } });
    var content = (function () {
        if (currentStep === 'SURVEY') {
            return (React.createElement(SurveyForm, { question: question, statement: statement, textLabel: textLabel, textPlaceholder: textPlaceholder, onSubmit: onSurveySubmit }));
        }
        if (currentStep === 'SIGN_UP_PROMPT') {
            return React.createElement(SignUpPrompt, { onAnswer: onMailingListResponse });
        }
        if (currentStep === 'SIGN_UP_SUCCESS') {
            return React.createElement(SignUpSuccess, null);
        }
        if (currentStep === 'POST_SURVEY_NO_CONSENT' ||
            currentStep === 'POST_SURVEY_HAS_SIGN_UP') {
            return React.createElement(FeedbackAcknowledgement, null);
        }
        return null;
    })();
    var manualDismiss = useCallback(function () {
        // clear any pending timers
        tryClearTimeout();
        tryDismiss(DismissTrigger.Manual);
    }, [tryDismiss, tryClearTimeout]);
    return React.createElement(SurveyContainer, { onDismiss: manualDismiss }, content);
});
//# sourceMappingURL=ContextualSurvey.js.map