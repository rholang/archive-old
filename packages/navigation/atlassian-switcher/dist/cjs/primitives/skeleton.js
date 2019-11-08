"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
var section_1 = tslib_1.__importDefault(require("./section"));
var item_1 = tslib_1.__importDefault(require("./item"));
var IconSkeleton = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  background-color: ", ";\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n"], ["\n  background-color: ", ";\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n"])), colors.N20);
var LineSkeleton = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  background-color: ", ";\n  display: inline-block;\n  width: 98px;\n  height: 10px;\n  border-radius: 3px;\n"], ["\n  background-color: ", ";\n  display: inline-block;\n  width: 98px;\n  height: 10px;\n  border-radius: 3px;\n"])), colors.N20);
exports.default = (function () { return (React.createElement(section_1.default, { sectionId: "skeleton", title: React.createElement(LineSkeleton, null) },
    React.createElement(item_1.default, { icon: React.createElement(IconSkeleton, null), isDisabled: true },
        React.createElement(LineSkeleton, null)),
    React.createElement(item_1.default, { icon: React.createElement(IconSkeleton, null), isDisabled: true },
        React.createElement(LineSkeleton, null)),
    React.createElement(item_1.default, { icon: React.createElement(IconSkeleton, null), isDisabled: true },
        React.createElement(LineSkeleton, null)))); });
var templateObject_1, templateObject_2;
//# sourceMappingURL=skeleton.js.map