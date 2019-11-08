"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var analytics_1 = require("../analytics");
var HelpContext_1 = require("./HelpContext");
var MessagesIntlProvider_1 = tslib_1.__importDefault(require("./MessagesIntlProvider"));
var HelpContent_1 = tslib_1.__importDefault(require("./HelpContent"));
var Help = /** @class */ (function (_super) {
    tslib_1.__extends(Help, _super);
    function Help() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Help.prototype.render = function () {
        var _a = this.props, children = _a.children, footer = _a.footer, rest = tslib_1.__rest(_a, ["children", "footer"]);
        return (React.createElement(HelpContext_1.HelpContextProvider, tslib_1.__assign({}, rest, { defaultContent: children, footer: footer }),
            React.createElement(MessagesIntlProvider_1.default, null,
                React.createElement(HelpContent_1.default, null))));
    };
    return Help;
}(React.Component));
exports.Help = Help;
exports.default = analytics_next_1.withAnalyticsContext(analytics_1.defaultAnalyticsAttributes)(analytics_next_1.withAnalyticsEvents()(Help));
//# sourceMappingURL=Help.js.map