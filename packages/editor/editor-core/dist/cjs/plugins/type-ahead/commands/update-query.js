"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var find_query_mark_1 = require("../utils/find-query-mark");
var is_query_active_1 = require("../utils/is-query-active");
var main_1 = require("../pm-plugins/main");
exports.updateQueryCommand = function (query) { return function (state, dispatch) {
    var queryMark = find_query_mark_1.findTypeAheadQuery(state);
    var activeQuery = is_query_active_1.isQueryActive(state.schema.marks.typeAheadQuery, state.doc, state.selection.from, state.selection.to);
    if (queryMark === null || activeQuery === false) {
        return false;
    }
    if (dispatch) {
        dispatch(state.tr.setMeta(main_1.pluginKey, {
            action: main_1.ACTIONS.SET_QUERY,
            params: { query: query },
        }));
    }
    return true;
}; };
//# sourceMappingURL=update-query.js.map