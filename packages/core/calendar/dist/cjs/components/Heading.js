"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var chevron_left_large_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/chevron-left-large"));
var chevron_right_large_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/chevron-right-large"));
var colors_1 = require("@atlaskit/theme/colors");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var Btn_1 = tslib_1.__importDefault(require("./Btn"));
var Heading_1 = require("../styled/Heading");
var ArrowLeft = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  margin-left: 8px;\n"], ["\n  margin-left: 8px;\n"])));
var ArrowRight = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  margin-right: 8px;\n"], ["\n  margin-right: 8px;\n"])));
exports.default = (function (props) { return (react_1.default.createElement(Heading_1.Heading, { "aria-hidden": "true" },
    react_1.default.createElement(ArrowLeft, null,
        react_1.default.createElement(Btn_1.default, { onClick: props.handleClickPrev, testId: props.testId && props.testId + "--previous-month" },
            react_1.default.createElement(chevron_left_large_1.default, { label: "Last month", size: "medium", primaryColor: colors_1.N70 }))),
    react_1.default.createElement(Heading_1.MonthAndYear, { "data-testid": props.testId && props.testId + "--current-month-year" }, props.monthLongTitle + " " + props.year),
    react_1.default.createElement(ArrowRight, null,
        react_1.default.createElement(Btn_1.default, { onClick: props.handleClickNext, testId: props.testId && props.testId + "--next-month" },
            react_1.default.createElement(chevron_right_large_1.default, { label: "Next month", size: "medium", primaryColor: colors_1.N70 }))))); });
var templateObject_1, templateObject_2;
//# sourceMappingURL=Heading.js.map