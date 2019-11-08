import { __makeTemplateObject } from "tslib";
import * as React from 'react';
import styled from 'styled-components';
import * as colors from '@atlaskit/theme/colors';
import Section from './section';
import SwitcherItem from './item';
var IconSkeleton = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n"], ["\n  background-color: ", ";\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n"])), colors.N20);
var LineSkeleton = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  display: inline-block;\n  width: 98px;\n  height: 10px;\n  border-radius: 3px;\n"], ["\n  background-color: ", ";\n  display: inline-block;\n  width: 98px;\n  height: 10px;\n  border-radius: 3px;\n"])), colors.N20);
export default (function () { return (React.createElement(Section, { sectionId: "skeleton", title: React.createElement(LineSkeleton, null) },
    React.createElement(SwitcherItem, { icon: React.createElement(IconSkeleton, null), isDisabled: true },
        React.createElement(LineSkeleton, null)),
    React.createElement(SwitcherItem, { icon: React.createElement(IconSkeleton, null), isDisabled: true },
        React.createElement(LineSkeleton, null)),
    React.createElement(SwitcherItem, { icon: React.createElement(IconSkeleton, null), isDisabled: true },
        React.createElement(LineSkeleton, null)))); });
var templateObject_1, templateObject_2;
//# sourceMappingURL=skeleton.js.map