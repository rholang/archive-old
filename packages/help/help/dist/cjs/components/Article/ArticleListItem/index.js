"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
var document_filled_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/document-filled"));
var shortcut_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/shortcut"));
var version_json_1 = require("../../../version.json");
var analytics_1 = require("../../../analytics");
var styled_1 = require("./styled");
var ArticlesListItem = function (props) {
    var id = props.id, _a = props.title, title = _a === void 0 ? '' : _a, _b = props.description, description = _b === void 0 ? '' : _b, _c = props.icon, icon = _c === void 0 ? (React.createElement(document_filled_1.default, { primaryColor: colors.P300, size: "medium", label: "" })) : _c, _d = props.href, href = _d === void 0 ? '' : _d, _e = props.onClick, onClick = _e === void 0 ? function (id, analyticsEvent) { } : _e, createAnalyticsEvent = props.createAnalyticsEvent;
    var handleOnClick = function (event) {
        event.preventDefault();
        if (onClick) {
            var analyticsEvent = createAnalyticsEvent({
                action: 'clicked',
            });
            onClick(id, analyticsEvent);
        }
    };
    return (React.createElement(styled_1.ArticlesListItemWrapper, { "aria-disabled": "false", role: "button", href: href, onClick: handleOnClick },
        React.createElement(styled_1.ArticlesListItemTitle, null,
            React.createElement(styled_1.ArticlesListItemTitleIcon, null, icon),
            React.createElement(styled_1.ArticlesListItemTitleText, null, title),
            href && (React.createElement(styled_1.ArticlesListItemLinkIcon, null,
                React.createElement(shortcut_1.default, { size: "small", label: title, primaryColor: colors.N90, secondaryColor: colors.N90 })))),
        React.createElement(styled_1.ArticlesListItemDescription, null, description)));
};
exports.default = analytics_1.withAnalyticsContext({
    componentName: 'ArticleListItem',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_1.withAnalyticsEvents()(ArticlesListItem));
//# sourceMappingURL=index.js.map