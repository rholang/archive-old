"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adf_schema_1 = require("@atlaskit/adf-schema");
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_utils_1 = require("prosemirror-utils");
var gap_cursor_1 = require("../gap-cursor");
var analytics_1 = require("../analytics");
var main_1 = require("./pm-plugins/main");
var getContextData = function (contextProvider) {
    if (contextProvider === void 0) { contextProvider = {}; }
    var objectId = contextProvider.objectId, containerId = contextProvider.containerId;
    var userContext = objectId
        ? analytics_1.USER_CONTEXT.EDIT
        : analytics_1.USER_CONTEXT.NEW;
    return {
        objectId: objectId,
        containerId: containerId,
        userContext: userContext,
    };
};
var generateAnalyticsPayload = function (listType, contextData, inputMethod, itemLocalId, listLocalId, itemIdx, listSize) {
    var containerId;
    var objectId;
    var userContext;
    if (contextData) {
        (containerId = contextData.containerId, objectId = contextData.objectId, userContext = contextData.userContext);
    }
    return {
        action: analytics_1.ACTION.INSERTED,
        actionSubject: analytics_1.ACTION_SUBJECT.DOCUMENT,
        actionSubjectId: listType === 'taskList'
            ? analytics_1.ACTION_SUBJECT_ID.ACTION
            : analytics_1.ACTION_SUBJECT_ID.DECISION,
        eventType: analytics_1.EVENT_TYPE.TRACK,
        attributes: {
            inputMethod: inputMethod,
            containerAri: containerId,
            objectAri: objectId,
            userContext: userContext,
            localId: itemLocalId,
            listLocalId: listLocalId,
            position: itemIdx,
            listSize: listSize,
        },
    };
};
exports.getListTypes = function (listType, schema) {
    var _a = schema.nodes, decisionList = _a.decisionList, decisionItem = _a.decisionItem, taskList = _a.taskList, taskItem = _a.taskItem;
    if (listType === 'taskList') {
        return {
            list: taskList,
            item: taskItem,
        };
    }
    return {
        list: decisionList,
        item: decisionItem,
    };
};
exports.insertTaskDecision = function (view, listType, inputMethod) {
    if (inputMethod === void 0) { inputMethod = analytics_1.INPUT_METHOD.TOOLBAR; }
    var state = view.state;
    var schema = state.schema;
    var addAndCreateList = function (_a) {
        var tr = _a.tr, list = _a.list, item = _a.item, listLocalId = _a.listLocalId, itemLocalId = _a.itemLocalId;
        return exports.createListAtSelection(tr, list, item, schema, state, listLocalId, itemLocalId);
    };
    var addToList = function (_a) {
        var state = _a.state, tr = _a.tr, item = _a.item, itemLocalId = _a.itemLocalId;
        var $to = state.selection.$to;
        var pos = $to.end($to.depth);
        return tr
            .split(pos, 1, [{ type: item, attrs: { localId: itemLocalId } }])
            .setSelection(new prosemirror_state_1.TextSelection(tr.doc.resolve(pos + $to.depth)));
    };
    var tr = exports.insertTaskDecisionWithAnalytics(state, listType, inputMethod, addAndCreateList, addToList);
    if (tr) {
        view.dispatch(tr);
        return true;
    }
    return false;
};
exports.insertTaskDecisionWithAnalytics = function (state, listType, inputMethod, addAndCreateList, addToList) {
    var schema = state.schema;
    var _a = exports.getListTypes(listType, schema), list = _a.list, item = _a.item;
    var tr = state.tr;
    var $to = state.selection.$to;
    var listNode = prosemirror_utils_1.findParentNodeOfType(list)(state.selection);
    var itemLocalId = adf_schema_1.uuid.generate();
    var contextIdentifierProvider = main_1.stateKey.getState(state)
        .contextIdentifierProvider;
    var contextData = getContextData(contextIdentifierProvider);
    var listLocalId;
    var insertTrCreator;
    var itemIdx;
    var listSize;
    if (!listNode) {
        // Not a list - convert to one.
        listLocalId = adf_schema_1.uuid.generate();
        itemIdx = 0;
        listSize = 1;
        insertTrCreator = addAndCreateList;
    }
    else if ($to.node().textContent.length > 0) {
        listSize = listNode.node.childCount + 1;
        listLocalId = listNode.node.attrs.localId;
        var listItemNode = prosemirror_utils_1.findParentNodeOfType(item)(state.selection); // finds current item in list
        itemIdx = listItemNode
            ? state.doc.resolve(listItemNode.pos).index() + 1
            : 0;
        insertTrCreator = addToList ? addToList : addAndCreateList;
    }
    if (insertTrCreator) {
        var insertTr = insertTrCreator({
            state: state,
            tr: tr,
            list: list,
            item: item,
            listLocalId: listLocalId,
            itemLocalId: itemLocalId,
        });
        if (insertTr) {
            insertTr = analytics_1.addAnalytics(state, insertTr, generateAnalyticsPayload(listType, contextData, inputMethod, itemLocalId, listLocalId, itemIdx || 0, listSize || 0));
        }
        return insertTr;
    }
    return null;
};
exports.isSupportedSourceNode = function (schema, selection) {
    var _a = schema.nodes, paragraph = _a.paragraph, blockquote = _a.blockquote, decisionList = _a.decisionList, taskList = _a.taskList;
    return prosemirror_utils_1.hasParentNodeOfType([blockquote, paragraph, decisionList, taskList])(selection);
};
exports.changeInDepth = function (before, after) {
    return after.depth - before.depth;
};
exports.createListAtSelection = function (tr, list, item, schema, state, listLocalId, itemLocalId) {
    if (listLocalId === void 0) { listLocalId = adf_schema_1.uuid.generate(); }
    if (itemLocalId === void 0) { itemLocalId = adf_schema_1.uuid.generate(); }
    var selection = state.selection;
    var $from = selection.$from, $to = selection.$to;
    if ($from.parent !== $to.parent) {
        // ignore selections across multiple nodes
        return null;
    }
    var _a = schema.nodes, paragraph = _a.paragraph, blockquote = _a.blockquote, decisionList = _a.decisionList, taskList = _a.taskList, mediaGroup = _a.mediaGroup;
    if ($from.parent.type === mediaGroup) {
        return null;
    }
    var emptyList = list.create({ localId: listLocalId }, [
        item.create({ localId: itemLocalId }),
    ]);
    // we don't take the content of a block node next to the gap cursor and always create an empty task
    if (selection instanceof gap_cursor_1.GapCursorSelection) {
        return prosemirror_utils_1.safeInsert(emptyList)(tr);
    }
    // try to replace any of the given nodeTypes
    if (exports.isSupportedSourceNode(schema, selection)) {
        // A text selection within one of these node types converts the node type.
        var nodeTypesToReplace = [blockquote, decisionList, taskList];
        var _b = selection.$from.node(), nodeType = _b.type, childCount = _b.childCount;
        if (nodeType === paragraph && childCount > 0) {
            // Only convert paragraphs containing content.
            // Empty paragraphs use the default flow.
            // This distinction ensures the text selection remains in the correct location.
            nodeTypesToReplace.push(paragraph);
        }
        var newTr = prosemirror_utils_1.replaceParentNodeOfType(nodeTypesToReplace, list.create({ localId: adf_schema_1.uuid.generate() }, [
            item.create({ localId: adf_schema_1.uuid.generate() }, $from.node($from.depth).content),
        ]))(tr);
        // Adjust depth for new selection, if it has changed (e.g. paragraph to list (ol > li))
        var depthAdjustment = exports.changeInDepth($to, newTr.selection.$to);
        tr = tr.setSelection(new prosemirror_state_1.TextSelection(tr.doc.resolve($to.pos + depthAdjustment)));
        // replacing successful
        if (newTr !== tr) {
            return tr;
        }
    }
    return prosemirror_utils_1.safeInsert(emptyList)(tr);
};
exports.splitListAtSelection = function (tr, schema) {
    var selection = tr.selection;
    var $from = selection.$from, $to = selection.$to;
    if ($from.parent !== $to.parent) {
        // ignore selections across multiple nodes
        return tr;
    }
    var _a = schema.nodes, decisionItem = _a.decisionItem, decisionList = _a.decisionList, paragraph = _a.paragraph, taskItem = _a.taskItem, taskList = _a.taskList;
    var parentList = prosemirror_utils_1.findParentNodeOfType([decisionList, taskList])(selection);
    if (!parentList) {
        return tr;
    }
    var item = prosemirror_utils_1.findParentNodeOfType([decisionItem, taskItem])(selection);
    if (!item) {
        return tr;
    }
    var resolvedItemPos = tr.doc.resolve(item.pos);
    var newListIds = [
        parentList.node.attrs['localId'] || adf_schema_1.uuid.generate(),
        adf_schema_1.uuid.generate(),
    ];
    var beforeItems = [];
    var afterItems = [];
    parentList.node.content.forEach(function (item, offset, _index) {
        if (offset < resolvedItemPos.parentOffset) {
            beforeItems.push(item);
        }
        else if (offset > resolvedItemPos.parentOffset) {
            afterItems.push(item);
        }
    });
    var content = [];
    if (beforeItems.length) {
        content.push(parentList.node.type.createChecked({
            localId: newListIds.shift(),
        }, beforeItems));
    }
    content.push(paragraph.createChecked({}, item.node.content));
    if (afterItems.length) {
        content.push(parentList.node.type.createChecked({
            localId: newListIds.shift(),
        }, afterItems));
    }
    // If no list remains at start, then the new selection is different relative to the original selection.
    var posAdjust = beforeItems.length === 0 ? -1 : 1;
    tr = tr.replaceWith(resolvedItemPos.start() - 1, resolvedItemPos.end() + 1, content);
    tr = tr.setSelection(new prosemirror_state_1.TextSelection(tr.doc.resolve($from.pos + posAdjust)));
    return tr;
};
//# sourceMappingURL=commands.js.map