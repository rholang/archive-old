"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var theme_1 = require("@atlaskit/theme");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var analytics_1 = require("../utils/analytics");
var fade_in_1 = require("./fade-in");
var SectionContainer = styled_components_1.default.section(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  padding: ", "px 0;\n"], ["\n  padding: ", "px 0;\n"])), theme_1.gridSize());
var SectionTitle = styled_components_1.default.h1(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", ";\n  text-transform: uppercase;\n  margin-bottom: ", "px;\n  margin-left: ", "px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"], ["\n  ", ";\n  text-transform: uppercase;\n  margin-bottom: ", "px;\n  margin-left: ", "px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])), theme_1.typography.h100, theme_1.gridSize(), theme_1.gridSize());
var Section = function (props) {
    var title = props.title, children = props.children;
    return React.Children.count(children) ? (React.createElement(SectionContainer, null,
        title && (React.createElement(fade_in_1.FadeIn, null,
            React.createElement(SectionTitle, null, title))),
        children)) : null;
};
exports.default = analytics_1.withAnalyticsContextData(function (props) {
    return analytics_1.analyticsAttributes({
        group: props.sectionId,
        groupItemsCount: React.Children.count(props.children),
    });
})(Section);
var templateObject_1, templateObject_2;
//# sourceMappingURL=section.js.map