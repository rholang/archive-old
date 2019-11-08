"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __base_1 = require("./__base");
/**
 * For text that has leading and ending space. We don't want to
 * convert it to `*strong *. Instead, we need it to be `*strong* `
 */
exports.strong = function (text) {
    return __base_1.baseMarkPattern(text, '*');
};
//# sourceMappingURL=strong.js.map