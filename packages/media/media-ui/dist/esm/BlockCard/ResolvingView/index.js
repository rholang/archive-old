import { __assign, __extends } from "tslib";
import * as React from 'react';
import Spinner from '@atlaskit/spinner';
import { CollapsedFrame } from '../CollapsedFrame';
import { minWidth, maxWidth } from '../dimensions';
import { SingleLineLayout } from '../SingleLineLayout';
import { FormattedMessage } from 'react-intl';
import { messages } from '../../messages';
var BlockCardResolvingView = /** @class */ (function (_super) {
    __extends(BlockCardResolvingView, _super);
    function BlockCardResolvingView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlockCardResolvingView.prototype.render = function () {
        var _a = this.props, onClick = _a.onClick, isSelected = _a.isSelected;
        return (React.createElement(CollapsedFrame, { isSelected: isSelected, minWidth: minWidth, maxWidth: maxWidth, onClick: onClick },
            React.createElement(SingleLineLayout, { left: React.createElement(Spinner, { size: "small" }), middle: React.createElement(FormattedMessage, __assign({}, messages.loading)) })));
    };
    return BlockCardResolvingView;
}(React.Component));
export { BlockCardResolvingView };
//# sourceMappingURL=index.js.map