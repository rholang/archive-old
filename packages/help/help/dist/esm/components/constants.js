export var MIN_CHARACTERS_FOR_SEARCH = 0;
export var LOADING_TIMEOUT = 1000;
export var VIEW;
(function (VIEW) {
    VIEW[VIEW["DEFAULT_CONTENT"] = 0] = "DEFAULT_CONTENT";
    VIEW[VIEW["ARTICLE"] = 1] = "ARTICLE";
    VIEW[VIEW["ARTICLE_NAVIGATION"] = 2] = "ARTICLE_NAVIGATION";
})(VIEW || (VIEW = {}));
// Animation related consts
export var TRANSITION_DURATION_MS = 220;
export var UNMOUNTED = 'unmounted';
export var EXITED = 'exited';
export var ENTERING = 'entering';
export var ENTERED = 'entered';
export var EXITING = 'exiting';
export var TRANSITION_STATUS;
(function (TRANSITION_STATUS) {
    TRANSITION_STATUS["UNMOUNTED"] = "unmounted";
    TRANSITION_STATUS["EXITED"] = "exited";
    TRANSITION_STATUS["ENTERING"] = "entering";
    TRANSITION_STATUS["ENTERED"] = "entered";
    TRANSITION_STATUS["EXITING"] = "exiting";
})(TRANSITION_STATUS || (TRANSITION_STATUS = {}));
//# sourceMappingURL=constants.js.map