"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-bitwise */
exports.generateUuid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0;
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};
/* eslint-enable no-bitwise */
var staticValue = false;
exports.uuid = {
    setStatic: function (value) {
        staticValue = value;
    },
    generate: function () {
        return staticValue || exports.generateUuid();
    },
};
//# sourceMappingURL=uuid.js.map