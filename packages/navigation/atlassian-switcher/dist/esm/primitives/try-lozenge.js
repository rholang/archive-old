import { __assign, __makeTemplateObject, __rest } from "tslib";
import * as React from 'react';
import styled from 'styled-components';
import Lozenge from '@atlaskit/lozenge';
import { gridSize } from '@atlaskit/theme';
export var OuterLozengeContainer = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  margin-left: ", "px;\n"], ["\n  display: inline-block;\n  margin-left: ", "px;\n"])), gridSize());
export var InnerLozengeContainer = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding-left: ", "px;\n  padding-right: ", "px;\n"], ["\n  padding-left: ", "px;\n  padding-right: ", "px;\n"])), gridSize(), gridSize());
export default (function (_a) {
    var children = _a.children, _b = _a.isBold, isBold = _b === void 0 ? true : _b, props = __rest(_a, ["children", "isBold"]);
    return (React.createElement(OuterLozengeContainer, null,
        React.createElement(Lozenge, __assign({ appearance: "inprogress", isBold: isBold }, props),
            React.createElement(InnerLozengeContainer, null, children))));
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=try-lozenge.js.map