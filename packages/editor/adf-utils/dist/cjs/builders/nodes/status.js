"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = function (attrs) {
    if (attrs === void 0) { attrs = {
        text: 'In progress',
        color: 'blue',
    }; }
    return ({
        type: 'status',
        attrs: attrs,
    });
};
//# sourceMappingURL=status.js.map