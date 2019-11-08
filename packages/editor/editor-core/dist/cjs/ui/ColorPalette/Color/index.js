"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var done_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/done"));
var theme_1 = require("@atlaskit/theme");
var styles_1 = require("./styles");
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var adf_schema_1 = require("@atlaskit/adf-schema");
// IMO these should live inside @atlaskit/theme
var messages = react_intl_1.defineMessages({
    selected: {
        id: 'fabric.editor.selected',
        defaultMessage: 'Selected',
        description: 'If the item is selected or not.',
    },
});
var defaultBorderColor = adf_schema_1.hexToRgba(adf_schema_1.N800, 0.12) || adf_schema_1.N0;
var Color = /** @class */ (function (_super) {
    tslib_1.__extends(Color, _super);
    function Color() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
        var _a = this.props, tabIndex = _a.tabIndex, value = _a.value, label = _a.label, isSelected = _a.isSelected, _b = _a.borderColor, borderColor = _b === void 0 ? defaultBorderColor : _b, _c = _a.checkMarkColor, checkMarkColor = _c === void 0 ? theme_1.colors.N0 : _c, formatMessage = _a.intl.formatMessage;
        var borderStyle = "1px solid " + borderColor;
        return (React.createElement(tooltip_1.default, { content: label },
            React.createElement(styles_1.ButtonWrapper, null,
                React.createElement(styles_1.Button, { onClick: this.onClick, onMouseDown: this.onMouseDown, tabIndex: tabIndex, className: "" + (isSelected ? 'selected' : ''), style: {
                        backgroundColor: value || 'transparent',
                        border: borderStyle,
                    } }, isSelected && (React.createElement(done_1.default, { primaryColor: checkMarkColor, label: formatMessage(messages.selected) }))))));
    };
    return Color;
}(react_1.PureComponent));
exports.default = react_intl_1.injectIntl(Color);
//# sourceMappingURL=index.js.map