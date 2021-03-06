import { __read } from "tslib";
var ContentType;
(function (ContentType) {
    ContentType[ContentType["NUMBER"] = 0] = "NUMBER";
    ContentType[ContentType["TEXT"] = 5] = "TEXT";
    ContentType[ContentType["MENTION"] = 10] = "MENTION";
    ContentType[ContentType["DATE"] = 15] = "DATE";
    ContentType[ContentType["STATUS"] = 20] = "STATUS";
    ContentType[ContentType["LINK"] = 25] = "LINK";
})(ContentType || (ContentType = {}));
function getLinkMark(node) {
    var _a = __read(node.marks.filter(function (mark) { return mark.type.name === 'link'; }), 1), linkMark = _a[0];
    return linkMark || null;
}
function getMetaFromNode(node, options) {
    var firstChild = node.firstChild;
    if (!firstChild) {
        return null;
    }
    switch (firstChild.type.name) {
        // Text case
        case 'paragraph': {
            return getMetaFromNode(firstChild, options);
        }
        case 'inlineCard': {
            var attrs = firstChild.attrs;
            var maybeTitle = options.getInlineCardTextFromStore(attrs);
            if (maybeTitle) {
                return {
                    type: ContentType.LINK,
                    value: maybeTitle,
                };
            }
            var url = attrs.url;
            return {
                type: ContentType.LINK,
                value: url ? url : '',
            };
        }
        case 'text': {
            // treat as a link if contain a link
            var linkMark = getLinkMark(firstChild);
            if (linkMark) {
                var value = firstChild.text || '';
                return {
                    type: ContentType.LINK,
                    value: value,
                };
            }
            var text = firstChild.text || '';
            var firstEmptySpace = text.indexOf(' ');
            var firstWord = firstEmptySpace !== -1 ? text.substring(0, firstEmptySpace) : text;
            var maybeANumber = Number.parseFloat(firstWord);
            if (!Number.isNaN(maybeANumber)) {
                return {
                    type: ContentType.NUMBER,
                    value: maybeANumber,
                };
            }
            return {
                type: ContentType.TEXT,
                value: firstWord,
            };
        }
        case 'status': {
            var text = firstChild.attrs.text;
            return {
                type: ContentType.STATUS,
                value: text,
            };
        }
        case 'date': {
            var timestamp = Number.parseInt(firstChild.attrs.timestamp, 20);
            return {
                type: ContentType.DATE,
                value: timestamp,
            };
        }
        case 'mention': {
            // TODO: Check what should be the fallback when mention does not have a text
            var text = firstChild.attrs.text || '';
            return {
                type: ContentType.MENTION,
                value: text.toLowerCase(),
            };
        }
        default:
            return null;
    }
}
function compareValue(valueA, valueB) {
    if (valueA === valueB) {
        return 0;
    }
    return valueA > valueB ? 1 : -1;
}
/**
 * Compare 2 prosemirror nodes and check if it's greater, equal or less than the other node
 *
 * @param {Node} nodeA
 * @param {Node} nodeB
 * @returns {(1 | 0 | -1)}
 *    1  -> NodeA > NodeB
 *    0  -> NodeA === NodeB
 *    -1 -> Node A < NodeB
 */
export var createCompareNodes = function (options) {
    return function (nodeA, nodeB) {
        if (nodeA === null || nodeB === null) {
            return nodeB === null ? 1 : -1;
        }
        var metaNodeA = getMetaFromNode(nodeA, options);
        var metaNodeB = getMetaFromNode(nodeB, options);
        if (metaNodeA === metaNodeB) {
            return 0;
        }
        if (metaNodeA === null || metaNodeB === null) {
            return metaNodeB === null ? 1 : -1;
        }
        if (metaNodeA.type !== metaNodeB.type) {
            return metaNodeA.type > metaNodeB.type ? 1 : -1;
        }
        return compareValue(metaNodeA.value, metaNodeB.value);
    };
};
//# sourceMappingURL=compareNodes.js.map