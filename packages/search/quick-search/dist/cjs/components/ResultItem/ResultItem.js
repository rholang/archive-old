"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var item_1 = tslib_1.__importStar(require("@atlaskit/item"));
var styled_1 = require("./styled");
var Item = item_1.withItemClick(item_1.withItemFocus(item_1.default));
var ResultItem = /** @class */ (function (_super) {
    tslib_1.__extends(ResultItem, _super);
    function ResultItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResultItem.prototype.render = function () {
        var icon = this.props.icon ? (React.createElement(styled_1.ResultItemIcon, null, this.props.icon)) : null;
        var textAfter = this.props.textAfter ? (React.createElement(styled_1.ResultItemTextAfter, null, this.props.textAfter)) : null;
        var after = this.props.textAfter || this.props.selectedIcon ? (React.createElement(styled_1.ResultItemAfterWrapper, null,
            React.createElement(styled_1.ResultItemAfter, { shouldTakeSpace: !!this.props.textAfter },
                textAfter,
                this.props.isSelected && !this.props.isMouseSelected
                    ? this.props.selectedIcon
                    : null))) : null;
        var wrappedCaption = this.props.caption ? (React.createElement(styled_1.ResultItemCaption, null, this.props.caption)) : null;
        var wrappedSubText = this.props.subText ? (React.createElement(styled_1.ResultItemSubText, null, this.props.subText)) : null;
        var interactiveWrapperProps = {
            onClick: this.props.onClick,
            onMouseEnter: this.props.onMouseEnter,
            onMouseLeave: this.props.onMouseLeave,
            href: this.props.href,
        };
        return (React.createElement(Item, tslib_1.__assign({ elemBefore: icon, elemAfter: after, description: wrappedSubText, isSelected: this.props.isSelected, isCompact: this.props.isCompact, target: this.props.target, linkComponent: this.props.linkComponent }, interactiveWrapperProps),
            this.props.text,
            wrappedCaption));
    };
    ResultItem.defaultProps = {
        isSelected: false,
        isMouseSelected: false,
    };
    return ResultItem;
}(React.PureComponent));
exports.default = ResultItem;
//# sourceMappingURL=ResultItem.js.map