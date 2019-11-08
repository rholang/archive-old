import { __assign, __extends } from "tslib";
import * as React from 'react';
import FeedbackButton from './FeedbackButton';
import FeedbackCollector, { FeedbackFlag } from '@atlaskit/feedback-collector';
import { FlagGroup } from '@atlaskit/flag';
import { injectFeatures } from '../FeaturesProvider';
var EMBEDDABLE_KEY = '85dc6027-c074-4800-ba54-4ecb844b29f8';
var REQUEST_TYPE_ID = '182';
var FEEDBACK_CONTEXT_CF = 'customfield_10047';
export function withFeedbackButton(WrappedComponent) {
    var WithFeedbackButton = /** @class */ (function (_super) {
        __extends(WithFeedbackButton, _super);
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
            return React.createElement(FeedbackButton, { onClick: this.open });
        };
        WithFeedbackButton.prototype.render = function () {
            var _a = this.state, isOpen = _a.isOpen, displayFlag = _a.displayFlag;
            var _b = this.props, name = _b.name, email = _b.email, _c = _b.features.abTest, experimentId = _c.experimentId, abTestId = _c.abTestId;
            var feedbackContext = "experimentId: " + experimentId + ", abTestId: " + abTestId;
            return (React.createElement(React.Fragment, null,
                React.createElement(WrappedComponent, __assign({}, this.props, { inputControls: this.renderFeedbackButton() })),
                isOpen && (React.createElement(FeedbackCollector, { onClose: this.close, onSubmit: this.displayFlag, email: email, name: name, requestTypeId: REQUEST_TYPE_ID, embeddableKey: EMBEDDABLE_KEY, additionalFields: [
                        {
                            id: FEEDBACK_CONTEXT_CF,
                            value: feedbackContext,
                        },
                    ] })),
                displayFlag && (React.createElement(FlagGroup, { onDismissed: this.hideFlag },
                    React.createElement(FeedbackFlag, null)))));
        };
        WithFeedbackButton.displayName = "WithFeedbackButton(" + (WrappedComponent.displayName ||
            WrappedComponent.name) + ")";
        return WithFeedbackButton;
    }(React.Component));
    return injectFeatures(WithFeedbackButton);
}
//# sourceMappingURL=withFeedbackButton.js.map