import { traverse } from './traverse';
export function map(adf, callback) {
    var result = [];
    traverse(adf, {
        any: function (node) {
            result.push(callback(node));
        },
    });
    return result;
}
//# sourceMappingURL=map.js.map