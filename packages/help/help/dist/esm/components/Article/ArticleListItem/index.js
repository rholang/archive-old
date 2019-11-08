import * as React from 'react';
import * as colors from '@atlaskit/theme/colors';
import DocumentFilledIcon from '@atlaskit/icon/glyph/document-filled';
import ShortcutIcon from '@atlaskit/icon/glyph/shortcut';
import { name as packageName, version as packageVersion, } from '../../../version.json';
import { withAnalyticsEvents, withAnalyticsContext } from '../../../analytics';
import { ArticlesListItemTitleIcon, ArticlesListItemWrapper, ArticlesListItemTitle, ArticlesListItemTitleText, ArticlesListItemDescription, ArticlesListItemLinkIcon, } from './styled';
var ArticlesListItem = function (props) {
    var id = props.id, _a = props.title, title = _a === void 0 ? '' : _a, _b = props.description, description = _b === void 0 ? '' : _b, _c = props.icon, icon = _c === void 0 ? (React.createElement(DocumentFilledIcon, { primaryColor: colors.P300, size: "medium", label: "" })) : _c, _d = props.href, href = _d === void 0 ? '' : _d, _e = props.onClick, onClick = _e === void 0 ? function (id, analyticsEvent) { } : _e, createAnalyticsEvent = props.createAnalyticsEvent;
    var handleOnClick = function (event) {
        event.preventDefault();
        if (onClick) {
            var analyticsEvent = createAnalyticsEvent({
                action: 'clicked',
            });
            onClick(id, analyticsEvent);
        }
    };
    return (React.createElement(ArticlesListItemWrapper, { "aria-disabled": "false", role: "button", href: href, onClick: handleOnClick },
        React.createElement(ArticlesListItemTitle, null,
            React.createElement(ArticlesListItemTitleIcon, null, icon),
            React.createElement(ArticlesListItemTitleText, null, title),
            href && (React.createElement(ArticlesListItemLinkIcon, null,
                React.createElement(ShortcutIcon, { size: "small", label: title, primaryColor: colors.N90, secondaryColor: colors.N90 })))),
        React.createElement(ArticlesListItemDescription, null, description)));
};
export default withAnalyticsContext({
    componentName: 'ArticleListItem',
    packageName: packageName,
    packageVersion: packageVersion,
})(withAnalyticsEvents()(ArticlesListItem));
//# sourceMappingURL=index.js.map