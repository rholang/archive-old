"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var error_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/error"));
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var EmojiErrorMessage = /** @class */ (function (_super) {
    tslib_1.__extends(EmojiErrorMessage, _super);
    function EmojiErrorMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmojiErrorMessage.prototype.renderWithTooltip = function () {
        return (React.createElement("div", { className: this.props.className },
            React.createElement(tooltip_1.default, { content: this.props.message, position: "top" },
                React.createElement(error_1.default, { label: "Error", size: "medium" }))));
    };
    EmojiErrorMessage.prototype.renderInline = function () {
        return (React.createElement("div", { className: this.props.className },
            React.createElement(error_1.default, { label: "Error", size: "small" }),
            " ",
            this.props.message));
    };
    EmojiErrorMessage.prototype.render = function () {
        return this.props.tooltip ? this.renderWithTooltip() : this.renderInline();
    };
    return EmojiErrorMessage;
}(react_1.PureComponent));
exports.default = EmojiErrorMessage;
//# sourceMappingURL=EmojiErrorMessage.js.map