import { __assign, __extends } from "tslib";
import * as React from 'react';
import { R300 } from '@atlaskit/theme/colors';
import ErrorIcon from '@atlaskit/icon/glyph/error';
import Button from '@atlaskit/button';
import { Frame } from '../Frame';
import { IconAndTitleLayout } from '../IconAndTitleLayout';
import { AKIconWrapper } from '../Icon';
import { messages } from '../../messages';
import { FormattedMessage } from 'react-intl';
var InlineCardErroredView = /** @class */ (function (_super) {
    __extends(InlineCardErroredView, _super);
    function InlineCardErroredView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleRetry = function (event) {
            var onRetry = _this.props.onRetry;
            if (onRetry) {
                event.preventDefault();
                event.stopPropagation();
                onRetry();
            }
        };
        return _this;
    }
    InlineCardErroredView.prototype.render = function () {
        var _a = this.props, url = _a.url, message = _a.message, onClick = _a.onClick, onRetry = _a.onRetry, isSelected = _a.isSelected;
        return (React.createElement(Frame, { link: url, onClick: onClick, isSelected: isSelected },
            React.createElement(IconAndTitleLayout, { icon: React.createElement(AKIconWrapper, null,
                    React.createElement(ErrorIcon, { label: "error", size: "small", primaryColor: R300 })), title: url + ' - ' + message.trim(), titleColor: R300 }),
            ' ',
            onRetry && (React.createElement(Button, { spacing: "none", appearance: "link", onClick: this.handleRetry },
                React.createElement(FormattedMessage, __assign({}, messages.try_again))))));
    };
    return InlineCardErroredView;
}(React.Component));
export { InlineCardErroredView };
//# sourceMappingURL=index.js.map