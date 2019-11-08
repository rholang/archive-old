"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var styled_1 = require("./styled");
var cardActionIconButton_1 = require("./cardActionIconButton");
var cardActionsDropdownMenu_1 = require("./cardActionsDropdownMenu");
var preventClickThrough_1 = require("../preventClickThrough");
var analytics_1 = require("../analytics");
var analytics_next_1 = require("@atlaskit/analytics-next");
var CardActionIconButtonWithProps = function (props) { return React.createElement(cardActionIconButton_1.CardActionIconButton, tslib_1.__assign({}, props)); };
var CardActionsView = /** @class */ (function (_super) {
    tslib_1.__extends(CardActionsView, _super);
    function CardActionsView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardActionsView.prototype.render = function () {
        var actions = this.props.actions;
        if (!actions.length) {
            return null;
        }
        var primaryAction = actions.find(actionWithIcon);
        var otherActions = actions.filter(actionNotEqualTo(primaryAction));
        return (React.createElement(preventClickThrough_1.PreventClickThrough, null,
            React.createElement(styled_1.Wrapper, null,
                primaryAction
                    ? this.renderActionIconButton(primaryAction, true)
                    : null,
                this.renderOtherActionButtons(otherActions))));
    };
    CardActionsView.prototype.renderActionIconButton = function (action, isPrimary) {
        var triggerColor = this.props.triggerColor;
        var icon = action.icon, handler = action.handler, label = action.label;
        var CardActionIconButtonWithAnalytics = analytics_next_1.withAnalyticsEvents({
            onClick: analytics_1.createAndFireMediaEvent({
                eventType: 'ui',
                action: 'clicked',
                actionSubject: 'button',
                actionSubjectId: isPrimary
                    ? 'mediaCardPrimaryActionButton'
                    : 'mediaCardSecondaryActionButton',
                attributes: {
                    label: label,
                },
            }),
        })(CardActionIconButtonWithProps);
        return (React.createElement(CardActionIconButtonWithAnalytics, { icon: icon, triggerColor: triggerColor, onClick: function () { return handler(); } }));
    };
    CardActionsView.prototype.renderOtherActionButtons = function (actions) {
        if (actions.length === 0) {
            return null;
        }
        else {
            var _a = this.props, triggerColor = _a.triggerColor, onToggle = _a.onToggle;
            var firstActionWithIcon = actions.find(actionWithIcon);
            var otherActions = actions.filter(actionNotEqualTo(firstActionWithIcon));
            if (firstActionWithIcon && otherActions.length === 0) {
                return this.renderActionIconButton(firstActionWithIcon, false);
            }
            else {
                return (React.createElement(cardActionsDropdownMenu_1.CardActionsDropdownMenu, { actions: actions, triggerColor: triggerColor, onOpenChange: onToggle }));
            }
        }
    };
    return CardActionsView;
}(react_1.Component));
exports.CardActionsView = CardActionsView;
function actionWithIcon(action) {
    return !!action.icon;
}
function actionNotEqualTo(otherAction) {
    return function (action) { return action !== otherAction; };
}
//# sourceMappingURL=cardActionsView.js.map