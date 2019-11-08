import { __assign, __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import MoreIcon from '@atlaskit/icon/glyph/more';
import DropdownMenu, { DropdownItemGroup, DropdownItem, } from '@atlaskit/dropdown-menu';
import { CardActionButton } from './styled';
import { withAnalyticsEvents, } from '@atlaskit/analytics-next';
import { createAndFireMediaEvent } from '../analytics';
var CardActionButtonWithProps = function (props) { return (React.createElement(CardActionButton, __assign({}, props))); };
var CardActionButtonWithAnalytics = withAnalyticsEvents({
    onClick: createAndFireMediaEvent({
        eventType: 'ui',
        action: 'clicked',
        actionSubject: 'button',
        actionSubjectId: 'mediaCardDropDownMenu',
    }),
})(CardActionButtonWithProps);
var DropdownItemWithProps = function (props) { return (React.createElement(DropdownItem, __assign({}, props))); };
var createDropdownItemWithAnalytics = function (action, index) {
    var label = action.label, handler = action.handler;
    var DropdownItemWithAnalytics = withAnalyticsEvents({
        onClick: createAndFireMediaEvent({
            eventType: 'ui',
            action: 'clicked',
            actionSubject: 'button',
            actionSubjectId: 'mediaCardDropDownMenuItem',
            attributes: {
                label: label,
            },
        }),
    })(DropdownItemWithProps);
    return (React.createElement(DropdownItemWithAnalytics, { key: index, onClick: handler }, label));
};
var CardActionsDropdownMenu = /** @class */ (function (_super) {
    __extends(CardActionsDropdownMenu, _super);
    function CardActionsDropdownMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardActionsDropdownMenu.prototype.render = function () {
        var _a = this.props, actions = _a.actions, triggerColor = _a.triggerColor, onOpenChange = _a.onOpenChange;
        if (actions.length > 0) {
            return (React.createElement(DropdownMenu, { onOpenChange: onOpenChange, trigger: React.createElement(CardActionButtonWithAnalytics, { style: { color: triggerColor } },
                    React.createElement(MoreIcon, { label: "more" })) },
                React.createElement(DropdownItemGroup, null, actions.map(createDropdownItemWithAnalytics))));
        }
        else {
            return null;
        }
    };
    return CardActionsDropdownMenu;
}(Component));
export { CardActionsDropdownMenu };
//# sourceMappingURL=cardActionsDropdownMenu.js.map