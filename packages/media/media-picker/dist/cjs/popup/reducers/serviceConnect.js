"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function serviceConnect(state, action) {
    if (action.type === 'SERVICE_CONNECT') {
        var view = Object.assign({}, state.view, {
            connect: { name: action.serviceName },
            path: false,
        });
        return Object.assign({}, state, { view: view });
    }
    else {
        return state;
    }
}
exports.default = serviceConnect;
//# sourceMappingURL=serviceConnect.js.map