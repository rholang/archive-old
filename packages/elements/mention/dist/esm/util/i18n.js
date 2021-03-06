import { __assign, __rest } from "tslib";
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { messages } from '../components/i18n';
export var noPropFormatter = function (messageDescriptor) { return function (props) { return (React.createElement(FormattedMessage, __assign({}, props, messageDescriptor))); }; };
export var NoAccessWarning = function (_a) {
    var name = _a.name, props = __rest(_a, ["name"]);
    return (React.createElement(FormattedMessage, __assign({}, props, { values: { name: name } }, messages.noAccessWarning)));
};
export var NoAccessLabel = noPropFormatter(messages.noAccessLabel);
export var DefaultHeadline = noPropFormatter(messages.defaultHeadline);
export var DefaultAdvisedAction = noPropFormatter(messages.defaultAdvisedAction);
export var LoginAgain = noPropFormatter(messages.loginAgain);
export var DifferentText = noPropFormatter(messages.differentText);
export var TeamMentionHighlightTitle = noPropFormatter(messages.TeamMentionHighlightTitle);
export var TeamMentionHighlightCloseTooltip = noPropFormatter(messages.TeamMentionHighlightCloseButtonToolTip);
export var TeamMentionHighlightDescription = noPropFormatter(messages.TeamMentionHighlightDescription);
export var TeamMentionHighlightDescriptionLink = noPropFormatter(messages.TeamMentionHighlightDescriptionLink);
//# sourceMappingURL=i18n.js.map