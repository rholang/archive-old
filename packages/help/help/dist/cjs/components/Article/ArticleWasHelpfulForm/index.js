"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var button_1 = tslib_1.__importStar(require("@atlaskit/button"));
var form_1 = tslib_1.__importStar(require("@atlaskit/form"));
var radio_1 = require("@atlaskit/radio");
var textarea_1 = tslib_1.__importDefault(require("@atlaskit/textarea"));
var constants_1 = require("@atlaskit/theme/constants");
var version_json_1 = require("../../../version.json");
var analytics_1 = require("../../../analytics");
var messages_1 = require("../../../messages");
var HelpContext_1 = require("../../HelpContext");
var WasHelpfulYesButton_1 = tslib_1.__importDefault(require("./WasHelpfulYesButton"));
var WasHelpfulNoButton_1 = tslib_1.__importDefault(require("./WasHelpfulNoButton"));
var styled_1 = require("./styled");
var ArticleWasHelpfulForm = /** @class */ (function (_super) {
    tslib_1.__extends(ArticleWasHelpfulForm, _super);
    function ArticleWasHelpfulForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            wasHelpful: null,
        };
        _this.onWasHelpfulOptionClicked = function (wasHelpful) {
            _this.setState({ wasHelpful: wasHelpful });
        };
        _this.onRateSubmit = function (articleFeedback) {
            var analyticsEvent;
            if (_this.props.help.onWasHelpfulSubmit) {
                if (_this.props.createAnalyticsEvent) {
                    analyticsEvent = _this.props.createAnalyticsEvent({
                        action: 'clicked',
                    });
                }
                try {
                    _this.props.help
                        .onWasHelpfulSubmit(articleFeedback, analyticsEvent)
                        .then(function () {
                        _this.setState({ wasHelpful: null });
                    });
                }
                catch (error) {
                    // TODO: Display error
                }
            }
        };
        _this.onRateSubmitCancel = function () {
            _this.setState({ wasHelpful: null });
        };
        return _this;
    }
    ArticleWasHelpfulForm.prototype.render = function () {
        var _this = this;
        var wasHelpful = this.state.wasHelpful;
        var negativeRateReason = [
            {
                name: 'negativeRateReason',
                value: 'noAccurate',
                label: this.props.intl.formatMessage(messages_1.messages.help_panel_article_rating_accurate),
            },
            {
                name: 'negativeRateReason',
                value: 'noClear',
                label: this.props.intl.formatMessage(messages_1.messages.help_panel_article_rating_clear),
            },
            {
                name: 'negativeRateReason',
                value: 'noRelevant',
                label: this.props.intl.formatMessage(messages_1.messages.help_panel_article_rating_relevant),
            },
        ];
        return (React.createElement(styled_1.ArticleRateContainer, null,
            React.createElement(styled_1.ArticleRateText, { style: { paddingRight: constants_1.gridSize() + "px" } }, this.props.intl.formatMessage(messages_1.messages.help_panel_article_rating_title)),
            React.createElement(button_1.ButtonGroup, null,
                React.createElement(WasHelpfulYesButton_1.default, { onClick: function () { return _this.onWasHelpfulOptionClicked(true); }, isSelected: wasHelpful === true }),
                React.createElement(WasHelpfulNoButton_1.default, { onClick: function () { return _this.onWasHelpfulOptionClicked(false); }, isSelected: wasHelpful === false })),
            wasHelpful !== null && this.props.help.onWasHelpfulSubmit && (React.createElement(styled_1.ArticleRateAnswerWrapper, null,
                React.createElement(form_1.default, { onSubmit: this.onRateSubmit }, function (_a) {
                    var formProps = _a.formProps;
                    return (React.createElement("form", tslib_1.__assign({}, formProps, { name: "form-example" }),
                        React.createElement(styled_1.ArticleRateText, null, _this.props.intl.formatMessage(messages_1.messages.help_panel_article_rating_form_title)),
                        !wasHelpful && (React.createElement(form_1.Field, { name: "negativeRateReason" }, function (_a) {
                            var fieldProps = _a.fieldProps;
                            return (React.createElement(radio_1.RadioGroup, tslib_1.__assign({}, fieldProps, { options: negativeRateReason })));
                        })),
                        React.createElement(form_1.Field, { name: "RateReasonText", defaultValue: "" }, function (_a) {
                            var fieldProps = _a.fieldProps;
                            return (React.createElement(textarea_1.default, tslib_1.__assign({}, fieldProps, { minimumRows: 4 })));
                        }),
                        React.createElement(form_1.FormFooter, null,
                            React.createElement(button_1.ButtonGroup, null,
                                React.createElement(button_1.default, { type: "submit", appearance: "primary" }, _this.props.intl.formatMessage(messages_1.messages.help_panel_article_rating_form_submit)),
                                React.createElement(button_1.default, { onClick: _this.onRateSubmitCancel }, _this.props.intl.formatMessage(messages_1.messages.help_panel_article_rating_form_cancel))))));
                })))));
    };
    return ArticleWasHelpfulForm;
}(React.Component));
exports.ArticleWasHelpfulForm = ArticleWasHelpfulForm;
exports.default = analytics_1.withAnalyticsContext({
    componentName: 'ArticleWasHelpfulForm',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_1.withAnalyticsEvents()(HelpContext_1.withHelp(react_intl_1.injectIntl(ArticleWasHelpfulForm))));
//# sourceMappingURL=index.js.map