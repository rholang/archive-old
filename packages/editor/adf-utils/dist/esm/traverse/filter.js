import { traverse } from './traverse';
export function filter(adf, callback) {
    var result = [];
    traverse(adf, {
        any: function (node) {
            if (callback(node)) {
                result.push(node);
            }
        },
    });
    return result;
}
//# sourceMappingURL=filter.js.map