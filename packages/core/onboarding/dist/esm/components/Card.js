import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled from 'styled-components';
import Button from '@atlaskit/button';
import { createTheme } from '@atlaskit/theme/components';
import { borderRadius, gridSize, layers } from '@atlaskit/theme/constants';
import { multiply } from '@atlaskit/theme/math';
import { h600 } from '@atlaskit/theme/typography';
import { ActionItems, ActionItem } from '../styled/Dialog';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme;
});
var Body = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  padding: ", "px ", "px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  padding: ", "px ", "px;\n"])), multiply(gridSize, 2), multiply(gridSize, 2.5));
var Heading = styled.h4(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n  color: inherit;\n"], ["\n  ", ";\n  color: inherit;\n"])), h600);
var DefaultHeader = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding-bottom: ", "px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding-bottom: ", "px;\n"])), gridSize);
var DefaultFooter = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: ", "px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: ", "px;\n"])), gridSize);
var Theme = createTheme(function () { return ({
    container: {
        overflow: 'auto',
        borderRadius: borderRadius() + "px",
        height: 'fit-content',
        zIndex: "" + (layers.spotlight() + 1),
    },
}); });
var Card = function (_a) {
    var _b = _a.actions, actions = _b === void 0 ? [] : _b, actionsBeforeElement = _a.actionsBeforeElement, children = _a.children, _c = _a.components, components = _c === void 0 ? {} : _c, image = _a.image, heading = _a.heading, headingAfterElement = _a.headingAfterElement, theme = _a.theme, innerRef = _a.innerRef;
    var _d = components.Header, Header = _d === void 0 ? DefaultHeader : _d, _e = components.Footer, Footer = _e === void 0 ? DefaultFooter : _e;
    return (React.createElement(Theme.Provider, { value: theme },
        React.createElement(Theme.Consumer, null, function (_a) {
            var container = _a.container;
            return (React.createElement(Container, { theme: container, innerRef: innerRef },
                typeof image === 'string' ? React.createElement("img", { src: image, alt: "" }) : image,
                React.createElement(Body, null,
                    heading || headingAfterElement ? (React.createElement(Header, null,
                        React.createElement(Heading, null, heading),
                        headingAfterElement || React.createElement("span", null))) : null,
                    children,
                    actions.length > 0 || actionsBeforeElement ? (React.createElement(Footer, null,
                        actionsBeforeElement || React.createElement("span", null),
                        React.createElement(ActionItems, null, actions.map(function (_a, idx) {
                            var text = _a.text, key = _a.key, rest = __rest(_a, ["text", "key"]);
                            return (React.createElement(ActionItem, { key: key ||
                                    (typeof text === 'string' ? text : "" + idx) },
                                React.createElement(Button, __assign({}, rest), text)));
                        })))) : null)));
        })));
};
export default React.forwardRef(function (props, ref) { return (React.createElement(Card, __assign({}, props, { innerRef: ref }))); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=Card.js.map