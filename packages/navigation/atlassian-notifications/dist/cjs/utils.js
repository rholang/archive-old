"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotificationsSrc = function (_a) {
    var locale = _a.locale, product = _a.product;
    var path = '/home/notificationsDrawer/iframe.html';
    var query = [];
    if (locale) {
        query.push("locale=" + encodeURIComponent(locale));
    }
    if (product) {
        query.push("product=" + encodeURIComponent(product));
    }
    if (!query.length) {
        return path;
    }
    return path + "?" + query.join('&');
};
//# sourceMappingURL=utils.js.map