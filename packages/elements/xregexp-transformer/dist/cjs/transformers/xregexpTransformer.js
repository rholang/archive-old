"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
/*
 @types/xregexp is not compatible with esModuleInterop
 so opting out of typechecking on xregexp since it's a dev tool anyway
 */
var XRegExp = require('xregexp');
var getArrayElement = function (args, index) {
    return args && args.length > index ? args[index] : undefined;
};
// Note: only parses "new RegExp(<expression>, <options>)" expressions
function xregexpTransformer() {
    return function (context) {
        var visit = function (node) {
            // TODO: parse "new XRegExp" and transform it to "new RegExp"
            if (ts.isNewExpression(node) && node.expression.getText() === 'RegExp') {
                var pattern = getArrayElement(node.arguments, 0);
                var flags = getArrayElement(node.arguments, 1);
                // note: for some reason there are extras slashes
                var p = pattern
                    .getText()
                    .replace(/\\\\p/g, '\\p')
                    .slice(1, -1);
                var f = flags.getText().slice(1, -1);
                var xregexp = XRegExp(p, f);
                var newPattern = ts.createStringLiteral(xregexp.source);
                return ts.updateNew(node, node.expression, undefined, [
                    newPattern,
                    flags,
                ]);
            }
            return ts.visitEachChild(node, function (child) { return visit(child); }, context);
        };
        return function (node) { return ts.visitNode(node, visit); };
    };
}
exports.default = xregexpTransformer;
