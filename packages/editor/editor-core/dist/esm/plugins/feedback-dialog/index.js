import { __assign, __awaiter, __generator, __read, __spread } from "tslib";
import React from 'react';
import { PluginKey } from 'prosemirror-state';
import { IconFeedback } from '../quick-insert/assets';
import { version as coreVersion } from '../../version.json';
import { messages } from '../insert-block/ui/ToolbarInsertBlock';
import { addAnalytics, ACTION, ACTION_SUBJECT, INPUT_METHOD, EVENT_TYPE, } from '../analytics';
import loadJiraCollectorDialogScript from './loadJiraCollectorDialogScript';
export var pluginKey = new PluginKey('feedbackDialogPlugin');
var showJiraCollectorDialog;
var feedbackInfoHash;
var defaultFeedbackInfo;
var hashFeedbackInfo = function (feedbackInfo) {
    var product = feedbackInfo.product, packageName = feedbackInfo.packageName, packageVersion = feedbackInfo.packageVersion, labels = feedbackInfo.labels;
    return __spread([product, packageName, packageVersion], (labels || [])).join('|');
};
export var openFeedbackDialog = function (feedbackInfo) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
                var combinedFeedbackInfo, newFeedbackInfoHash, err_1, timeoutId;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            combinedFeedbackInfo = __assign(__assign({}, defaultFeedbackInfo), feedbackInfo);
                            newFeedbackInfoHash = hashFeedbackInfo(combinedFeedbackInfo);
                            if (!(!showJiraCollectorDialog || feedbackInfoHash !== newFeedbackInfoHash)) return [3 /*break*/, 4];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, loadJiraCollectorDialogScript(__spread([
                                    combinedFeedbackInfo.product || 'n/a'
                                ], (combinedFeedbackInfo.labels || [])), combinedFeedbackInfo.packageName || '', coreVersion, combinedFeedbackInfo.packageVersion || '')];
                        case 2:
                            showJiraCollectorDialog = _a.sent();
                            feedbackInfoHash = newFeedbackInfoHash;
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            reject(err_1);
                            return [3 /*break*/, 4];
                        case 4:
                            timeoutId = window.setTimeout(showJiraCollectorDialog, 0);
                            // Return the timoutId for consumers to call clearTimeout if they need to.
                            resolve(timeoutId);
                            return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
var feedbackDialog = function (feedbackInfo) {
    defaultFeedbackInfo = feedbackInfo;
    return {
        name: 'feedbackDialog',
        pluginsOptions: {
            quickInsert: function (_a) {
                var formatMessage = _a.formatMessage;
                return [
                    {
                        title: formatMessage(messages.feedbackDialog),
                        description: formatMessage(messages.feedbackDialogDescription),
                        priority: 400,
                        keywords: ['feedback', 'bug'],
                        icon: function () { return (React.createElement(IconFeedback, { label: formatMessage(messages.feedbackDialog) })); },
                        action: function (insert, state) {
                            var tr = insert('');
                            openFeedbackDialog(feedbackInfo);
                            return addAnalytics(state, tr, {
                                action: ACTION.OPENED,
                                actionSubject: ACTION_SUBJECT.FEEDBACK_DIALOG,
                                attributes: { inputMethod: INPUT_METHOD.QUICK_INSERT },
                                eventType: EVENT_TYPE.UI,
                            });
                        },
                    },
                ];
            },
        },
    };
};
export default feedbackDialog;
//# sourceMappingURL=index.js.map