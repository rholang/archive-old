"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var colors_1 = require("@atlaskit/theme/colors");
var mixins_1 = require("../../../mixins");
exports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 7px 4px;\n  font-size: 14px;\n  font-weight: 500;\n  text-align: center;\n  line-height: 18px;\n  pointer-events: all;\n  ", " ", ";\n"], ["\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 7px 4px;\n  font-size: 14px;\n  font-weight: 500;\n  text-align: center;\n  line-height: 18px;\n  pointer-events: all;\n  ", " ",
    ";\n"])), mixins_1.borderRadiusBottom, function (_a) {
    var type = _a.type;
    if (type === 'failure') {
        return "\n        color: " + colors_1.N600 + ";\n        background-color: " + colors_1.Y300 + ";\n      ";
    }
    else {
        return "\n        color: " + colors_1.N0 + ";\n        background-color: " + colors_1.G300 + ";\n      ";
    }
});
var templateObject_1;
//# sourceMappingURL=styled.js.map