"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_state_1 = require("prosemirror-state");
var ReactNodeViewState = /** @class */ (function () {
    function ReactNodeViewState() {
        this.changeHandlers = [];
        this.changeHandlers = [];
    }
    ReactNodeViewState.prototype.subscribe = function (cb) {
        this.changeHandlers.push(cb);
    };
    ReactNodeViewState.prototype.unsubscribe = function (cb) {
        this.changeHandlers = this.changeHandlers.filter(function (ch) { return ch !== cb; });
    };
    ReactNodeViewState.prototype.notifyNewSelection = function (fromPos, toPos) {
        this.changeHandlers.forEach(function (cb) { return cb(fromPos, toPos); });
    };
    return ReactNodeViewState;
}());
exports.ReactNodeViewState = ReactNodeViewState;
exports.stateKey = new prosemirror_state_1.PluginKey('reactNodeView');
exports.plugin = new prosemirror_state_1.Plugin({
    state: {
        init: function () {
            return new ReactNodeViewState();
        },
        apply: function (_tr, pluginState) {
            return pluginState;
        },
    },
    key: exports.stateKey,
    view: function (view) {
        var pluginState = exports.stateKey.getState(view.state);
        return {
            update: function (view) {
                var _a = view.state.selection, from = _a.from, to = _a.to;
                pluginState.notifyNewSelection(from, to);
            },
        };
    },
});
var plugins = function () { return [exports.plugin]; };
exports.default = plugins;
//# sourceMappingURL=react-nodeview.js.map