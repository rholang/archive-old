import { __assign, __extends } from "tslib";
import * as React from 'react';
import FormattedMessage from './formatted-message';
import messages from '../utils/messages';
import Button from '@atlaskit/button';
import { NAVIGATION_CHANNEL, UI_EVENT_TYPE } from '../utils/analytics';
var ManageButton = /** @class */ (function (_super) {
    __extends(ManageButton, _super);
    function ManageButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function (_, analyticsEvent) {
            analyticsEvent
                .update({
                eventType: UI_EVENT_TYPE,
                actionSubjectId: 'manageListButton',
            })
                .fire(NAVIGATION_CHANNEL);
        };
        return _this;
    }
    ManageButton.prototype.render = function () {
        var href = this.props.href;
        return (React.createElement(Button, { href: href, onClick: this.onClick },
            React.createElement(FormattedMessage, __assign({}, messages.manageList))));
    };
    return ManageButton;
}(React.Component));
export default ManageButton;
//# sourceMappingURL=manage-button.js.map