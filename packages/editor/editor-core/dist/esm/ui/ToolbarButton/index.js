import { __extends } from "tslib";
import * as React from 'react';
import Tooltip from '@atlaskit/tooltip';
import Button from './styles';
var ToolbarButton = /** @class */ (function (_super) {
    __extends(ToolbarButton, _super);
    function ToolbarButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            var _a = _this.props, disabled = _a.disabled, onClick = _a.onClick;
            if (!disabled && onClick) {
                onClick(event);
            }
        };
        return _this;
    }
    ToolbarButton.prototype.render = function () {
        var button = (React.createElement(Button, { appearance: "subtle", "aria-haspopup": true, className: this.props.className, href: this.props.href, "aria-label": this.props['aria-label'], iconAfter: this.props.iconAfter, iconBefore: this.props.iconBefore, isDisabled: this.props.disabled, isSelected: this.props.selected, onClick: this.handleClick, spacing: this.props.spacing || 'default', target: this.props.target, theme: this.props.theme, shouldFitContainer: true }, this.props.children));
        var tooltipContent = !this.props.hideTooltip ? this.props.title : null;
        return this.props.title ? (React.createElement(Tooltip, { content: tooltipContent, hideTooltipOnClick: true, position: this.props.titlePosition }, button)) : (button);
    };
    ToolbarButton.defaultProps = {
        className: '',
        titlePosition: 'top',
    };
    return ToolbarButton;
}(React.PureComponent));
export default ToolbarButton;
//# sourceMappingURL=index.js.map