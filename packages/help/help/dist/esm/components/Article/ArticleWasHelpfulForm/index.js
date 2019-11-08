import { __assign, __extends } from "tslib";
import * as React from 'react';
import { injectIntl } from 'react-intl';
import Button, { ButtonGroup } from '@atlaskit/button';
import Form, { Field, FormFooter } from '@atlaskit/form';
import { RadioGroup } from '@atlaskit/radio';
import TextArea from '@atlaskit/textarea';
import { gridSize } from '@atlaskit/theme/constants';
import { name as packageName, version as packageVersion, } from '../../../version.json';
import { withAnalyticsEvents, withAnalyticsContext } from '../../../analytics';
import { messages } from '../../../messages';
import { withHelp } from '../../HelpContext';
import ArticleWasHelpfulYesButton from './WasHelpfulYesButton';
import ArticleWasHelpfulNoButton from './WasHelpfulNoButton';
import { ArticleRateContainer, ArticleRateText, ArticleRateAnswerWrapper, } from './styled';
var ArticleWasHelpfulForm = /** @class */ (function (_super) {
    __extends(ArticleWasHelpfulForm, _super);
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
                label: this.props.intl.formatMessage(messages.help_panel_article_rating_accurate),
            },
            {
                name: 'negativeRateReason',
                value: 'noClear',
                label: this.props.intl.formatMessage(messages.help_panel_article_rating_clear),
            },
            {
                name: 'negativeRateReason',
                value: 'noRelevant',
                label: this.props.intl.formatMessage(messages.help_panel_article_rating_relevant),
            },
        ];
        return (React.createElement(ArticleRateContainer, null,
            React.createElement(ArticleRateText, { style: { paddingRight: gridSize() + "px" } }, this.props.intl.formatMessage(messages.help_panel_article_rating_title)),
            React.createElement(ButtonGroup, null,
                React.createElement(ArticleWasHelpfulYesButton, { onClick: function () { return _this.onWasHelpfulOptionClicked(true); }, isSelected: wasHelpful === true }),
                React.createElement(ArticleWasHelpfulNoButton, { onClick: function () { return _this.onWasHelpfulOptionClicked(false); }, isSelected: wasHelpful === false })),
            wasHelpful !== null && this.props.help.onWasHelpfulSubmit && (React.createElement(ArticleRateAnswerWrapper, null,
                React.createElement(Form, { onSubmit: this.onRateSubmit }, function (_a) {
                    var formProps = _a.formProps;
                    return (React.createElement("form", __assign({}, formProps, { name: "form-example" }),
                        React.createElement(ArticleRateText, null, _this.props.intl.formatMessage(messages.help_panel_article_rating_form_title)),
                        !wasHelpful && (React.createElement(Field, { name: "negativeRateReason" }, function (_a) {
                            var fieldProps = _a.fieldProps;
                            return (React.createElement(RadioGroup, __assign({}, fieldProps, { options: negativeRateReason })));
                        })),
                        React.createElement(Field, { name: "RateReasonText", defaultValue: "" }, function (_a) {
                            var fieldProps = _a.fieldProps;
                            return (React.createElement(TextArea, __assign({}, fieldProps, { minimumRows: 4 })));
                        }),
                        React.createElement(FormFooter, null,
                            React.createElement(ButtonGroup, null,
                                React.createElement(Button, { type: "submit", appearance: "primary" }, _this.props.intl.formatMessage(messages.help_panel_article_rating_form_submit)),
                                React.createElement(Button, { onClick: _this.onRateSubmitCancel }, _this.props.intl.formatMessage(messages.help_panel_article_rating_form_cancel))))));
                })))));
    };
    return ArticleWasHelpfulForm;
}(React.Component));
export { ArticleWasHelpfulForm };
export default withAnalyticsContext({
    componentName: 'ArticleWasHelpfulForm',
    packageName: packageName,
    packageVersion: packageVersion,
})(withAnalyticsEvents()(withHelp(injectIntl(ArticleWasHelpfulForm))));
//# sourceMappingURL=index.js.map