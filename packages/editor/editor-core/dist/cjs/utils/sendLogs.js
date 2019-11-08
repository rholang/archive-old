"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendLogs = function (body) {
    return fetch('https://analytics.atlassian.com/analytics/events', {
        method: 'POST',
        headers: {
            Accept: 'application/json, */*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
};
//# sourceMappingURL=sendLogs.js.map