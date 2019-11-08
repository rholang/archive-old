import { __extends } from "tslib";
import * as React from 'react';
import { PureComponent } from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import EditorDoneIcon from '@atlaskit/icon/glyph/editor/done';
import { colors } from '@atlaskit/theme';
import { Button, ButtonWrapper } from './styles';
import Tooltip from '@atlaskit/tooltip';
import { hexToRgba, N800, N0 } from '@atlaskit/adf-schema';
// IMO these should live inside @atlaskit/theme
var messages = defineMessages({
    selected: {
        id: 'fabric.editor.selected',
        defaultMessage: 'Selected',
        description: 'If the item is selected or not.',
    },
});
var defaultBorderColor = hexToRgba(N800, 0.12) || N0;
var Color = /** @class */ (function (_super) {
    __extends(Color, _super);
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
        var _a = this.props, tabIndex = _a.tabIndex, value = _a.value, label = _a.label, isSelected = _a.isSelected, _b = _a.borderColor, borderColor = _b === void 0 ? defaultBorderColor : _b, _c = _a.checkMarkColor, checkMarkColor = _c === void 0 ? colors.N0 : _c, formatMessage = _a.intl.formatMessage;
        var borderStyle = "1px solid " + borderColor;
        return (React.createElement(Tooltip, { content: label },
            React.createElement(ButtonWrapper, null,
                React.createElement(Button, { onClick: this.onClick, onMouseDown: this.onMouseDown, tabIndex: tabIndex, className: "" + (isSelected ? 'selected' : ''), style: {
                        backgroundColor: value || 'transparent',
                        border: borderStyle,
                    } }, isSelected && (React.createElement(EditorDoneIcon, { primaryColor: checkMarkColor, label: formatMessage(messages.selected) }))))));
    };
    return Color;
}(PureComponent));
export default injectIntl(Color);
//# sourceMappingURL=index.js.map