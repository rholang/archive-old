"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hyphenateStyleName_1 = tslib_1.__importDefault(require("fbjs/lib/hyphenateStyleName"));
/**
 * The below code is inspired by the css function in styled components
  https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/types.js
 */
function evaluateInner(styles) {
    var interpolations = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        interpolations[_i - 1] = arguments[_i];
    }
    return flatten(interleave(styles, interpolations)).join('');
}
exports.default = evaluateInner;
function interleave(strings, interpolations) {
    var result = [strings[0]];
    for (var i = 0; i < interpolations.length; i++) {
        result.push(interpolations[i], strings[i + 1]);
    }
    return result;
}
function flatten(chunks, executionContext) {
    if (executionContext === void 0) { executionContext = { theme: { __ATLASKIT_THEME__: { mode: 'light' } } }; }
    return chunks.reduce(function (ruleSet, chunk) {
        /* Remove falsey values */
        if (chunk === undefined ||
            chunk === null ||
            chunk === false ||
            chunk === '') {
            return ruleSet;
        }
        /* Flatten ruleSet */
        if (Array.isArray(chunk)) {
            ruleSet.push.apply(ruleSet, tslib_1.__spread(flatten(chunk, executionContext)));
            return ruleSet;
        }
        /* Either execute or defer the function */
        if (typeof chunk === 'function') {
            if (executionContext) {
                var nextChunk = chunk(executionContext);
                ruleSet.push.apply(ruleSet, tslib_1.__spread(flatten([nextChunk], executionContext)));
            }
            else
                ruleSet.push(chunk);
            return ruleSet;
        }
        ruleSet.push(isPlainObject(chunk) ? objToCss(chunk) : chunk.toString());
        return ruleSet;
    }, []);
}
function isPlainObject(x) {
    return typeof x === 'object' && x.constructor === Object;
}
function objToCss(obj, prevKey) {
    var css = Object.keys(obj)
        .filter(function (key) {
        var chunk = obj[key];
        return (chunk !== undefined && chunk !== null && chunk !== false && chunk !== '');
    })
        .map(function (key) {
        if (isPlainObject(obj[key]))
            return objToCss(obj[key], key);
        return hyphenateStyleName_1.default(key) + ": " + obj[key] + ";";
    })
        .join(' ');
    return prevKey
        ? prevKey + " {\n    " + css + "\n  }"
        : css;
}
//# sourceMappingURL=evaluate-inner.js.map