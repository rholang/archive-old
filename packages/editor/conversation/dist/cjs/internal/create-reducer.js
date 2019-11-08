"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReducer = function (initialState, handlers) { return function (state, action) {
    if (state === void 0) { state = initialState; }
    if (handlers[action.type]) {
        return handlers[action.type](state, action);
    }
    return state;
}; };
//# sourceMappingURL=create-reducer.js.map