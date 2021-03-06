"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * For text that has leading and ending space. We don't want to
 * convert it to `* strong *. Instead, we need it to be ` *strong* `
 */
exports.baseMarkPattern = function (text, token) {
    if (/^\s*$/.test(text)) {
        /**
         * If it's a string with only whitespaces, wiki renderer
         * will behave incorrect if we apply format on it
         */
        return text;
    }
    return text.replace(/^\s*/, "$&" + token).replace(/\s*$/, token + "$&");
};
//# sourceMappingURL=__base.js.map