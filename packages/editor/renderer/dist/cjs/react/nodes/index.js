"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var blockquote_1 = tslib_1.__importDefault(require("./blockquote"));
exports.Blockquote = blockquote_1.default;
var bodiedExtension_1 = tslib_1.__importDefault(require("./bodiedExtension"));
exports.BodiedExtension = bodiedExtension_1.default;
var bulletList_1 = tslib_1.__importDefault(require("./bulletList"));
exports.BulletList = bulletList_1.default;
var decisionList_1 = tslib_1.__importDefault(require("./decisionList"));
exports.DecisionList = decisionList_1.default;
var doc_1 = tslib_1.__importDefault(require("./doc"));
exports.Doc = doc_1.default;
var extension_1 = tslib_1.__importDefault(require("./extension"));
exports.Extension = extension_1.default;
var hardBreak_1 = tslib_1.__importDefault(require("./hardBreak"));
exports.HardBreak = hardBreak_1.default;
var heading_1 = tslib_1.__importDefault(require("./heading"));
exports.Heading = heading_1.default;
var image_1 = tslib_1.__importDefault(require("./image"));
exports.Image = image_1.default;
var inlineExtension_1 = tslib_1.__importDefault(require("./inlineExtension"));
exports.InlineExtension = inlineExtension_1.default;
var layoutSection_1 = tslib_1.__importDefault(require("./layoutSection"));
exports.LayoutSection = layoutSection_1.default;
var layoutColumn_1 = tslib_1.__importDefault(require("./layoutColumn"));
exports.LayoutColumn = layoutColumn_1.default;
var listItem_1 = tslib_1.__importDefault(require("./listItem"));
exports.ListItem = listItem_1.default;
var mediaSingle_1 = tslib_1.__importDefault(require("./mediaSingle"));
exports.MediaSingle = mediaSingle_1.default;
var orderedList_1 = tslib_1.__importDefault(require("./orderedList"));
exports.OrderedList = orderedList_1.default;
var panel_1 = tslib_1.__importDefault(require("./panel"));
exports.Panel = panel_1.default;
var paragraph_1 = tslib_1.__importDefault(require("./paragraph"));
exports.Paragraph = paragraph_1.default;
var placeholder_1 = tslib_1.__importDefault(require("./placeholder"));
exports.Placeholder = placeholder_1.default;
var rule_1 = tslib_1.__importDefault(require("./rule"));
exports.Rule = rule_1.default;
var taskList_1 = tslib_1.__importDefault(require("./taskList"));
exports.TaskList = taskList_1.default;
var table_1 = tslib_1.__importDefault(require("./table"));
exports.Table = table_1.default;
var tableCell_1 = require("./tableCell");
exports.TableCell = tableCell_1.TableCell;
var tableRow_1 = tslib_1.__importDefault(require("./tableRow"));
exports.TableRow = tableRow_1.default;
var unknownBlock_1 = tslib_1.__importDefault(require("./unknownBlock"));
exports.UnknownBlock = unknownBlock_1.default;
var react_loadable_1 = tslib_1.__importDefault(require("react-loadable"));
var CodeBlock = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal-renderer-node_CodeBlock" */ './codeBlock')); });
    },
    loading: function () { return null; },
});
exports.CodeBlock = CodeBlock;
var TaskItem = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal-renderer-node_TaskItem" */ './taskItem')); });
    },
    loading: function () { return null; },
});
exports.TaskItem = TaskItem;
var DecisionItem = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal-renderer-node_DecisionItem" */ './decisionItem')); });
    },
    loading: function () { return null; },
});
exports.DecisionItem = DecisionItem;
var Date = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal-renderer-node_Date" */ './date')); });
    },
    loading: function () { return null; },
});
exports.Date = Date;
var Status = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal-renderer-node_Status" */ './status')); });
    },
    loading: function () { return null; },
});
exports.Status = Status;
var Emoji = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal-renderer-node_Emoji" */ './emoji')); });
    },
    loading: function () { return null; },
});
exports.Emoji = Emoji;
var InlineCard = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal-renderer-node_InlineCard" */ './inlineCard')); });
    },
    loading: function () { return null; },
});
exports.InlineCard = InlineCard;
var BlockCard = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal-renderer-node_BlockCard" */ './blockCard')); });
    },
    loading: function () { return null; },
});
exports.BlockCard = BlockCard;
var Media = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal-renderer-node_Media" */ './media')); });
    },
    loading: function () { return null; },
});
exports.Media = Media;
var MediaGroup = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal-renderer-node_MediaGroup" */ './mediaGroup')); });
    },
    loading: function () { return null; },
});
exports.MediaGroup = MediaGroup;
var Mention = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal-renderer-node_Mention" */ './mention')); });
    },
    loading: function () { return null; },
});
exports.Mention = Mention;
exports.nodeToReact = {
    blockquote: blockquote_1.default,
    bulletList: bulletList_1.default,
    blockCard: BlockCard,
    codeBlock: CodeBlock,
    date: Date,
    decisionItem: DecisionItem,
    decisionList: decisionList_1.default,
    doc: doc_1.default,
    emoji: Emoji,
    extension: extension_1.default,
    bodiedExtension: bodiedExtension_1.default,
    hardBreak: hardBreak_1.default,
    heading: heading_1.default,
    image: image_1.default,
    inlineCard: InlineCard,
    inlineExtension: inlineExtension_1.default,
    layoutSection: layoutSection_1.default,
    layoutColumn: layoutColumn_1.default,
    listItem: listItem_1.default,
    media: Media,
    mediaGroup: MediaGroup,
    mediaSingle: mediaSingle_1.default,
    mention: Mention,
    orderedList: orderedList_1.default,
    panel: panel_1.default,
    paragraph: paragraph_1.default,
    placeholder: placeholder_1.default,
    rule: rule_1.default,
    status: Status,
    taskItem: TaskItem,
    taskList: taskList_1.default,
    table: table_1.default,
    tableCell: tableCell_1.TableCell,
    tableHeader: tableCell_1.TableHeader,
    tableRow: tableRow_1.default,
    unknownBlock: unknownBlock_1.default,
};
exports.toReact = function (node) {
    return exports.nodeToReact[node.type.name];
};
/*
 *  Wraps adjacent textnodes in a textWrapper
 *
 *  Input:
 *  [
 *    {
 *      type: 'text',
 *      text: 'Hello'
 *    },
 *    {
 *      type: 'text',
 *      text: 'World!',
 *      marks: [
 *        {
 *          type: 'strong'
 *        }
 *      ]
 *    }
 *  ]
 *
 *  Output:
 *  [
 *    {
 *      type: 'textWrapper',
 *      content: [
 *        {
 *          type: 'text',
 *          text: 'Hello'
 *        },
 *        {
 *          type: 'text',
 *          text: 'World!',
 *          marks: [
 *            {
 *              type: 'strong'
 *            }
 *          ]
 *        }
 *      ]
 *    }
 *  ]
 */
