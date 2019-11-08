"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ReactDOM = tslib_1.__importStar(require("react-dom"));
var react_1 = require("react");
var PropTypes = tslib_1.__importStar(require("prop-types"));
var spinner_1 = tslib_1.__importDefault(require("@atlaskit/spinner"));
var editor_common_1 = require("@atlaskit/editor-common");
var button_1 = tslib_1.__importStar(require("@atlaskit/button"));
var analytics_1 = require("../../analytics");
var ToolbarButton_1 = tslib_1.__importDefault(require("../ToolbarButton"));
var with_outer_listeners_1 = tslib_1.__importDefault(require("../with-outer-listeners"));
var styles_1 = require("./styles");
var analytics_2 = require("../../plugins/analytics");
var event_dispatcher_1 = require("../../event-dispatcher");
var feedback_dialog_1 = require("../../plugins/feedback-dialog");
var deprecation_warnings_1 = tslib_1.__importDefault(require("../../utils/deprecation-warnings"));
var pick_by_1 = tslib_1.__importDefault(require("../../utils/pick-by"));
var PopupWithOutsideListeners = with_outer_listeners_1.default(editor_common_1.Popup);
var POPUP_HEIGHT = 388;
var POPUP_WIDTH = 280;
var EDITOR_IMAGE_URL = 'https://confluence.atlassian.com/download/attachments/945114421/editorillustration@2x.png?api=v2';
var deprecations = [
    {
        property: 'packageVersion',
        description: 'To pass package version use feedbackInfo property – <Editor feedbackInfo={{ packageVersion }} />',
        type: 'removed',
    },
    {
        property: 'packageName',
        description: 'To pass package name use feedbackInfo property – <Editor feedbackInfo={{ packageName }} />',
        type: 'removed',
    },
    {
        property: 'labels',
        description: 'To pass feedback labels use feedbackInfo property – <Editor feedbackInfo={{ labels }} />',
        type: 'removed',
    },
];
var isNullOrUndefined = function (attr) { return attr === null || attr === undefined; };
var ToolbarFeedback = /** @class */ (function (_super) {
    tslib_1.__extends(ToolbarFeedback, _super);
    function ToolbarFeedback(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            jiraIssueCollectorScriptLoading: false,
            showOptOutOption: false,
        };
        _this.handleRef = function (ref) {
            if (ref) {
                _this.setState({
                    target: ReactDOM.findDOMNode(ref || null),
                });
            }
        };
        // Create a FeedbackInfo instance from props.
        _this.getFeedbackInfo = function () {
            var isFeedbackInfoAttr = function (attr) {
                return ['product', 'packageVersion', 'packageName', 'labels'].indexOf(attr) >= 0;
            };
            return pick_by_1.default(function (key, value) {
                return isFeedbackInfoAttr(key) && !isNullOrUndefined(value);
            }, _this.props);
        };
        _this.collectFeedback = function () {
            if (_this.props.product === 'bitbucket') {
                _this.setState({ showOptOutOption: true });
            }
            else {
                _this.openFeedbackPopup();
            }
        };
        _this.toggleShowOptOutOption = function () {
            _this.setState({ showOptOutOption: !_this.state.showOptOutOption });
        };
        _this.openJiraIssueCollector = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({
                            jiraIssueCollectorScriptLoading: true,
                            showOptOutOption: false,
                        });
                        return [4 /*yield*/, feedback_dialog_1.openFeedbackDialog(this.getFeedbackInfo())];
                    case 1:
                        _a.sent();
                        this.setState({ jiraIssueCollectorScriptLoading: false });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.openFeedbackPopup = analytics_1.withAnalytics('atlassian.editor.feedback.button', function () {
            var dispatch = event_dispatcher_1.createDispatch(_this.context.editorActions.eventDispatcher);
            dispatch(analytics_2.analyticsEventKey, {
                payload: {
                    action: analytics_2.ACTION.CLICKED,
                    actionSubject: analytics_2.ACTION_SUBJECT.BUTTON,
                    actionSubjectId: analytics_2.ACTION_SUBJECT_ID.BUTTON_FEEDBACK,
                    eventType: analytics_2.EVENT_TYPE.UI,
                },
            });
            _this.openJiraIssueCollector();
            return true;
        });
        _this.openLearnMorePage = function () {
            window.open('https://confluence.atlassian.com/x/NU1VO', '_blank');
            _this.toggleShowOptOutOption();
        };
        _this.hasJquery = function () {
            return typeof window.jQuery !== 'undefined';
        };
        deprecation_warnings_1.default(ToolbarFeedback.name, props, deprecations);
        return _this;
    }
    ToolbarFeedback.prototype.handleSpinnerComplete = function () { };
    ToolbarFeedback.prototype.render = function () {
        var _a = this.props, popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement;
        var iconBefore = this.state.jiraIssueCollectorScriptLoading ? (React.createElement(spinner_1.default, { isCompleting: false, onComplete: this.handleSpinnerComplete })) : (undefined);
        // JIRA issue collector script is using jQuery internally
        return this.hasJquery() ? (React.createElement(styles_1.Wrapper, null,
            React.createElement(ToolbarButton_1.default, { ref: this.handleRef, iconBefore: iconBefore, onClick: this.collectFeedback, selected: false, spacing: "compact" },
                React.createElement(styles_1.ButtonContent, null, "Feedback")),
            this.state.showOptOutOption && (React.createElement(PopupWithOutsideListeners, { target: this.state.target, mountTo: popupsMountPoint, boundariesElement: popupsBoundariesElement, scrollableElement: popupsScrollableElement, fitHeight: POPUP_HEIGHT, fitWidth: POPUP_WIDTH, handleClickOutside: this.toggleShowOptOutOption, handleEscapeKeydown: this.toggleShowOptOutOption },
                React.createElement(styles_1.ConfirmationPopup, null,
                    React.createElement(styles_1.ConfirmationHeader, null,
                        React.createElement(styles_1.ConfirmationImg, { src: EDITOR_IMAGE_URL })),
                    React.createElement(styles_1.ConfirmationText, null,
                        React.createElement("div", null, "We are rolling out a new editing experience across Atlassian products. Help us improve by providing feedback."),
                        React.createElement("div", null, "You can opt-out for now by turning off the \"Atlassian Editor\" feature on the Labs page in Bitbucket settings."),
                        React.createElement(button_1.ButtonGroup, null,
                            React.createElement(button_1.default, { appearance: "primary", onClick: this.openFeedbackPopup }, "Give feedback"),
                            React.createElement(button_1.default, { appearance: "default", onClick: this.openLearnMorePage }, "Learn more")))))))) : null;
    };
    ToolbarFeedback.contextTypes = {
        editorActions: PropTypes.object.isRequired,
    };
    return ToolbarFeedback;
}(react_1.PureComponent));
exports.default = ToolbarFeedback;
//# sourceMappingURL=index.js.map