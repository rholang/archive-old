"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var select_1 = require("@atlaskit/select");
var React = tslib_1.__importStar(require("react"));
var components_1 = require("./components");
var styles_1 = require("./styles");
var popup_1 = require("./popup");
var BaseUserPicker_1 = require("./BaseUserPicker");
var PopupUserPicker = /** @class */ (function (_super) {
    tslib_1.__extends(PopupUserPicker, _super);
    function PopupUserPicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            flipped: false,
        };
        _this.handleFlipStyle = function (data) {
            var flipped = data.flipped, transform = data.styles.transform, height = data.popper.height;
            _this.setState({ flipped: flipped });
            if (!flipped) {
                return data;
            }
            data.styles.transform =
                transform + ("translate(0, " + height + "px) translate(0, -100%)");
            return data;
        };
        return _this;
    }
    PopupUserPicker.prototype.render = function () {
        var _a = this.props, target = _a.target, popupTitle = _a.popupTitle, boundariesElement = _a.boundariesElement;
        var flipped = this.state.flipped;
        var width = this.props.width;
        var styles = styles_1.getPopupStyles(width, flipped);
        return (React.createElement(BaseUserPicker_1.BaseUserPicker, tslib_1.__assign({}, this.props, { SelectComponent: select_1.PopupSelect, width: width, styles: styles, components: components_1.getPopupComponents(!!popupTitle), pickerProps: popup_1.getPopupProps(width, target, this.handleFlipStyle, popupTitle, boundariesElement) })));
    };
    PopupUserPicker.defaultProps = {
        width: 300,
    };
    return PopupUserPicker;
}(React.Component));
exports.PopupUserPicker = PopupUserPicker;
//# sourceMappingURL=PopupUserPicker.js.map