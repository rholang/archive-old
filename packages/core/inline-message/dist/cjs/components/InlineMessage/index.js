"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var inline_dialog_1 = tslib_1.__importDefault(require("@atlaskit/inline-dialog"));
var IconForType_1 = tslib_1.__importDefault(require("../IconForType"));
var styledInlineMessage_1 = require("./styledInlineMessage");
var InlineMessage = /** @class */ (function (_super) {
    tslib_1.__extends(InlineMessage, _super);
    function InlineMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: false,
            isHovered: false,
        };
        _this.onMouseEnter = function () {
            _this.setState({ isHovered: true });
        };
        _this.onMouseLeave = function () {
            _this.setState({ isHovered: false });
        };
        _this.toggleDialog = function () {
            _this.setState({ isOpen: !_this.state.isOpen });
        };
        return _this;
    }
    InlineMessage.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, placement = _a.placement, secondaryText = _a.secondaryText, title = _a.title, type = _a.type, testId = _a.testId;
        var _b = this.state, isHovered = _b.isHovered, isOpen = _b.isOpen;
        return (react_1.default.createElement(styledInlineMessage_1.Root, { onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, appearance: type, "data-testid": testId },
            react_1.default.createElement(inline_dialog_1.default, { onClose: function () {
                    _this.setState({ isOpen: false });
                }, content: children, isOpen: isOpen, placement: placement, testId: testId && testId + "--inline-dialog" },
                react_1.default.createElement(button_1.default, { appearance: "subtle-link", onClick: this.toggleDialog, spacing: "none", testId: testId && testId + "--button" },
                    react_1.default.createElement(styledInlineMessage_1.ButtonContents, { isHovered: isHovered },
                        react_1.default.createElement(IconForType_1.default, { type: type, isHovered: isHovered, isOpen: isOpen }),
                        title ? (react_1.default.createElement(styledInlineMessage_1.Title, { "data-testid": testId && testId + "--title", isHovered: isHovered }, title)) : null,
                        secondaryText ? (react_1.default.createElement(styledInlineMessage_1.Text, { "data-testid": testId && testId + "--text", isHovered: isHovered }, secondaryText)) : null)))));
    };
    InlineMessage.defaultProps = {
        children: null,
        placement: 'bottom-start',
        secondaryText: '',
        title: '',
        type: 'connectivity',
    };
    return InlineMessage;
}(react_1.default.Component));
exports.default = InlineMessage;
//# sourceMappingURL=index.js.map