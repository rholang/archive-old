import { __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import styled from 'styled-components';
import { gridSize, colors } from '@atlaskit/theme';
import ManageButton from './manage-button';
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  height: 100%;\n  ", ";\n  ", ";\n"], ["\n  box-sizing: border-box;\n  height: 100%;\n  ",
    ";\n  ", ";\n"])), function (_a) {
    var appearance = _a.appearance;
    return appearance === 'drawer' && "padding-right: " + gridSize() * 4 + "px;";
}, function (_a) {
    var appearance = _a.appearance;
    return appearance === 'drawer' && "padding-top: 5px;";
});
var Body = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-height: calc(100% - 7.5 * ", "px);\n"], ["\n  min-height: calc(100% - 7.5 * ", "px);\n"])), gridSize);
var Footer = styled.footer(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  padding: ", "px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  position: sticky;\n  bottom: 0;\n  background-color: ", ";\n"], ["\n  border-top: 1px solid ", ";\n  padding: ", "px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  position: sticky;\n  bottom: 0;\n  background-color: ", ";\n"])), colors.N30A, 1.5 * gridSize(), colors.N0);
var ErrorBoundaryWrapper = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding-top: 10rem;\n  padding-right: 2rem;\n"], ["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding-top: 10rem;\n  padding-right: 2rem;\n"])));
var SwitcherWrapper = /** @class */ (function (_super) {
    __extends(SwitcherWrapper, _super);
    function SwitcherWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SwitcherWrapper.prototype.render = function () {
        var _a = this.props, appearance = _a.appearance, children = _a.children;
        var manageButton = React.Children.toArray(children).filter(function (child) {
            return React.isValidElement(child) &&
                React.Children.only(child).type === ManageButton;
        });
        var items = React.Children.toArray(children).filter(function (child) {
            return React.isValidElement(child) &&
                React.Children.only(child).type !== ManageButton;
        });
        return (React.createElement(Wrapper, { appearance: appearance },
            React.createElement(Body, null, items),
            manageButton.length ? React.createElement(Footer, null, manageButton) : null));
    };
    return SwitcherWrapper;
}(React.Component));
export { ErrorBoundaryWrapper };
export default SwitcherWrapper;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=wrapper.js.map