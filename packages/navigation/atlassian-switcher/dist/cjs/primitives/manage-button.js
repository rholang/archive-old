"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var formatted_message_1 = tslib_1.__importDefault(require("./formatted-message"));
var messages_1 = tslib_1.__importDefault(require("../utils/messages"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var analytics_1 = require("../utils/analytics");
var ManageButton = /** @class */ (function (_super) {
    tslib_1.__extends(ManageButton, _super);
    function ManageButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function (_, analyticsEvent) {
            analyticsEvent
                .update({
                eventType: analytics_1.UI_EVENT_TYPE,
                actionSubjectId: 'manageListButton',
            })
                .fire(analytics_1.NAVIGATION_CHANNEL);
        };
        return _this;
    }
    ManageButton.prototype.render = function () {
        var href = this.props.href;
        return (React.createElement(button_1.default, { href: href, onClick: this.onClick },
            React.createElement(formatted_message_1.default, tslib_1.__assign({}, messages_1.default.manageList))));
    };
    return ManageButton;
}(React.Component));
exports.default = ManageButton;
//# sourceMappingURL=manage-button.js.map