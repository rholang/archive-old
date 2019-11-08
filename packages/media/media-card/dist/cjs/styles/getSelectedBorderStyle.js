"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("@atlaskit/theme/colors");
var media_ui_1 = require("@atlaskit/media-ui");
/*
 * Used to display the blue border around a selected card without
 * shrinking the image OR growing the card size
 */
exports.getSelectedBorderStyle = function (_a) {
    var selected = _a.selected;
    var border = "border: 2px solid " + (selected ? colors_1.B200 : 'transparent') + ";";
    return "\n    &::after {\n      content: '';\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      box-sizing: border-box;\n      pointer-events: none;\n      " + media_ui_1.borderRadius + " \n      " + border + ";\n    }\n  ";
};
//# sourceMappingURL=getSelectedBorderStyle.js.map