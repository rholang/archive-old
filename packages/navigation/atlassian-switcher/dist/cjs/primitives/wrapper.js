"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var manage_button_1 = tslib_1.__importDefault(require("./manage-button"));
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  height: 100%;\n  ", ";\n  ", ";\n"], ["\n  box-sizing: border-box;\n  height: 100%;\n  ",
    ";\n  ", ";\n"])), function (_a) {
    var appearance = _a.appearance;
    return appearance === 'drawer' && "padding-right: " + theme_1.gridSize() * 4 + "px;";
}, function (_a) {
    var appearance = _a.appearance;
    return appearance === 'drawer' && "padding-top: 5px;";
});
var Body = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  min-height: calc(100% - 7.5 * ", "px);\n"], ["\n  min-height: calc(100% - 7.5 * ", "px);\n"])), theme_1.gridSize);
var Footer = styled_components_1.default.footer(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  border-top: 1px solid ", ";\n  padding: ", "px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  position: sticky;\n  bottom: 0;\n  background-color: ", ";\n"], ["\n  border-top: 1px solid ", ";\n  padding: ", "px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  position: sticky;\n  bottom: 0;\n  background-color: ", ";\n"])), theme_1.colors.N30A, 1.5 * theme_1.gridSize(), theme_1.colors.N0);
var ErrorBoundaryWrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding-top: 10rem;\n  padding-right: 2rem;\n"], ["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding-top: 10rem;\n  padding-right: 2rem;\n"])));
exports.ErrorBoundaryWrapper = ErrorBoundaryWrapper;
var SwitcherWrapper = /** @class */ (function (_super) {
    tslib_1.__extends(SwitcherWrapper, _super);
    function SwitcherWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SwitcherWrapper.prototype.render = function () {
        var _a = this.props, appearance = _a.appearance, children = _a.children;
        var manageButton = React.Children.toArray(children).filter(function (child) {
            return React.isValidElement(child) &&
                React.Children.only(child).type === manage_button_1.default;
        });
        var items = React.Children.toArray(children).filter(function (child) {
            return React.isValidElement(child) &&
                React.Children.only(child).type !== manage_button_1.default;
        });
        return (React.createElement(Wrapper, { appearance: appearance },
            React.createElement(Body, null, items),
            manageButton.length ? React.createElement(Footer, null, manageButton) : null));
    };
    return SwitcherWrapper;
}(React.Component));
exports.default = SwitcherWrapper;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=wrapper.js.map