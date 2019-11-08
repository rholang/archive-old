"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var inline_dialog_1 = tslib_1.__importDefault(require("@atlaskit/inline-dialog"));
var StatefulInlineDialog = /** @class */ (function (_super) {
    tslib_1.__extends(StatefulInlineDialog, _super);
    function StatefulInlineDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: false,
        };
        _this.openDialog = function () {
            _this.setState({ isOpen: true });
        };
        _this.closeDialog = function () {
            _this.setState({ isOpen: false });
        };
        _this.handleMouseOver = function () {
            _this.openDialog();
        };
        _this.handleMouseOut = function () {
            _this.closeDialog();
        };
        return _this;
    }
    StatefulInlineDialog.prototype.render = function () {
        var _a = this.props, children = _a.children, content = _a.content, placement = _a.placement;
        return (React.createElement(inline_dialog_1.default, { content: content, placement: placement, isOpen: this.state.isOpen },
            React.createElement("span", { onMouseOver: this.handleMouseOver, onMouseOut: this.handleMouseOut }, children)));
    };
    return StatefulInlineDialog;
}(React.Component));
exports.StatefulInlineDialog = StatefulInlineDialog;
exports.default = StatefulInlineDialog;
//# sourceMappingURL=StatefulInlineDialog.js.map