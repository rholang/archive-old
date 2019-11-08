"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var WrapperStyles = "\n  /*\n    Increasing specificity with double ampersand to ensure these rules take\n    priority over the global styles applied to 'ol' elements.\n  */\n  && {\n    list-style-type: none;\n    padding-left: 0;\n  }\n";
var TaskListWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), WrapperStyles);
exports.TaskListWrapper = TaskListWrapper;
var DecisionListWrapper = styled_components_1.default.ol(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), WrapperStyles);
exports.DecisionListWrapper = DecisionListWrapper;
var templateObject_1, templateObject_2;
//# sourceMappingURL=ListWrapper.js.map