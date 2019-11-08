"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var redux_1 = require("redux");
var redux_thunk_1 = tslib_1.__importDefault(require("redux-thunk"));
var reducers_1 = require("./reducers");
function createStore(initialState) {
    return redux_1.createStore(reducers_1.reducers, initialState, redux_1.applyMiddleware(redux_thunk_1.default));
}
exports.default = createStore;
//# sourceMappingURL=store.js.map