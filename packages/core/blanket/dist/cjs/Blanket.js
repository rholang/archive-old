"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var version_json_1 = require("./version.json");
var styled_1 = tslib_1.__importDefault(require("./styled"));
var Blanket = /** @class */ (function (_super) {
    tslib_1.__extends(Blanket, _super);
    function Blanket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Blanket.prototype.render = function () {
        var _a = this.props, canClickThrough = _a.canClickThrough, isTinted = _a.isTinted, onBlanketClicked = _a.onBlanketClicked;
        var onClick = canClickThrough ? null : onBlanketClicked;
        var containerProps = { canClickThrough: canClickThrough, isTinted: isTinted, onClick: onClick };
        return react_1.default.createElement(styled_1.default, tslib_1.__assign({}, containerProps));
    };
    Blanket.defaultProps = {
        canClickThrough: false,
        isTinted: false,
        onBlanketClicked: function () { },
    };
    return Blanket;
}(react_1.default.Component));
exports.BlanketWithoutAnalytics = Blanket;
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'blanket',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    onBlanketClicked: createAndFireEventOnAtlaskit({
        action: 'clicked',
        actionSubject: 'blanket',
        attributes: {
            componentName: 'blanket',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(Blanket));
//# sourceMappingURL=Blanket.js.map