import { __extends } from "tslib";
import React, { Component } from 'react';
import { withAnalyticsEvents, withAnalyticsContext, createAndFireEvent, } from '@atlaskit/analytics-next';
import Button from '@atlaskit/button';
import { name as packageName, version as packageVersion, } from '../version.json';
var ActionItem = /** @class */ (function (_super) {
    __extends(ActionItem, _super);
    function ActionItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActionItem.prototype.render = function () {
        var _a = this.props, children = _a.children, onClick = _a.onClick, onFocus = _a.onFocus, onMouseOver = _a.onMouseOver;
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        React.createElement("span", { onClick: onClick, onFocus: onFocus, onMouseOver: onMouseOver },
            React.createElement(Button, { appearance: "subtle-link", spacing: "none", type: "button" }, children)));
        /* eslint-enable jsx-a11y/no-static-element-interactions */
    };
    return ActionItem;
}(Component));
export { ActionItem as CommentActionWithoutAnalytics };
var createAndFireEventOnAtlaskit = createAndFireEvent('atlaskit');
export default withAnalyticsContext({
    componentName: 'commentAction',
    packageName: packageName,
    packageVersion: packageVersion,
})(withAnalyticsEvents({
    onClick: createAndFireEventOnAtlaskit({
        action: 'clicked',
        actionSubject: 'commentAction',
        attributes: {
            componentName: 'commentAction',
            packageName: packageName,
            packageVersion: packageVersion,
        },
    }),
})(ActionItem));
//# sourceMappingURL=ActionItem.js.map