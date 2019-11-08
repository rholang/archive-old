"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var components_1 = require("@atlaskit/theme/components");
var constants_1 = require("@atlaskit/theme/constants");
var math_1 = require("@atlaskit/theme/math");
var typography_1 = require("@atlaskit/theme/typography");
var Dialog_1 = require("../styled/Dialog");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme;
});
var Body = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  padding: ", "px ", "px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  padding: ", "px ", "px;\n"])), math_1.multiply(constants_1.gridSize, 2), math_1.multiply(constants_1.gridSize, 2.5));
var Heading = styled_components_1.default.h4(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  ", ";\n  color: inherit;\n"], ["\n  ", ";\n  color: inherit;\n"])), typography_1.h600);
var DefaultHeader = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding-bottom: ", "px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding-bottom: ", "px;\n"])), constants_1.gridSize);
var DefaultFooter = styled_components_1.default.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: ", "px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: ", "px;\n"])), constants_1.gridSize);
var Theme = components_1.createTheme(function () { return ({
    container: {
        overflow: 'auto',
        borderRadius: constants_1.borderRadius() + "px",
        height: 'fit-content',
        zIndex: "" + (constants_1.layers.spotlight() + 1),
    },
}); });
var Card = function (_a) {
    var _b = _a.actions, actions = _b === void 0 ? [] : _b, actionsBeforeElement = _a.actionsBeforeElement, children = _a.children, _c = _a.components, components = _c === void 0 ? {} : _c, image = _a.image, heading = _a.heading, headingAfterElement = _a.headingAfterElement, theme = _a.theme, innerRef = _a.innerRef;
    var _d = components.Header, Header = _d === void 0 ? DefaultHeader : _d, _e = components.Footer, Footer = _e === void 0 ? DefaultFooter : _e;
    return (react_1.default.createElement(Theme.Provider, { value: theme },
        react_1.default.createElement(Theme.Consumer, null, function (_a) {
            var container = _a.container;
            return (react_1.default.createElement(Container, { theme: container, innerRef: innerRef },
                typeof image === 'string' ? react_1.default.createElement("img", { src: image, alt: "" }) : image,
                react_1.default.createElement(Body, null,
                    heading || headingAfterElement ? (react_1.default.createElement(Header, null,
                        react_1.default.createElement(Heading, null, heading),
                        headingAfterElement || react_1.default.createElement("span", null))) : null,
                    children,
                    actions.length > 0 || actionsBeforeElement ? (react_1.default.createElement(Footer, null,
                        actionsBeforeElement || react_1.default.createElement("span", null),
                        react_1.default.createElement(Dialog_1.ActionItems, null, actions.map(function (_a, idx) {
                            var text = _a.text, key = _a.key, rest = tslib_1.__rest(_a, ["text", "key"]);
                            return (react_1.default.createElement(Dialog_1.ActionItem, { key: key ||
                                    (typeof text === 'string' ? text : "" + idx) },
                                react_1.default.createElement(button_1.default, tslib_1.__assign({}, rest), text)));
                        })))) : null)));
        })));
};
exports.default = react_1.default.forwardRef(function (props, ref) { return (react_1.default.createElement(Card, tslib_1.__assign({}, props, { innerRef: ref }))); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=Card.js.map