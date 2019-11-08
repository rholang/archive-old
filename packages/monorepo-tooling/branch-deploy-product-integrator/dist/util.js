"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Util functions
 */
function debugMock(objName) {
    return new Proxy({}, {
        get(target, prop) {
            return (...args) => {
                console.log(`Called ${objName}.${prop}(${args})`);
            };
        },
    });
}
exports.debugMock = debugMock;
//# sourceMappingURL=util.js.map