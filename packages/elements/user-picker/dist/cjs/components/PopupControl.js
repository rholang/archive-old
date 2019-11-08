"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var field_base_1 = require("@atlaskit/field-base");
var select_1 = require("@atlaskit/select");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var ControlWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  padding: 0px 8px 8px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  padding: 0px 8px 8px;\n"])));
var PopupControl = /** @class */ (function (_super) {
    tslib_1.__extends(PopupControl, _super);
    function PopupControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PopupControl.prototype.render = function () {
        var popupTitle = this.props.selectProps.popupTitle;
        return (React.createElement(ControlWrapper, null,
            React.createElement(field_base_1.Label, { label: popupTitle }),
            React.createElement(select_1.components.Control, tslib_1.__assign({}, this.props))));
    };
    return PopupControl;
}(React.PureComponent));
exports.PopupControl = PopupControl;
var templateObject_1;
//# sourceMappingURL=PopupControl.js.map