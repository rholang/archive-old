"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heading = function (attrs) { return function () {
    var content = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i];
    }
    return ({
        type: 'heading',
        attrs: attrs,
        content: content,
    });
}; };
//# sourceMappingURL=heading.js.map