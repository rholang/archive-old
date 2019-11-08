"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PropTypes = tslib_1.__importStar(require("prop-types"));
var help_dialog_1 = require("../../plugins/help-dialog");
var analytics_1 = require("../../analytics");
var analytics_2 = require("../../plugins/analytics");
var event_dispatcher_1 = require("../../event-dispatcher");
var WithHelpTrigger = /** @class */ (function (_super) {
    tslib_1.__extends(WithHelpTrigger, _super);
    function WithHelpTrigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.openHelp = function () {
            var editorActions = _this.context.editorActions;
            var dispatch = event_dispatcher_1.createDispatch(editorActions.eventDispatcher);
            dispatch(analytics_2.analyticsEventKey, {
                payload: {
                    action: analytics_2.ACTION.CLICKED,
                    actionSubject: analytics_2.ACTION_SUBJECT.BUTTON,
                    actionSubjectId: analytics_2.ACTION_SUBJECT_ID.BUTTON_HELP,
                    attributes: { inputMethod: analytics_2.INPUT_METHOD.TOOLBAR },
                    eventType: analytics_2.EVENT_TYPE.UI,
                },
            });
            analytics_1.analyticsService.trackEvent('atlassian.editor.help.button');
            var editorView = editorActions._privateGetEditorView();
            if (editorView) {
                help_dialog_1.openHelpCommand(editorView.state.tr, editorView.dispatch);
            }
        };
        return _this;
    }
    WithHelpTrigger.prototype.render = function () {
        return this.props.render(this.openHelp);
    };
    WithHelpTrigger.contextTypes = {
        editorActions: PropTypes.object.isRequired,
    };
    return WithHelpTrigger;
}(React.Component));
exports.default = WithHelpTrigger;
//# sourceMappingURL=index.js.map