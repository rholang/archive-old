"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_transform_1 = require("prosemirror-transform");
var analytics_1 = require("../../analytics");
exports.FORMATTING_NODE_TYPES = ['heading', 'codeBlock', 'blockquote'];
exports.FORMATTING_MARK_TYPES = [
    'em',
    'code',
    'strike',
    'strong',
    'underline',
    'textColor',
    'subsup',
];
var formatTypes = {
    em: analytics_1.ACTION_SUBJECT_ID.FORMAT_ITALIC,
    code: analytics_1.ACTION_SUBJECT_ID.FORMAT_CODE,
    strike: analytics_1.ACTION_SUBJECT_ID.FORMAT_STRIKE,
    strong: analytics_1.ACTION_SUBJECT_ID.FORMAT_STRONG,
    underline: analytics_1.ACTION_SUBJECT_ID.FORMAT_UNDERLINE,
    textColor: analytics_1.ACTION_SUBJECT_ID.FORMAT_COLOR,
    subsup: 'subsup',
};
function clearFormattingWithAnalytics(inputMethod) {
    return clearFormatting(inputMethod);
}
exports.clearFormattingWithAnalytics = clearFormattingWithAnalytics;
function clearFormatting(inputMethod) {
    return function (state, dispatch) {
        var tr = state.tr;
        var formattingCleared = [];
        exports.FORMATTING_MARK_TYPES.forEach(function (mark) {
            var _a = tr.selection, from = _a.from, to = _a.to;
            var markType = state.schema.marks[mark];
            if (markType && state.doc.rangeHasMark(from, to, markType)) {
                formattingCleared.push(formatTypes[mark]);
                tr.removeMark(from, to, markType);
            }
        });
        exports.FORMATTING_NODE_TYPES.forEach(function (nodeName) {
            var formattedNodeType = state.schema.nodes[nodeName];
            var _a = tr.selection, $from = _a.$from, $to = _a.$to;
            tr.doc.nodesBetween($from.pos, $to.pos, function (node, pos) {
                if (node.type === formattedNodeType) {
                    if (formattedNodeType.isTextblock) {
                        tr.setNodeMarkup(pos, state.schema.nodes.paragraph);
                        formattingCleared.push(nodeName);
                        return false;
                    }
                    else {
                        // In case of panel or blockquote
                        var fromPos = tr.doc.resolve(pos + 1);
                        var toPos = tr.doc.resolve(pos + node.nodeSize - 1);
                        var nodeRange = fromPos.blockRange(toPos);
                        if (nodeRange) {
                            var targetLiftDepth = prosemirror_transform_1.liftTarget(nodeRange);
                            if (targetLiftDepth || targetLiftDepth === 0) {
                                formattingCleared.push(nodeName);
                                tr.lift(nodeRange, targetLiftDepth);
                            }
                        }
                    }
                }
                return true;
            });
        });
        tr.setStoredMarks([]);
        if (formattingCleared.length && inputMethod) {
            analytics_1.addAnalytics(state, tr, {
                action: analytics_1.ACTION.FORMATTED,
                eventType: analytics_1.EVENT_TYPE.TRACK,
                actionSubject: analytics_1.ACTION_SUBJECT.TEXT,
                actionSubjectId: analytics_1.ACTION_SUBJECT_ID.FORMAT_CLEAR,
                attributes: {
                    inputMethod: inputMethod,
                    formattingCleared: formattingCleared,
                },
            });
        }
        if (dispatch) {
            dispatch(tr);
        }
        return true;
    };
}
exports.clearFormatting = clearFormatting;
//# sourceMappingURL=clear-formatting.js.map