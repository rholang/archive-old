"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var version_json_1 = require("../version.json");
var Field_1 = tslib_1.__importDefault(require("./Field"));
var Author = /** @class */ (function (_super) {
    tslib_1.__extends(Author, _super);
    function Author() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Author.prototype.render = function () {
        var _a = this.props, children = _a.children, href = _a.href, onClick = _a.onClick, onFocus = _a.onFocus, onMouseOver = _a.onMouseOver;
        return (react_1.default.createElement(Field_1.default, { hasAuthor: true, href: href, onClick: onClick, onFocus: onFocus, onMouseOver: onMouseOver }, children));
    };
    return Author;
}(react_1.Component));
exports.CommentAuthorWithoutAnalytics = Author;
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'commentAuthor',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    onClick: createAndFireEventOnAtlaskit({
        action: 'clicked',
        actionSubject: 'commentAuthor',
        attributes: {
            componentName: 'commentAuthor',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(Author));
//# sourceMappingURL=Author.js.map