"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kakapo_1 = require("kakapo");
var database_1 = require("../database");
function createMediaPlaygroundRouter() {
    var router = new kakapo_1.Router({
        host: 'https://api-private.dev.atlassian.com',
        requestDelay: 10,
    });
    router.get('/media-playground/api/token/user/impersonation', database_1.userAuthProvider);
    return router;
}
exports.createMediaPlaygroundRouter = createMediaPlaygroundRouter;
//# sourceMappingURL=media-playground-router.js.map