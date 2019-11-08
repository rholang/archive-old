"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __base_1 = require("./__base");
exports.subsup = function (text, attrs) {
    if (attrs.type === 'sub') {
        return __base_1.baseMarkPattern(text, '~');
    }
    else {
        return __base_1.baseMarkPattern(text, '^');
    }
};
//# sourceMappingURL=subsup.js.map