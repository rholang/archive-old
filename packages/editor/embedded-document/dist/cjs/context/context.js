"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var noop = function () { };
exports.Context = react_1.createContext({
    value: {},
    actions: {
        getDocument: noop,
        getDocumentByObjectId: noop,
        setDocumentMode: noop,
        updateDocument: function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                throw new Error('Not implemented.');
            });
        }); },
        createDocument: function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                throw new Error('Not implemented.');
            });
        }); },
    },
    renderProps: {},
});
//# sourceMappingURL=context.js.map