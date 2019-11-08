"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function valueOf(state) {
    var states = [
        {
            name: 'bullet',
            active: state.bulletListActive,
            enabled: !state.bulletListDisabled,
        },
        {
            name: 'ordered',
            active: state.orderedListActive,
            enabled: !state.orderedListDisabled,
        },
    ];
    return states;
}
exports.valueOf = valueOf;
//# sourceMappingURL=listState.js.map