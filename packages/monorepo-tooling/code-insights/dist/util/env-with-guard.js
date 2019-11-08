"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(name) {
    if (!process.env.hasOwnProperty(name) ||
        !process.env[name] ||
        typeof process.env[name] !== 'string') {
        return null;
    }
    return process.env[name];
}
exports.default = default_1;
//# sourceMappingURL=env-with-guard.js.map