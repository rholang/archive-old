"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var i18n_1 = require("../components/i18n");
exports.noPropFormatter = function (messageDescriptor) { return function (props) { return (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, props, messageDescriptor))); }; };
exports.NoAccessWarning = function (_a) {
    var name = _a.name, props = tslib_1.__rest(_a, ["name"]);
    return (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, props, { values: { name: name } }, i18n_1.messages.noAccessWarning)));
};
exports.NoAccessLabel = exports.noPropFormatter(i18n_1.messages.noAccessLabel);
exports.DefaultHeadline = exports.noPropFormatter(i18n_1.messages.defaultHeadline);
exports.DefaultAdvisedAction = exports.noPropFormatter(i18n_1.messages.defaultAdvisedAction);
exports.LoginAgain = exports.noPropFormatter(i18n_1.messages.loginAgain);
exports.DifferentText = exports.noPropFormatter(i18n_1.messages.differentText);
exports.TeamMentionHighlightTitle = exports.noPropFormatter(i18n_1.messages.TeamMentionHighlightTitle);
exports.TeamMentionHighlightCloseTooltip = exports.noPropFormatter(i18n_1.messages.TeamMentionHighlightCloseButtonToolTip);
exports.TeamMentionHighlightDescription = exports.noPropFormatter(i18n_1.messages.TeamMentionHighlightDescription);
exports.TeamMentionHighlightDescriptionLink = exports.noPropFormatter(i18n_1.messages.TeamMentionHighlightDescriptionLink);
//# sourceMappingURL=i18n.js.map