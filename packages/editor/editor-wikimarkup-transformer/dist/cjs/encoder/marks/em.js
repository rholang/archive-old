"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __base_1 = require("./__base");
exports.em = function (text) {
    if (text.startsWith('— ')) {
        // This is a citation
        return __base_1.baseMarkPattern(text.substring(2), '??');
    }
    return __base_1.baseMarkPattern(text, '_');
};
//# sourceMappingURL=em.js.map