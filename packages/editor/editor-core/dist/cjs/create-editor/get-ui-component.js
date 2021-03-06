"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var FullPage_1 = tslib_1.__importDefault(require("../ui/Appearance/FullPage"));
var Chromeless_1 = tslib_1.__importDefault(require("../ui/Appearance/Chromeless"));
var Comment_1 = tslib_1.__importDefault(require("../ui/Appearance/Comment"));
var Mobile_1 = tslib_1.__importDefault(require("../ui/Appearance/Mobile"));
function getUiComponent(appearance) {
    appearance = appearance || 'comment';
    switch (appearance) {
        case 'full-page':
        case 'full-width':
            return FullPage_1.default;
        case 'chromeless':
            return Chromeless_1.default;
        case 'comment':
            return Comment_1.default;
        case 'mobile':
            return Mobile_1.default;
        default:
            throw new Error("Appearance '" + appearance + "' is not supported by the editor.");
    }
}
exports.default = getUiComponent;
//# sourceMappingURL=get-ui-component.js.map