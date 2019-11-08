"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var base_1 = tslib_1.__importDefault(require("@atlaskit/css-reset/base"));
var browser_fixes_1 = tslib_1.__importDefault(require("@atlaskit/css-reset/browser-fixes"));
var reset_1 = tslib_1.__importDefault(require("@atlaskit/css-reset/reset"));
var tables_1 = tslib_1.__importDefault(require("@atlaskit/css-reset/tables"));
var utils_1 = tslib_1.__importDefault(require("@atlaskit/css-reset/utils"));
var DEFAULT_CSS = base_1.default +
    browser_fixes_1.default +
    browser_fixes_1.default +
    reset_1.default +
    tables_1.default +
    utils_1.default;
exports.default = DEFAULT_CSS;
//# sourceMappingURL=resetCss.js.map