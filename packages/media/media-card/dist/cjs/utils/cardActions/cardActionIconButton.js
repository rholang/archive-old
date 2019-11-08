"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var styled_1 = require("./styled");
var CardActionIconButton = /** @class */ (function (_super) {
    tslib_1.__extends(CardActionIconButton, _super);
    function CardActionIconButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardActionIconButton.prototype.render = function () {
        var _a = this.props, icon = _a.icon, triggerColor = _a.triggerColor, onClick = _a.onClick;
        return (React.createElement(styled_1.CardActionButton, { onClick: onClick, style: { color: triggerColor } }, icon));
    };
    return CardActionIconButton;
}(react_1.Component));
exports.CardActionIconButton = CardActionIconButton;
//# sourceMappingURL=cardActionIconButton.js.map