"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var version_json_1 = require("../version.json");
var ActionItem = /** @class */ (function (_super) {
    tslib_1.__extends(ActionItem, _super);
    function ActionItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActionItem.prototype.render = function () {
        var _a = this.props, children = _a.children, onClick = _a.onClick, onFocus = _a.onFocus, onMouseOver = _a.onMouseOver;
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        react_1.default.createElement("span", { onClick: onClick, onFocus: onFocus, onMouseOver: onMouseOver },
            react_1.default.createElement(button_1.default, { appearance: "subtle-link", spacing: "none", type: "button" }, children)));
        /* eslint-enable jsx-a11y/no-static-element-interactions */
    };
    return ActionItem;
}(react_1.Component));
exports.CommentActionWithoutAnalytics = ActionItem;
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'commentAction',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    onClick: createAndFireEventOnAtlaskit({
        action: 'clicked',
        actionSubject: 'commentAction',
        attributes: {
            componentName: 'commentAction',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(ActionItem));
//# sourceMappingURL=ActionItem.js.map