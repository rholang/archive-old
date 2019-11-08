import { __assign, __extends } from "tslib";
import * as React from 'react';
import Button from '@atlaskit/button';
import { N0 } from '@atlaskit/theme/colors';
import LockFilledIcon from '@atlaskit/icon/glyph/lock-filled';
import { CollapsedFrame } from '../CollapsedFrame';
import { minWidth, maxWidth } from '../dimensions';
import { CollapsedIconTitleDescriptionLayout } from '../CollapsedIconTitleDescriptionLayout';
import { IconBackground } from './styled';
import { messages } from '../../messages';
import { FormattedMessage } from 'react-intl';
var BlockCardForbiddenView = /** @class */ (function (_super) {
    __extends(BlockCardForbiddenView, _super);
    function BlockCardForbiddenView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleAuthorise = function (event) {
            var onAuthorise = _this.props.onAuthorise;
            if (onAuthorise) {
                event.preventDefault();
                event.stopPropagation();
                onAuthorise();
            }
        };
        return _this;
    }
    BlockCardForbiddenView.prototype.render = function () {
        var _a = this.props, url = _a.url, onClick = _a.onClick, onAuthorise = _a.onAuthorise, isSelected = _a.isSelected;
        return (React.createElement(CollapsedFrame, { isSelected: isSelected, minWidth: minWidth, maxWidth: maxWidth, onClick: onClick },
            React.createElement(CollapsedIconTitleDescriptionLayout, { icon: React.createElement(IconBackground, null,
                    React.createElement(LockFilledIcon, { label: "forbidden", size: "medium", primaryColor: N0 })), title: url, description: React.createElement(React.Fragment, null,
                    React.createElement(FormattedMessage, __assign({}, messages.invalid_permissions)),
                    ' ',
                    onAuthorise && (React.createElement(Button, { appearance: "link", spacing: "none", onClick: this.handleAuthorise },
                        React.createElement(FormattedMessage, __assign({}, messages.try_another_account))))) })));
    };
    return BlockCardForbiddenView;
}(React.Component));
export { BlockCardForbiddenView };
//# sourceMappingURL=index.js.map