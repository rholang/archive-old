import { __assign, __extends } from "tslib";
import * as React from 'react';
import { IconAndTitleLayout } from '../IconAndTitleLayout';
import Button from '@atlaskit/button';
import { Frame } from '../Frame';
import { B400, N500 } from '@atlaskit/theme/colors';
import { messages } from '../../messages';
import { FormattedMessage } from 'react-intl';
import LockIcon from '@atlaskit/icon/glyph/lock-filled';
import { AKIconWrapper } from '../Icon';
import { ForbiddenWrapper } from '../ForbiddenView/styled';
var FallbackUnauthorizedIcon = (React.createElement(AKIconWrapper, null,
    React.createElement(LockIcon, { label: "error", size: "small", primaryColor: B400 })));
var InlineCardUnauthorizedView = /** @class */ (function (_super) {
    __extends(InlineCardUnauthorizedView, _super);
    function InlineCardUnauthorizedView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleConnectAccount = function (event) {
            var onAuthorise = _this.props.onAuthorise;
            event.preventDefault();
            event.stopPropagation();
            return onAuthorise();
        };
        return _this;
    }
    InlineCardUnauthorizedView.prototype.render = function () {
        var _a = this.props, url = _a.url, icon = _a.icon, onClick = _a.onClick, isSelected = _a.isSelected, onAuthorise = _a.onAuthorise;
        return (React.createElement(Frame, { link: url, onClick: onClick, isSelected: isSelected },
            React.createElement(IconAndTitleLayout, { icon: icon ? icon : FallbackUnauthorizedIcon, title: url, titleColor: N500 }),
            !onAuthorise ? (React.createElement(ForbiddenWrapper, null, " \u2011 ",
                React.createElement(FormattedMessage, __assign({}, messages.invalid_permissions)), " ")) : (React.createElement(React.Fragment, null, " \u2011 ",
                React.createElement(Button, { spacing: "none", appearance: "link", onClick: this.handleConnectAccount },
                    React.createElement(FormattedMessage, __assign({}, messages.connect_link_account)))))));
    };
    return InlineCardUnauthorizedView;
}(React.Component));
export { InlineCardUnauthorizedView };
//# sourceMappingURL=index.js.map