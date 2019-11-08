"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var groups_1 = require("../groups");
var url_1 = require("../../utils/url");
exports.link = {
    excludes: groups_1.LINK + " " + groups_1.COLOR,
    group: groups_1.LINK,
    attrs: {
        href: {},
        __confluenceMetadata: {
            default: null,
        },
    },
    inclusive: false,
    parseDOM: [
        {
            tag: 'a[href]',
            getAttrs: function (domNode) {
                var dom = domNode;
                var href = dom.getAttribute('href') || '';
                var attrs = {
                    __confluenceMetadata: dom.hasAttribute('__confluenceMetadata')
                        ? JSON.parse(dom.getAttribute('__confluenceMetadata') || '')
                        : undefined,
                };
                if (url_1.isSafeUrl(href)) {
                    attrs.href = url_1.normalizeUrl(href);
                }
                else {
                    return false;
                }
                return attrs;
            },
        },
    ],
    toDOM: function (node, isInline) {
        var attrs = Object.keys(node.attrs).reduce(function (attrs, key) {
            if (key === '__confluenceMetadata') {
                if (node.attrs[key] !== null) {
                    attrs[key] = JSON.stringify(node.attrs[key]);
                }
            }
            else {
                attrs[key] = node.attrs[key];
            }
            return attrs;
        }, {});
        if (isInline) {
            return ['a', attrs];
        }
        return [
            'a',
            tslib_1.__assign(tslib_1.__assign({}, attrs), { class: 'blockLink' }),
            0,
        ];
    },
};
var OPTIONAL_ATTRS = [
    'title',
    'id',
    'collection',
    'occurrenceKey',
    '__confluenceMetadata',
];
exports.toJSON = function (mark) { return ({
    type: mark.type.name,
    attrs: Object.keys(mark.attrs).reduce(function (attrs, key) {
        if (OPTIONAL_ATTRS.indexOf(key) === -1 || mark.attrs[key] !== null) {
            attrs[key] = mark.attrs[key];
        }
        return attrs;
    }, {}),
}); };
//# sourceMappingURL=link.js.map