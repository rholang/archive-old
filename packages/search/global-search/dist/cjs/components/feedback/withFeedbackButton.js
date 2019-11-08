"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var FeedbackButton_1 = tslib_1.__importDefault(require("./FeedbackButton"));
var feedback_collector_1 = tslib_1.__importStar(require("@atlaskit/feedback-collector"));
var flag_1 = require("@atlaskit/flag");
var FeaturesProvider_1 = require("../FeaturesProvider");
var EMBEDDABLE_KEY = '85dc6027-c074-4800-ba54-4ecb844b29f8';
var REQUEST_TYPE_ID = '182';
var FEEDBACK_CONTEXT_CF = 'customfield_10047';
function withFeedbackButton(WrappedComponent) {
    var WithFeedbackButton = /** @class */ (function (_super) {
        tslib_1.__extends(WithFeedbackButton, _super);
        function WithFeedbackButton() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                isOpen: false,
                displayFlag: false,
            };
            _this.open = function () { return _this.setState({ isOpen: true }); };
            _this.close = function () {
                _this.setState({ isOpen: false });
            };
            _this.displayFlag = function () { return _this.setState({ displayFlag: true }); };
            _this.hideFlag = function () { return _this.setState({ displayFlag: false }); };
            return _this;
        }
        WithFeedbackButton.prototype.renderFeedbackButton = function () {
            return React.createElement(FeedbackButton_1.default, { onClick: this.open });
        };
        WithFeedbackButton.prototype.render = function () {
            var _a = this.state, isOpen = _a.isOpen, displayFlag = _a.displayFlag;
            var _b = this.props, name = _b.name, email = _b.email, _c = _b.features.abTest, experimentId = _c.experimentId, abTestId = _c.abTestId;
            var feedbackContext = "experimentId: " + experimentId + ", abTestId: " + abTestId;
            return (React.createElement(React.Fragment, null,
                React.createElement(WrappedComponent, tslib_1.__assign({}, this.props, { inputControls: this.renderFeedbackButton() })),
                isOpen && (React.createElement(feedback_collector_1.default, { onClose: this.close, onSubmit: this.displayFlag, email: email, name: name, requestTypeId: REQUEST_TYPE_ID, embeddableKey: EMBEDDABLE_KEY, additionalFields: [
                        {
                            id: FEEDBACK_CONTEXT_CF,
                            value: feedbackContext,
                        },
                    ] })),
                displayFlag && (React.createElement(flag_1.FlagGroup, { onDismissed: this.hideFlag },
                    React.createElement(feedback_collector_1.FeedbackFlag, null)))));
        };
        WithFeedbackButton.displayName = "WithFeedbackButton(" + (WrappedComponent.displayName ||
            WrappedComponent.name) + ")";
        return WithFeedbackButton;
    }(React.Component));
    return FeaturesProvider_1.injectFeatures(WithFeedbackButton);
}
exports.withFeedbackButton = withFeedbackButton;
//# sourceMappingURL=withFeedbackButton.js.map