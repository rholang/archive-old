"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mock = function (payload) { return ({
    context: [],
    handlers: [],
    hasFired: false,
    payload: payload,
    clone: function () {
        return null;
    },
    fire: function () { },
    update: function (_updater) {
        return mock(payload);
    },
}); };
function createAnalyticsEventMock() {
    return jest.fn(mock);
}
exports.default = createAnalyticsEventMock;
//# sourceMappingURL=create-analytics-event-mock.js.map