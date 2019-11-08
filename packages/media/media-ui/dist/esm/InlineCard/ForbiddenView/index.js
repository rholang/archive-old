import { __assign, __extends } from "tslib";
import * as React from 'react';
import { B400, N500 } from '@atlaskit/theme/colors';
import LockIcon from '@atlaskit/icon/glyph/lock-filled';
import Button from '@atlaskit/button';
import { Frame } from '../Frame';
import { IconAndTitleLayout } from '../IconAndTitleLayout';
import { AKIconWrapper } from '../Icon';
import { messages } from '../../messages';
import { FormattedMessage } from 'react-intl';
import { ForbiddenWrapper } from './styled';
var InlineCardForbiddenView = /** @class */ (function (_super) {
    __extends(InlineCardForbiddenView, _super);
    function InlineCardForbiddenView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleRetry = function (event) {
            var onAuthorise = _this.props.onAuthorise;
            event.preventDefault();
            event.stopPropagation();
            onAuthorise();
        };
        return _this;
    }
    InlineCardForbiddenView.prototype.render = function () {
        var _a = this.props, url = _a.url, onClick = _a.onClick, isSelected = _a.isSelected, onAuthorise = _a.onAuthorise;
        return (React.createElement(Frame, { link: url, onClick: onClick, isSelected: isSelected },
            React.createElement(IconAndTitleLayout, { icon: React.createElement(AKIconWrapper, null,
                    React.createElement(LockIcon, { label: "error", size: "small", primaryColor: B400 })), title: url, titleColor: N500 }),
            !onAuthorise ? ('') : (React.createElement(React.Fragment, null,
                React.createElement(ForbiddenWrapper, null, " - ",
                    React.createElement(FormattedMessage, __assign({}, messages.invalid_permissions)), " "),
                React.createElement(Button, { spacing: "none", appearance: "link", onClick: this.handleRetry },
                    React.createElement(FormattedMessage, __assign({}, messages.try_another_account)))))));
    };
    return InlineCardForbiddenView;
}(React.Component));
export { InlineCardForbiddenView };
//# sourceMappingURL=index.js.map