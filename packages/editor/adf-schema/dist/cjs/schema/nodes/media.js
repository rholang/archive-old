"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("../../utils/colors");
exports.defaultAttrs = {
    id: { default: '' },
    type: { default: 'file' },
    collection: { default: null },
    occurrenceKey: { default: null },
    width: { default: null },
    height: { default: null },
    url: { default: null },
    __fileName: { default: null },
    __fileSize: { default: null },
    __fileMimeType: { default: null },
    __displayType: { default: null },
    __contextId: { default: null },
};
exports.media = {
    selectable: true,
    attrs: exports.defaultAttrs,
    parseDOM: [
        {
            tag: 'div[data-node-type="media"]',
            getAttrs: function (dom) {
                var attrs = {};
                Object.keys(exports.defaultAttrs).forEach(function (k) {
                    var key = exports.camelCaseToKebabCase(k).replace(/^__/, '');
                    var value = dom.getAttribute("data-" + key) || '';
                    if (value) {
                        attrs[k] = value;
                    }
                });
                // Need to do validation & type conversion manually
                if (attrs.__fileSize) {
                    attrs.__fileSize = +attrs.__fileSize;
                }
                if (typeof attrs.width !== 'undefined' && !isNaN(attrs.width)) {
                    attrs.width = Number(attrs.width);
                }
                if (typeof attrs.height !== 'undefined' && !isNaN(attrs.height)) {
                    attrs.height = Number(attrs.height);
                }
                return attrs;
            },
        },
        // Don't match data URI
        {
            tag: 'img[src^="data:image"]',
            ignore: true,
        },
        {
            tag: 'img',
            getAttrs: function (dom) {
                return {
                    type: 'external',
                    url: dom.getAttribute('src') || '',
                };
            },
        },
    ],
    toDOM: function (node) {
        var attrs = {
            'data-id': node.attrs.id,
            'data-node-type': 'media',
            'data-type': node.attrs.type,
            'data-collection': node.attrs.collection,
            'data-occurrence-key': node.attrs.occurrenceKey,
            'data-width': node.attrs.width,
            'data-height': node.attrs.height,
            'data-url': node.attrs.url,
            // toDOM is used for static rendering as well as editor rendering. This comes into play for
            // emails, copy/paste, etc, so the title and styling here *is* useful (despite a React-based
            // node view being used for editing).
            title: 'Attachment',
            // Manually kept in sync with the style of media cards. The goal is to render a plain gray
            // rectangle that provides an affordance for media.
            style: "display: inline-block; border-radius: 3px; background: " + colors_1.N30 + "; box-shadow: 0 1px 1px rgba(9, 30, 66, 0.2), 0 0 1px 0 rgba(9, 30, 66, 0.24);",
        };
        exports.copyPrivateAttributes(node.attrs, attrs, function (key) { return "data-" + exports.camelCaseToKebabCase(key.slice(2)); });
        return ['div', attrs];
    },
};
exports.camelCaseToKebabCase = function (str) {
    return str.replace(/([^A-Z]+)([A-Z])/g, function (_, x, y) { return x + "-" + y.toLowerCase(); });
};
exports.copyPrivateAttributes = function (from, to, map) {
    if (exports.media.attrs) {
        Object.keys(exports.media.attrs).forEach(function (key) {
            if (key[0] === '_' && key[1] === '_' && from[key]) {
                to[map ? map(key) : key] = from[key];
            }
        });
    }
};
/**
 * There's no concept of optional property in ProseMirror. It sets value as `null`
 * when there's no use of any property. We are filtering out all private & optional attrs here.
 */
var optionalAttributes = ['occurrenceKey', 'width', 'height', 'url'];
var externalOnlyAttributes = ['type', 'url', 'width', 'height'];
exports.toJSON = function (node) { return ({
    attrs: Object.keys(node.attrs)
        .filter(function (key) { return !(key[0] === '_' && key[1] === '_'); })
        .reduce(function (obj, key) {
        if (node.attrs.type === 'external' &&
            externalOnlyAttributes.indexOf(key) === -1) {
            return obj;
        }
        if (optionalAttributes.indexOf(key) > -1 &&
            (node.attrs[key] === null || node.attrs[key] === '')) {
            return obj;
        }
        if (['width', 'height'].indexOf(key) !== -1) {
            obj[key] = Number(node.attrs[key]);
            return obj;
        }
        obj[key] = node.attrs[key];
        return obj;
    }, {}),
}); };
//# sourceMappingURL=media.js.map