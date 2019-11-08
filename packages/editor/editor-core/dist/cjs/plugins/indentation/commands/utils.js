"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var analytics_1 = require("../../analytics");
var indentTypes = {
    paragraph: analytics_1.INDENT_TYPE.PARAGRAPH,
    heading: analytics_1.INDENT_TYPE.HEADING,
};
/**
 * Get the current indentation level given prev and new attributes
 * @param prevAttrs - Previous attributes from indentation
 * @param newAttrs - New attributes from indentation
 */
function getNewIndentLevel(prevAttrs, newAttrs) {
    if (newAttrs === undefined) {
        return prevAttrs.level;
    }
    else if (newAttrs === false) {
        return 0;
    }
    return newAttrs.level;
}
exports.getNewIndentLevel = getNewIndentLevel;
/**
 * Get the previous indentation level  prev attributes
 * @param prevAttrs - Previous attributes from indentation
 */
function getPrevIndentLevel(prevAttrs) {
    if (prevAttrs === undefined) {
        return 0;
    }
    return prevAttrs.level;
}
exports.getPrevIndentLevel = getPrevIndentLevel;
/**
 * Create a new dispatch function who add analytics events given a list of attributes changes
 *
 * @export
 * @param {*} getAttrsChanges
 * @param {*} state
 * @param dispatch
 * @returns
 */
function createAnalyticsDispatch(getAttrsChanges, state, dispatch) {
    return function (tr) {
        var currentTr = tr;
        var changes = getAttrsChanges(); // Get all attributes changes
        // Add analytics event for each change stored.
        changes.forEach(function (_a) {
            var node = _a.node, prevAttrs = _a.prevAttrs, newAttrs = _a.newAttrs, direction = _a.options.direction;
            var indentType = indentTypes[node.type.name];
            if (!indentType) {
                return; // If no valid indent type continue
            }
            currentTr = analytics_1.addAnalytics(state, currentTr, {
                action: analytics_1.ACTION.FORMATTED,
                actionSubject: analytics_1.ACTION_SUBJECT.TEXT,
                actionSubjectId: analytics_1.ACTION_SUBJECT_ID.FORMAT_INDENT,
                eventType: analytics_1.EVENT_TYPE.TRACK,
                attributes: {
                    inputMethod: analytics_1.INPUT_METHOD.KEYBOARD,
                    previousIndentationLevel: getPrevIndentLevel(prevAttrs),
                    newIndentLevel: getNewIndentLevel(prevAttrs, newAttrs),
                    direction: direction,
                    indentType: indentType,
                },
            });
        });
        // Dispatch analytics if exist
        if (dispatch) {
            dispatch(tr);
        }
    };
}
exports.createAnalyticsDispatch = createAnalyticsDispatch;
//# sourceMappingURL=utils.js.map