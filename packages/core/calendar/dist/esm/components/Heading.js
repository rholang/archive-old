import { __makeTemplateObject } from "tslib";
import ArrowleftIcon from '@atlaskit/icon/glyph/chevron-left-large';
import ArrowrightIcon from '@atlaskit/icon/glyph/chevron-right-large';
import { N70 } from '@atlaskit/theme/colors';
import React from 'react';
import styled from 'styled-components';
import Btn from './Btn';
import { Heading, MonthAndYear } from '../styled/Heading';
var ArrowLeft = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-left: 8px;\n"], ["\n  margin-left: 8px;\n"])));
var ArrowRight = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-right: 8px;\n"], ["\n  margin-right: 8px;\n"])));
export default (function (props) { return (React.createElement(Heading, { "aria-hidden": "true" },
    React.createElement(ArrowLeft, null,
        React.createElement(Btn, { onClick: props.handleClickPrev, testId: props.testId && props.testId + "--previous-month" },
            React.createElement(ArrowleftIcon, { label: "Last month", size: "medium", primaryColor: N70 }))),
    React.createElement(MonthAndYear, { "data-testid": props.testId && props.testId + "--current-month-year" }, props.monthLongTitle + " " + props.year),
    React.createElement(ArrowRight, null,
        React.createElement(Btn, { onClick: props.handleClickNext, testId: props.testId && props.testId + "--next-month" },
            React.createElement(ArrowrightIcon, { label: "Next month", size: "medium", primaryColor: N70 }))))); });
var templateObject_1, templateObject_2;
//# sourceMappingURL=Heading.js.map