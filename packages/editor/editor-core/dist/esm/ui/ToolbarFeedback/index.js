import { __awaiter, __extends, __generator } from "tslib";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PureComponent } from 'react';
import * as PropTypes from 'prop-types';
import Spinner from '@atlaskit/spinner';
import { Popup } from '@atlaskit/editor-common';
import Button, { ButtonGroup } from '@atlaskit/button';
import { withAnalytics } from '../../analytics';
import ToolbarButton from '../ToolbarButton';
import withOuterListeners from '../with-outer-listeners';
import { Wrapper, ButtonContent, ConfirmationPopup, ConfirmationText, ConfirmationHeader, ConfirmationImg, } from './styles';
import { analyticsEventKey, ACTION, ACTION_SUBJECT, EVENT_TYPE, ACTION_SUBJECT_ID, } from '../../plugins/analytics';
import { createDispatch } from '../../event-dispatcher';
import { openFeedbackDialog } from '../../plugins/feedback-dialog';
import deprecationWarnings from '../../utils/deprecation-warnings';
import pickBy from '../../utils/pick-by';
var PopupWithOutsideListeners = withOuterListeners(Popup);
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
    __extends(ToolbarFeedback, _super);
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
            return pickBy(function (key, value) {
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
        _this.openJiraIssueCollector = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({
                            jiraIssueCollectorScriptLoading: true,
                            showOptOutOption: false,
                        });
                        return [4 /*yield*/, openFeedbackDialog(this.getFeedbackInfo())];
                    case 1:
                        _a.sent();
                        this.setState({ jiraIssueCollectorScriptLoading: false });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.openFeedbackPopup = withAnalytics('atlassian.editor.feedback.button', function () {
            var dispatch = createDispatch(_this.context.editorActions.eventDispatcher);
            dispatch(analyticsEventKey, {
                payload: {
                    action: ACTION.CLICKED,
                    actionSubject: ACTION_SUBJECT.BUTTON,
                    actionSubjectId: ACTION_SUBJECT_ID.BUTTON_FEEDBACK,
                    eventType: EVENT_TYPE.UI,
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
        deprecationWarnings(ToolbarFeedback.name, props, deprecations);
        return _this;
    }
    ToolbarFeedback.prototype.handleSpinnerComplete = function () { };
    ToolbarFeedback.prototype.render = function () {
        var _a = this.props, popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement;
        var iconBefore = this.state.jiraIssueCollectorScriptLoading ? (React.createElement(Spinner, { isCompleting: false, onComplete: this.handleSpinnerComplete })) : (undefined);
        // JIRA issue collector script is using jQuery internally
        return this.hasJquery() ? (React.createElement(Wrapper, null,
            React.createElement(ToolbarButton, { ref: this.handleRef, iconBefore: iconBefore, onClick: this.collectFeedback, selected: false, spacing: "compact" },
                React.createElement(ButtonContent, null, "Feedback")),
            this.state.showOptOutOption && (React.createElement(PopupWithOutsideListeners, { target: this.state.target, mountTo: popupsMountPoint, boundariesElement: popupsBoundariesElement, scrollableElement: popupsScrollableElement, fitHeight: POPUP_HEIGHT, fitWidth: POPUP_WIDTH, handleClickOutside: this.toggleShowOptOutOption, handleEscapeKeydown: this.toggleShowOptOutOption },
                React.createElement(ConfirmationPopup, null,
                    React.createElement(ConfirmationHeader, null,
                        React.createElement(ConfirmationImg, { src: EDITOR_IMAGE_URL })),
                    React.createElement(ConfirmationText, null,
                        React.createElement("div", null, "We are rolling out a new editing experience across Atlassian products. Help us improve by providing feedback."),
                        React.createElement("div", null, "You can opt-out for now by turning off the \"Atlassian Editor\" feature on the Labs page in Bitbucket settings."),
                        React.createElement(ButtonGroup, null,
                            React.createElement(Button, { appearance: "primary", onClick: this.openFeedbackPopup }, "Give feedback"),
                            React.createElement(Button, { appearance: "default", onClick: this.openLearnMorePage }, "Learn more")))))))) : null;
    };
    ToolbarFeedback.contextTypes = {
        editorActions: PropTypes.object.isRequired,
    };
    return ToolbarFeedback;
}(PureComponent));
export default ToolbarFeedback;
//# sourceMappingURL=index.js.map