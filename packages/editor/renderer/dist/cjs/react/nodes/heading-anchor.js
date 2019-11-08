"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var link_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/link"));
var theme_1 = require("@atlaskit/theme");
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var react_intl_1 = require("react-intl");
var messages_1 = require("../../messages");
exports.HeadingAnchorWrapperClassName = 'heading-anchor-wrapper';
var CopyAnchorWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  position: absolute;\n  align-items: center;\n  overflow: hidden;\n  right: 0;\n  width: 32px;\n  height: 100%;\n"], ["\n  display: flex;\n  position: absolute;\n  align-items: center;\n  overflow: hidden;\n  right: 0;\n  width: 32px;\n  height: 100%;\n"])));
var CopyAnchor = styled_components_1.default.button(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  outline: none;\n  background-color: transparent;\n  border: none;\n  color: ", ";\n  cursor: pointer;\n  right: 0;\n  height: 100%;\n"], ["\n  outline: none;\n  background-color: transparent;\n  border: none;\n  color: ", ";\n  cursor: pointer;\n  right: 0;\n  height: 100%;\n"])), theme_1.colors.N500);
var HeadingAnchor = /** @class */ (function (_super) {
    tslib_1.__extends(HeadingAnchor, _super);
    function HeadingAnchor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initialTooltipMessage = _this.props.intl.formatMessage(messages_1.headingAnchorLinkMessages.copyHeadingLinkToClipboard);
        _this.state = {
            tooltipMessage: _this.initialTooltipMessage,
        };
        _this.copyToClipboard = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // This is needed to reset tooltip to reposition it.
                        // Might be better to fix tooltip reposition bug.
                        // https://ecosystem.atlassian.net/projects/AK/queues/issue/AK-6548
                        this.setState({ tooltipMessage: '' });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.props.onCopyText()];
                    case 2:
                        _a.sent();
                        this.setState({
                            tooltipMessage: this.props.intl.formatMessage(messages_1.headingAnchorLinkMessages.copiedHeadingLinkToClipboard),
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.setState({
                            tooltipMessage: this.props.intl.formatMessage(messages_1.headingAnchorLinkMessages.failedToCopyHeadingLink),
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.resetMessage = function () {
            _this.setState({ tooltipMessage: '' });
            _this.resetMsgTimeoutId = window.setTimeout(function () {
                _this.setState({ tooltipMessage: _this.initialTooltipMessage });
            }, 0);
        };
        return _this;
    }
    HeadingAnchor.prototype.componentWillUnmount = function () {
        window.clearTimeout(this.resetMsgTimeoutId);
    };
    HeadingAnchor.prototype.renderAnchor = function () {
        return (react_1.default.createElement(CopyAnchor, { onMouseLeave: this.resetMessage, onClick: this.copyToClipboard },
            react_1.default.createElement(link_1.default, { label: "copy", size: "small" })));
    };
    HeadingAnchor.prototype.render = function () {
        return (react_1.default.createElement("div", { className: exports.HeadingAnchorWrapperClassName },
            react_1.default.createElement(CopyAnchorWrapper, null, this.state.tooltipMessage ? (react_1.default.createElement(tooltip_1.default, { content: this.state.tooltipMessage, position: "top", delay: 0 }, this.renderAnchor())) : (react_1.default.createElement("div", null, this.renderAnchor())))));
    };
    return HeadingAnchor;
}(react_1.default.PureComponent));
exports.default = react_intl_1.injectIntl(HeadingAnchor);
var templateObject_1, templateObject_2;
//# sourceMappingURL=heading-anchor.js.map