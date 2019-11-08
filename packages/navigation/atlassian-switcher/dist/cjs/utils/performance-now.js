"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (typeof window !== 'undefined' &&
    window.performance &&
    window.performance.now.bind(performance)) ||
    Date.now;
//# sourceMappingURL=performance-now.js.map