"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var SurveyContainer_1 = tslib_1.__importDefault(require("./SurveyContainer"));
var SurveyForm_1 = tslib_1.__importDefault(require("./SurveyForm"));
var SignUpPrompt_1 = tslib_1.__importDefault(require("./SignUpPrompt"));
var SignUpSuccess_1 = tslib_1.__importDefault(require("./SignUpSuccess"));
var FeedbackAcknowledgement_1 = tslib_1.__importDefault(require("./FeedbackAcknowledgement"));
var useEscapeToDismiss_1 = tslib_1.__importDefault(require("./useEscapeToDismiss"));
var DismissTrigger;
(function (DismissTrigger) {
    DismissTrigger["AutoDismiss"] = "AUTO_DISMISS";
    DismissTrigger["Manual"] = "MANUAL";
    DismissTrigger["Finished"] = "FINISHED";
    DismissTrigger["Unmount"] = "UNMOUNT";
})(DismissTrigger = exports.DismissTrigger || (exports.DismissTrigger = {}));
exports.AUTO_DISAPPEAR_DURATION = 8000;
exports.default = (function (_a) {
    var question = _a.question, statement = _a.statement, onDismiss = _a.onDismiss, onSubmit = _a.onSubmit, onMailingListAnswer = _a.onMailingListAnswer, getUserHasAnsweredMailingList = _a.getUserHasAnsweredMailingList, _b = _a.textLabel, textLabel = _b === void 0 ? 'Why did you give that rating' : _b, _c = _a.textPlaceholder, textPlaceholder = _c === void 0 ? 'Tell us why' : _c;
    var autoDisappearTimeoutRef = react_1.useRef(null);
    // only allow a single dismiss for a component
    var isDismissedRef = react_1.useRef(false);
    var tryDismiss = react_1.useCallback(function (trigger) {
        // Already called dismiss once
        if (isDismissedRef.current) {
            return;
        }
        isDismissedRef.current = true;
        onDismissRef.current({ trigger: trigger });
    }, []);
    var _d = tslib_1.__read(react_1.useState('SURVEY'), 2), currentStep = _d[0], setCurrentStep = _d[1];
    var trySetCurrentStep = react_1.useCallback(function (step) {
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
    var onDismissRef = react_1.useRef(onDismiss);
    react_1.useEffect(function () {
        onDismissRef.current = onDismiss;
    }, [onDismiss]);
    var tryClearTimeout = react_1.useCallback(function () {
        var id = autoDisappearTimeoutRef.current;
        if (id) {
            clearTimeout(id);
            autoDisappearTimeoutRef.current = null;
        }
    }, []);
    // Cleanup any auto dismiss after dismiss
    react_1.useEffect(function () {
        return function unmount() {
            tryClearTimeout();
            tryDismiss(DismissTrigger.Unmount);
        };
    }, [tryClearTimeout, tryDismiss]);
    var onSurveySubmit = react_1.useCallback(function (formValues, _, cleanup) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var userHasAnswered;
        return tslib_1.__generator(this, function (_a) {
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
    var onMailingListResponse = react_1.useCallback(function (answer) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
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
    react_1.useEffect(function () {
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
            autoDisappearTimeoutRef.current = window.setTimeout(function () { return tryDismiss(DismissTrigger.AutoDismiss); }, exports.AUTO_DISAPPEAR_DURATION);
        }
    }, [currentStep, tryDismiss]);
    useEscapeToDismiss_1.default({ onDismiss: function () { return tryDismiss(DismissTrigger.Manual); } });
    var content = (function () {
        if (currentStep === 'SURVEY') {
            return (react_1.default.createElement(SurveyForm_1.default, { question: question, statement: statement, textLabel: textLabel, textPlaceholder: textPlaceholder, onSubmit: onSurveySubmit }));
        }
        if (currentStep === 'SIGN_UP_PROMPT') {
            return react_1.default.createElement(SignUpPrompt_1.default, { onAnswer: onMailingListResponse });
        }
        if (currentStep === 'SIGN_UP_SUCCESS') {
            return react_1.default.createElement(SignUpSuccess_1.default, null);
        }
        if (currentStep === 'POST_SURVEY_NO_CONSENT' ||
            currentStep === 'POST_SURVEY_HAS_SIGN_UP') {
            return react_1.default.createElement(FeedbackAcknowledgement_1.default, null);
        }
        return null;
    })();
    var manualDismiss = react_1.useCallback(function () {
        // clear any pending timers
        tryClearTimeout();
        tryDismiss(DismissTrigger.Manual);
    }, [tryDismiss, tryClearTimeout]);
    return react_1.default.createElement(SurveyContainer_1.default, { onDismiss: manualDismiss }, content);
});
//# sourceMappingURL=ContextualSurvey.js.map