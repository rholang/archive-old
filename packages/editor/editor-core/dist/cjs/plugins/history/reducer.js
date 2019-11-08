"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
var reducer = function (state, action) {
    switch (action.type) {
        case actions_1.HistoryActionTypes.UPDATE:
            return {
                canUndo: action.canUndo,
                canRedo: action.canRedo,
            };
    }
    return state;
};
exports.default = reducer;
//# sourceMappingURL=reducer.js.map