"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mockData_1 = require("./mockData");
function createCollection(name) {
    return {
        name: name || mockData_1.getHackerNoun(),
        createdAt: Date.now(),
    };
}
exports.createCollection = createCollection;
//# sourceMappingURL=collection.js.map