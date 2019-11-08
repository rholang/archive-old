"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var prosemirror_state_1 = require("prosemirror-state");
var assets_1 = require("../quick-insert/assets");
var version_json_1 = require("../../version.json");
var ToolbarInsertBlock_1 = require("../insert-block/ui/ToolbarInsertBlock");
var analytics_1 = require("../analytics");
var loadJiraCollectorDialogScript_1 = tslib_1.__importDefault(require("./loadJiraCollectorDialogScript"));
exports.pluginKey = new prosemirror_state_1.PluginKey('feedbackDialogPlugin');
var showJiraCollectorDialog;
var feedbackInfoHash;
var defaultFeedbackInfo;
var hashFeedbackInfo = function (feedbackInfo) {
    var product = feedbackInfo.product, packageName = feedbackInfo.packageName, packageVersion = feedbackInfo.packageVersion, labels = feedbackInfo.labels;
    return tslib_1.__spread([product, packageName, packageVersion], (labels || [])).join('|');
};
exports.openFeedbackDialog = function (feedbackInfo) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
                var combinedFeedbackInfo, newFeedbackInfoHash, err_1, timeoutId;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            combinedFeedbackInfo = tslib_1.__assign(tslib_1.__assign({}, defaultFeedbackInfo), feedbackInfo);
                            newFeedbackInfoHash = hashFeedbackInfo(combinedFeedbackInfo);
                            if (!(!showJiraCollectorDialog || feedbackInfoHash !== newFeedbackInfoHash)) return [3 /*break*/, 4];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, loadJiraCollectorDialogScript_1.default(tslib_1.__spread([
                                    combinedFeedbackInfo.product || 'n/a'
                                ], (combinedFeedbackInfo.labels || [])), combinedFeedbackInfo.packageName || '', version_json_1.version, combinedFeedbackInfo.packageVersion || '')];
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
                        title: formatMessage(ToolbarInsertBlock_1.messages.feedbackDialog),
                        description: formatMessage(ToolbarInsertBlock_1.messages.feedbackDialogDescription),
                        priority: 400,
                        keywords: ['feedback', 'bug'],
                        icon: function () { return (react_1.default.createElement(assets_1.IconFeedback, { label: formatMessage(ToolbarInsertBlock_1.messages.feedbackDialog) })); },
                        action: function (insert, state) {
                            var tr = insert('');
                            exports.openFeedbackDialog(feedbackInfo);
                            return analytics_1.addAnalytics(state, tr, {
                                action: analytics_1.ACTION.OPENED,
                                actionSubject: analytics_1.ACTION_SUBJECT.FEEDBACK_DIALOG,
                                attributes: { inputMethod: analytics_1.INPUT_METHOD.QUICK_INSERT },
                                eventType: analytics_1.EVENT_TYPE.UI,
                            });
                        },
                    },
                ];
            },
        },
    };
};
exports.default = feedbackDialog;
//# sourceMappingURL=index.js.map