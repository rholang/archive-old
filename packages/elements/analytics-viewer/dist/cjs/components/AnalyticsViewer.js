"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var EventViewer_1 = require("./EventViewer");
var AnalyticsViewerWrapper = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  list-style: none;\n  padding: 0;\n  & li:nth-child(even) {\n    background-color: #fff;\n  }\n  & li:nth-child(odd) {\n    background-color: #eee;\n  }\n"], ["\n  list-style: none;\n  padding: 0;\n  & li:nth-child(even) {\n    background-color: #fff;\n  }\n  & li:nth-child(odd) {\n    background-color: #eee;\n  }\n"])));
var renderEventViewer = function (event, index, events) { return React.createElement(EventViewer_1.EventViewer, tslib_1.__assign({ key: events.length - index }, event)); };
exports.AnalyticsViewer = function (_a) {
    var events = _a.events, className = _a.className;
    return (React.createElement(AnalyticsViewerWrapper, { className: className }, events.map(renderEventViewer)));
};
var templateObject_1;
//# sourceMappingURL=AnalyticsViewer.js.map