"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var spinner_1 = tslib_1.__importDefault(require("@atlaskit/spinner"));
var CollapsedFrame_1 = require("../CollapsedFrame");
var dimensions_1 = require("../dimensions");
var SingleLineLayout_1 = require("../SingleLineLayout");
var react_intl_1 = require("react-intl");
var messages_1 = require("../../messages");
var BlockCardResolvingView = /** @class */ (function (_super) {
    tslib_1.__extends(BlockCardResolvingView, _super);
    function BlockCardResolvingView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlockCardResolvingView.prototype.render = function () {
        var _a = this.props, onClick = _a.onClick, isSelected = _a.isSelected;
        return (React.createElement(CollapsedFrame_1.CollapsedFrame, { isSelected: isSelected, minWidth: dimensions_1.minWidth, maxWidth: dimensions_1.maxWidth, onClick: onClick },
            React.createElement(SingleLineLayout_1.SingleLineLayout, { left: React.createElement(spinner_1.default, { size: "small" }), middle: React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.loading)) })));
    };
    return BlockCardResolvingView;
}(React.Component));
exports.BlockCardResolvingView = BlockCardResolvingView;
//# sourceMappingURL=index.js.map