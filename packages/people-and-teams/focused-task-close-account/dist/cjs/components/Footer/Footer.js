"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var button_1 = tslib_1.__importStar(require("@atlaskit/button"));
var Styled = tslib_1.__importStar(require("./styled"));
var Footer = /** @class */ (function (_super) {
    tslib_1.__extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        var _a = this.props, currentScreenIdx = _a.currentScreenIdx, numScreens = _a.numScreens, onCancel = _a.onCancel, onNext = _a.onNext, onPrevious = _a.onPrevious, secondaryActions = _a.secondaryActions, submitButton = _a.submitButton;
        return (React.createElement(Styled.FooterOuter, null,
            React.createElement("div", null, secondaryActions),
            React.createElement(button_1.ButtonGroup, null,
                currentScreenIdx < 1 ? (React.createElement(button_1.default, { onClick: onCancel }, "Cancel")) : (React.createElement(button_1.default, { onClick: onPrevious }, "Previous")),
                currentScreenIdx < numScreens - 1 ? (React.createElement(button_1.default, { appearance: "primary", onClick: onNext }, "Next")) : (submitButton))));
    };
    return Footer;
}(React.Component));
exports.default = Footer;
//# sourceMappingURL=Footer.js.map