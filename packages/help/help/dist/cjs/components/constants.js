"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MIN_CHARACTERS_FOR_SEARCH = 0;
exports.LOADING_TIMEOUT = 1000;
var VIEW;
(function (VIEW) {
    VIEW[VIEW["DEFAULT_CONTENT"] = 0] = "DEFAULT_CONTENT";
    VIEW[VIEW["ARTICLE"] = 1] = "ARTICLE";
    VIEW[VIEW["ARTICLE_NAVIGATION"] = 2] = "ARTICLE_NAVIGATION";
})(VIEW = exports.VIEW || (exports.VIEW = {}));
// Animation related consts
exports.TRANSITION_DURATION_MS = 220;
exports.UNMOUNTED = 'unmounted';
exports.EXITED = 'exited';
exports.ENTERING = 'entering';
exports.ENTERED = 'entered';
exports.EXITING = 'exiting';
var TRANSITION_STATUS;
(function (TRANSITION_STATUS) {
    TRANSITION_STATUS["UNMOUNTED"] = "unmounted";
    TRANSITION_STATUS["EXITED"] = "exited";
    TRANSITION_STATUS["ENTERING"] = "entering";
    TRANSITION_STATUS["ENTERED"] = "entered";
    TRANSITION_STATUS["EXITING"] = "exiting";
})(TRANSITION_STATUS = exports.TRANSITION_STATUS || (exports.TRANSITION_STATUS = {}));
//# sourceMappingURL=constants.js.map