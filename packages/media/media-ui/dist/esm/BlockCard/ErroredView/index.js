import { __assign, __extends } from "tslib";
import * as React from 'react';
import Button from '@atlaskit/button';
import WarningIcon from '@atlaskit/icon/glyph/warning';
import { Y300 } from '@atlaskit/theme/colors';
import { CollapsedFrame } from '../CollapsedFrame';
import { minWidth, maxWidth } from '../dimensions';
import { CollapsedIconTitleDescriptionLayout } from '../CollapsedIconTitleDescriptionLayout';
import { messages } from '../../messages';
import { FormattedMessage } from 'react-intl';
var BlockCardErroredView = /** @class */ (function (_super) {
    __extends(BlockCardErroredView, _super);
    function BlockCardErroredView() {
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
    BlockCardErroredView.prototype.render = function () {
        var _a = this.props, url = _a.url, message = _a.message, onClick = _a.onClick, onRetry = _a.onRetry, isSelected = _a.isSelected;
        return (React.createElement(CollapsedFrame, { isSelected: isSelected, minWidth: minWidth, maxWidth: maxWidth, onClick: onClick },
            React.createElement(CollapsedIconTitleDescriptionLayout, { icon: React.createElement(WarningIcon, { label: "error", size: "medium", primaryColor: Y300 }), title: url, description: React.createElement(React.Fragment, null,
                    message,
                    ' ',
                    onRetry && (React.createElement(Button, { appearance: "link", spacing: "none", onClick: this.handleRetry },
                        React.createElement(FormattedMessage, __assign({}, messages.try_again))))) })));
    };
    return BlockCardErroredView;
}(React.Component));
export { BlockCardErroredView };
//# sourceMappingURL=index.js.map