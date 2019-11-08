"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var done_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/done"));
var theme_1 = require("@atlaskit/theme");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("../constants");
var i18n_1 = require("../i18n");
var Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  height: 24px;\n  width: 24px;\n  background: ", ";\n  padding: 0;\n  border-radius: 4px;\n  border: 1px solid ", ";\n  cursor: pointer;\n  display: block;\n  box-sizing: border-box;\n"], ["\n  height: 24px;\n  width: 24px;\n  background: ", ";\n  padding: 0;\n  border-radius: 4px;\n  border: 1px solid ", ";\n  cursor: pointer;\n  display: block;\n  box-sizing: border-box;\n"])), theme_1.colors.N900, theme_1.colors.N0);
var ButtonWrapper = styled_components_1.default.span(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  border: 1px solid transparent;\n  margin: 0 2px;\n  font-size: 0;\n  display: flex;\n  align-items: center;\n  padding: 1px;\n  border-radius: 6px;\n  &:hover {\n    border: 1px solid ", ";\n  }\n"], ["\n  border: 1px solid transparent;\n  margin: 0 2px;\n  font-size: 0;\n  display: flex;\n  align-items: center;\n  padding: 1px;\n  border-radius: 6px;\n  &:hover {\n    border: 1px solid ", ";\n  }\n"])), theme_1.colors.N50);
var Color = /** @class */ (function (_super) {
    tslib_1.__extends(Color, _super);
    function Color() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hoverStartTime = 0;
        _this.onMouseEnter = function () {
            _this.hoverStartTime = Date.now();
        };
        _this.onMouseLeave = function () {
            var onHover = _this.props.onHover;
            var delay = Date.now() - _this.hoverStartTime;
            if (delay >= constants_1.ANALYTICS_HOVER_DELAY && onHover) {
                onHover(_this.props.value);
            }
            _this.hoverStartTime = 0;
        };
        _this.onMouseDown = function (e) {
            e.preventDefault();
        };
        _this.onClick = function (e) {
            var _a = _this.props, onClick = _a.onClick, value = _a.value;
            e.preventDefault();
            onClick(value);
        };
        return _this;
    }
    Color.prototype.render = function () {
        var _this = this;
        var _a = this.props, tabIndex = _a.tabIndex, backgroundColor = _a.backgroundColor, isSelected = _a.isSelected, borderColor = _a.borderColor, value = _a.value;
        var borderStyle = "1px solid " + borderColor;
        return (React.createElement(ButtonWrapper, null,
            React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages[value + "Color"]), function (label) { return (React.createElement(Button, { onClick: _this.onClick, onMouseEnter: _this.onMouseEnter, onMouseLeave: _this.onMouseLeave, onMouseDown: _this.onMouseDown, tabIndex: tabIndex, className: "" + (isSelected ? 'selected' : ''), title: label, style: {
                    backgroundColor: backgroundColor || 'transparent',
                    border: borderStyle,
                } }, isSelected && (React.createElement(done_1.default, { primaryColor: borderColor, label: label })))); })));
    };
    Color.prototype.componentWillUnmount = function () {
        this.hoverStartTime = 0;
    };
    return Color;
}(react_1.PureComponent));
exports.default = Color;
var templateObject_1, templateObject_2;
//# sourceMappingURL=color.js.map