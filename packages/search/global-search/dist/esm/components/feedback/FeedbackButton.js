import { __assign, __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Button from '@atlaskit/button';
import { colors, gridSize } from '@atlaskit/theme';
import FeedbackIcon from '@atlaskit/icon/glyph/feedback';
import { messages } from '../../messages';
// need to add a container around the button so that it lines up with the
// underline of the search input box.
var FeedbackButtonContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: ", "px;\n"], ["\n  margin-top: ", "px;\n"])), gridSize() * 0.5);
var LighterSubtleButton = styled(Button)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  & {\n    color: ", " !important;\n  }\n"], ["\n  & {\n    color: ", " !important;\n  }\n"])), colors.N90);
var FeedbackButton = /** @class */ (function (_super) {
    __extends(FeedbackButton, _super);
    function FeedbackButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FeedbackButton.prototype.render = function () {
        return (React.createElement(FeedbackButtonContainer, null,
            React.createElement(LighterSubtleButton, { appearance: "subtle", iconBefore: React.createElement(FeedbackIcon, { label: "Give feedback" }), onClick: this.props.onClick },
                React.createElement(FormattedMessage, __assign({}, messages.give_feedback)))));
    };
    return FeedbackButton;
}(React.Component));
export default FeedbackButton;
var templateObject_1, templateObject_2;
//# sourceMappingURL=FeedbackButton.js.map