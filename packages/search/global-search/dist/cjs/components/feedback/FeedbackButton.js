"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var theme_1 = require("@atlaskit/theme");
var feedback_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/feedback"));
var messages_1 = require("../../messages");
// need to add a container around the button so that it lines up with the
// underline of the search input box.
var FeedbackButtonContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  margin-top: ", "px;\n"], ["\n  margin-top: ", "px;\n"])), theme_1.gridSize() * 0.5);
var LighterSubtleButton = styled_components_1.default(button_1.default)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  & {\n    color: ", " !important;\n  }\n"], ["\n  & {\n    color: ", " !important;\n  }\n"])), theme_1.colors.N90);
var FeedbackButton = /** @class */ (function (_super) {
    tslib_1.__extends(FeedbackButton, _super);
    function FeedbackButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FeedbackButton.prototype.render = function () {
        return (React.createElement(FeedbackButtonContainer, null,
            React.createElement(LighterSubtleButton, { appearance: "subtle", iconBefore: React.createElement(feedback_1.default, { label: "Give feedback" }), onClick: this.props.onClick },
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.give_feedback)))));
    };
    return FeedbackButton;
}(React.Component));
exports.default = FeedbackButton;
var templateObject_1, templateObject_2;
//# sourceMappingURL=FeedbackButton.js.map