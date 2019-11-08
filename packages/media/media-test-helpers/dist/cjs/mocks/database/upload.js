"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var uuid = tslib_1.__importStar(require("uuid"));
var mockData_1 = require("./mockData");
function createUpload() {
    return {
        id: uuid.v4(),
        created: Date.now(),
        expires: mockData_1.getFutureDate().valueOf(),
        chunks: [],
    };
}
exports.createUpload = createUpload;
//# sourceMappingURL=upload.js.map