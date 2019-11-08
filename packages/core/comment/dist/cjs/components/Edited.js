"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var version_json_1 = require("../version.json");
var EditedStyles_1 = tslib_1.__importDefault(require("../styled/EditedStyles"));
var Edited = /** @class */ (function (_super) {
    tslib_1.__extends(Edited, _super);
    function Edited() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Edited.prototype.render = function () {
        var _a = this.props, children = _a.children, onFocus = _a.onFocus, onMouseOver = _a.onMouseOver;
        return (react_1.default.createElement(EditedStyles_1.default, { onFocus: onFocus, onMouseOver: onMouseOver }, children));
    };
    return Edited;
}(react_1.Component));
exports.CommentEditedWithoutAnalytics = Edited;
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'commentEdited',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    onClick: createAndFireEventOnAtlaskit({
        action: 'clicked',
        actionSubject: 'commentEdited',
        attributes: {
            componentName: 'commentEdited',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(Edited));
//# sourceMappingURL=Edited.js.map