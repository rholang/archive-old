"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createTextNode(input, schema, marks) {
    if (input === '') {
        return [];
    }
    var node = schema.text(input, marks || []);
    return [node];
}
exports.createTextNode = createTextNode;
//# sourceMappingURL=text.js.map