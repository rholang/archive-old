"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
exports.RECENT_SEARCH_WIDTH_IN_PX = 420;
exports.RECENT_SEARCH_WIDTH_WITHOUT_ITEMS_IN_PX = 360;
exports.RECENT_SEARCH_HEIGHT_IN_PX = 360;
exports.InputWrapper = "\n  display: flex;\n  line-height: 0;\n  padding: 5px 0;\n  align-items: center;\n";
exports.UrlInputWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), exports.InputWrapper);
exports.Container = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  width: ", "px;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  padding: 0;\n\n  ", ";\n  line-height: 2;\n"], ["\n  width: ", "px;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  padding: 0;\n\n  ",
    ";\n  line-height: 2;\n"])), exports.RECENT_SEARCH_WIDTH_IN_PX, function (_a) {
    var provider = _a.provider;
    return styled_components_1.css(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      width: ", "px;\n    "], ["\n      width: ",
        "px;\n    "])), provider
        ? exports.RECENT_SEARCH_WIDTH_IN_PX
        : exports.RECENT_SEARCH_WIDTH_WITHOUT_ITEMS_IN_PX);
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=ToolbarComponents.js.map