exports.mergeTextNodes = function (nodes) {
    return nodes.reduce(function (acc, current) {
        if (!exports.isText(current.type.name)) {
            acc.push(current);
            return acc;
        }
        // Append node to previous node, if it was a text wrapper
        if (acc.length > 0 && exports.isTextWrapper(acc[acc.length - 1])) {
            acc[acc.length - 1].content.push(current);
        }
        else {
            acc.push({
                type: {
                    name: 'textWrapper',
                },
                content: [current],
            });
        }
        return acc;
    }, []);
};
exports.isText = function (type) {
    return type === 'text';
};
exports.isTextWrapper = function (node) {
    return node.type.name === 'textWrapper';
};
var whitespaceRegex = /^\s*$/;
/**
 * Detects whether a fragment contains a single paragraph node
 * whose content satisfies the condition for an emoji block
 */
exports.isEmojiDoc = function (doc) {
    if (doc.childCount !== 1) {
        return false;
    }
    var parentNodes = [];
    doc.forEach(function (child) { return parentNodes.push(child); });
    var node = parentNodes[0];
    return node.type.name === 'paragraph' && isEmojiBlock(node.content);
};
var isEmojiBlock = function (pnode) {
    var content = [];
    // Optimisation for long documents - worst case block will be space-emoji-space
    if (pnode.childCount > 7) {
        return false;
    }
    pnode.forEach(function (child) { return content.push(child); });
    var emojiCount = 0;
    for (var i = 0; i < content.length; ++i) {
        var node = content[i];
        switch (node.type.name) {
            case 'text':
                if (node.text && !node.text.match(whitespaceRegex)) {
                    return false;
                }
                continue;
            case 'emoji':
                if (++emojiCount > 3) {
                    return false;
                }
                continue;
            default:
                // Only text and emoji nodes are allowed
                return false;
        }
    }
    return emojiCount > 0;
};
//# sourceMappingURL=index.js.map