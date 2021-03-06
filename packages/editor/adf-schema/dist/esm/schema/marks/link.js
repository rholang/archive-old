import { __assign } from "tslib";
import { LINK, COLOR } from '../groups';
import { isSafeUrl, normalizeUrl } from '../../utils/url';
export var link = {
    excludes: LINK + " " + COLOR,
    group: LINK,
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
                if (isSafeUrl(href)) {
                    attrs.href = normalizeUrl(href);
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
            __assign(__assign({}, attrs), { class: 'blockLink' }),
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
export var toJSON = function (mark) { return ({
    type: mark.type.name,
    attrs: Object.keys(mark.attrs).reduce(function (attrs, key) {
        if (OPTIONAL_ATTRS.indexOf(key) === -1 || mark.attrs[key] !== null) {
            attrs[key] = mark.attrs[key];
        }
        return attrs;
    }, {}),
}); };
//# sourceMappingURL=link.js.map