"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_state_1 = require("prosemirror-state");
var utils_1 = require("../utils");
var utils_2 = require("../utils");
var analytics_1 = require("../../../analytics");
var commands_1 = require("../../../utils/commands");
var analytics_2 = require("../../analytics");
exports.moveRight = function () {
    return function (state, dispatch) {
        var code = state.schema.marks.code;
        var _a = state.selection, empty = _a.empty, $cursor = _a.$cursor;
        if (!empty || !$cursor) {
            return false;
        }
        var storedMarks = state.tr.storedMarks;
        if (code) {
            var insideCode = utils_2.markActive(state, code.create());
            var currentPosHasCode = state.doc.rangeHasMark($cursor.pos, $cursor.pos, code);
            var nextPosHasCode = state.doc.rangeHasMark($cursor.pos, $cursor.pos + 1, code);
            var exitingCode = !currentPosHasCode &&
                !nextPosHasCode &&
                (!storedMarks || !!storedMarks.length);
            var enteringCode = !currentPosHasCode &&
                nextPosHasCode &&
                (!storedMarks || !storedMarks.length);
            // entering code mark (from the left edge): don't move the cursor, just add the mark
            if (!insideCode && enteringCode) {
                if (dispatch) {
                    dispatch(state.tr.addStoredMark(code.create()));
                }
                return true;
            }
            // exiting code mark: don't move the cursor, just remove the mark
            if (insideCode && exitingCode) {
                if (dispatch) {
                    dispatch(state.tr.removeStoredMark(code));
                }
                return true;
            }
        }
        return false;
    };
};
exports.moveLeft = function () {
    return function (state, dispatch) {
        var code = state.schema.marks.code;
        var _a = state.selection, empty = _a.empty, $cursor = _a.$cursor;
        if (!empty || !$cursor) {
            return false;
        }
        var storedMarks = state.tr.storedMarks;
        if (code) {
            var insideCode = code && utils_2.markActive(state, code.create());
            var currentPosHasCode = utils_1.hasCode(state, $cursor.pos);
            var nextPosHasCode = utils_1.hasCode(state, $cursor.pos - 1);
            var nextNextPosHasCode = utils_1.hasCode(state, $cursor.pos - 2);
            var exitingCode = currentPosHasCode && !nextPosHasCode && Array.isArray(storedMarks);
            var atLeftEdge = nextPosHasCode &&
                !nextNextPosHasCode &&
                (storedMarks === null ||
                    (Array.isArray(storedMarks) && !!storedMarks.length));
            var atRightEdge = ((exitingCode && Array.isArray(storedMarks) && !storedMarks.length) ||
                (!exitingCode && storedMarks === null)) &&
                !nextPosHasCode &&
                nextNextPosHasCode;
            var enteringCode = !currentPosHasCode &&
                nextPosHasCode &&
                Array.isArray(storedMarks) &&
                !storedMarks.length;
            // at the right edge: remove code mark and move the cursor to the left
            if (!insideCode && atRightEdge) {
                var tr = state.tr.setSelection(prosemirror_state_1.Selection.near(state.doc.resolve($cursor.pos - 1)));
                if (dispatch) {
                    dispatch(tr.removeStoredMark(code));
                }
                return true;
            }
            // entering code mark (from right edge): don't move the cursor, just add the mark
            if (!insideCode && enteringCode) {
                if (dispatch) {
                    dispatch(state.tr.addStoredMark(code.create()));
                }
                return true;
            }
            // at the left edge: add code mark and move the cursor to the left
            if (insideCode && atLeftEdge) {
                var tr = state.tr.setSelection(prosemirror_state_1.Selection.near(state.doc.resolve($cursor.pos - 1)));
                if (dispatch) {
                    dispatch(tr.addStoredMark(code.create()));
                }
                return true;
            }
            // exiting code mark (or at the beginning of the line): don't move the cursor, just remove the mark
            var isFirstChild = $cursor.index($cursor.depth - 1) === 0;
            if (insideCode &&
                (exitingCode || (!$cursor.nodeBefore && isFirstChild))) {
                if (dispatch) {
                    dispatch(state.tr.removeStoredMark(code));
                }
                return true;
            }
        }
        return false;
    };
};
exports.toggleEm = function () {
    return function (state, dispatch) {
        var em = state.schema.marks.em;
        if (em) {
            return commands_1.toggleMark(em)(state, dispatch);
        }
        return false;
    };
};
exports.toggleEmWithAnalytics = function (_a) {
    var inputMethod = _a.inputMethod;
    return analytics_2.withAnalytics({
        action: analytics_2.ACTION.FORMATTED,
        actionSubject: analytics_2.ACTION_SUBJECT.TEXT,
        eventType: analytics_2.EVENT_TYPE.TRACK,
        actionSubjectId: analytics_2.ACTION_SUBJECT_ID.FORMAT_ITALIC,
        attributes: {
            inputMethod: inputMethod,
        },
    })(exports.toggleEm());
};
exports.toggleStrike = function () {
    return function (state, dispatch) {
        var strike = state.schema.marks.strike;
        if (strike) {
            return commands_1.toggleMark(strike)(state, dispatch);
        }
        return false;
    };
};
exports.toggleStrikeWithAnalytics = function (_a) {
    var inputMethod = _a.inputMethod;
    return analytics_2.withAnalytics({
        action: analytics_2.ACTION.FORMATTED,
        actionSubject: analytics_2.ACTION_SUBJECT.TEXT,
        eventType: analytics_2.EVENT_TYPE.TRACK,
        actionSubjectId: analytics_2.ACTION_SUBJECT_ID.FORMAT_STRIKE,
        attributes: {
            inputMethod: inputMethod,
        },
    })(exports.toggleStrike());
};
exports.toggleStrong = function () {
    return function (state, dispatch) {
        var strong = state.schema.marks.strong;
        if (strong) {
            return commands_1.toggleMark(strong)(state, dispatch);
        }
        return false;
    };
};
exports.toggleStrongWithAnalytics = function (_a) {
    var inputMethod = _a.inputMethod;
    return analytics_2.withAnalytics({
        action: analytics_2.ACTION.FORMATTED,
        actionSubject: analytics_2.ACTION_SUBJECT.TEXT,
        eventType: analytics_2.EVENT_TYPE.TRACK,
        actionSubjectId: analytics_2.ACTION_SUBJECT_ID.FORMAT_STRONG,
        attributes: {
            inputMethod: inputMethod,
        },
    })(exports.toggleStrong());
};
exports.toggleUnderline = function () {
    return function (state, dispatch) {
        var underline = state.schema.marks.underline;
        if (underline) {
            return commands_1.toggleMark(underline)(state, dispatch);
        }
        return false;
    };
};
exports.toggleUnderlineWithAnalytics = function (_a) {
    var inputMethod = _a.inputMethod;
    return analytics_2.withAnalytics({
        action: analytics_2.ACTION.FORMATTED,
        actionSubject: analytics_2.ACTION_SUBJECT.TEXT,
        eventType: analytics_2.EVENT_TYPE.TRACK,
        actionSubjectId: analytics_2.ACTION_SUBJECT_ID.FORMAT_UNDERLINE,
        attributes: {
            inputMethod: inputMethod,
        },
    })(exports.toggleUnderline());
};
exports.toggleSuperscript = function () {
    return function (state, dispatch) {
        var subsup = state.schema.marks.subsup;
        if (subsup) {
            return commands_1.toggleMark(subsup, { type: 'sup' })(state, dispatch);
        }
        return false;
    };
};
exports.toggleSuperscriptWithAnalytics = function () {
    return analytics_2.withAnalytics({
        action: analytics_2.ACTION.FORMATTED,
        actionSubject: analytics_2.ACTION_SUBJECT.TEXT,
        eventType: analytics_2.EVENT_TYPE.TRACK,
        actionSubjectId: analytics_2.ACTION_SUBJECT_ID.FORMAT_SUPER,
        attributes: {
            inputMethod: analytics_2.INPUT_METHOD.TOOLBAR,
        },
    })(exports.toggleSuperscript());
};
exports.toggleSubscript = function () {
    return function (state, dispatch) {
        var subsup = state.schema.marks.subsup;
        if (subsup) {
            return commands_1.toggleMark(subsup, { type: 'sub' })(state, dispatch);
        }
        return false;
    };
};
exports.toggleSubscriptWithAnalytics = function () {
    return analytics_2.withAnalytics({
        action: analytics_2.ACTION.FORMATTED,
        actionSubject: analytics_2.ACTION_SUBJECT.TEXT,
        eventType: analytics_2.EVENT_TYPE.TRACK,
        actionSubjectId: analytics_2.ACTION_SUBJECT_ID.FORMAT_SUB,
        attributes: {
            inputMethod: analytics_2.INPUT_METHOD.TOOLBAR,
        },
    })(exports.toggleSubscript());
};
exports.toggleCode = function () {
    return function (state, dispatch) {
        var code = state.schema.marks.code;
        if (code) {
            return commands_1.toggleMark(code)(state, dispatch);
        }
        return false;
    };
};
exports.toggleCodeWithAnalytics = function (_a) {
    var inputMethod = _a.inputMethod;
    return analytics_2.withAnalytics({
        action: analytics_2.ACTION.FORMATTED,
        actionSubject: analytics_2.ACTION_SUBJECT.TEXT,
        eventType: analytics_2.EVENT_TYPE.TRACK,
        actionSubjectId: analytics_2.ACTION_SUBJECT_ID.FORMAT_CODE,
        attributes: {
            inputMethod: inputMethod,
        },
    })(exports.toggleCode());
};
var createInlineCodeFromTextInput = function (from, to, text) {
    return function (state, dispatch) {
        if (state.selection.empty) {
            var before_1 = state.doc.resolve(from).nodeBefore;
            var after_1 = state.doc.resolve(to).nodeAfter;
            var hasTickBefore = before_1 && before_1.text && before_1.text.endsWith('`');
            var hasTickAfter = after_1 && after_1.text && after_1.text.startsWith('`');
            if (hasTickBefore && hasTickAfter) {
                analytics_1.analyticsService.trackEvent("atlassian.editor.format.code.autoformatting");
                var tr = state.tr.replaceRangeWith(from - 1, to + 1, state.schema.text(text));
                if (dispatch) {
                    var codeMark = state.schema.marks.code.create();
                    tr = commands_1.applyMarkOnRange(tr.mapping.map(from - 1), tr.mapping.map(to + 1), false, codeMark, tr).setStoredMarks([codeMark]);
                    dispatch(tr);
                }
                return true;
            }
        }
        return false;
    };
};
exports.createInlineCodeFromTextInputWithAnalytics = function (from, to, text) {
    return analytics_2.withAnalytics({
        action: analytics_2.ACTION.FORMATTED,
        actionSubject: analytics_2.ACTION_SUBJECT.TEXT,
        eventType: analytics_2.EVENT_TYPE.TRACK,
        actionSubjectId: analytics_2.ACTION_SUBJECT_ID.FORMAT_CODE,
        attributes: {
            inputMethod: analytics_2.INPUT_METHOD.FORMATTING,
        },
    })(createInlineCodeFromTextInput(from, to, text));
};
//# sourceMappingURL=text-formatting.js.map