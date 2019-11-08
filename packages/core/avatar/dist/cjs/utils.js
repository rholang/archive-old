"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function omit(obj) {
    var e_1, _a;
    var keysToOmit = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keysToOmit[_i - 1] = arguments[_i];
    }
    var newObj = tslib_1.__assign({}, obj);
    try {
        for (var keysToOmit_1 = tslib_1.__values(keysToOmit), keysToOmit_1_1 = keysToOmit_1.next(); !keysToOmit_1_1.done; keysToOmit_1_1 = keysToOmit_1.next()) {
            var key = keysToOmit_1_1.value;
            delete newObj[key];
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (keysToOmit_1_1 && !keysToOmit_1_1.done && (_a = keysToOmit_1.return)) _a.call(keysToOmit_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return newObj;
}
exports.omit = omit;
function getDisplayName(prefix, Component) {
    var componentName = Component.displayName || Component.name;
    return componentName ? prefix + "(" + componentName + ")" : prefix;
}
exports.getDisplayName = getDisplayName;
//# sourceMappingURL=utils.js.map