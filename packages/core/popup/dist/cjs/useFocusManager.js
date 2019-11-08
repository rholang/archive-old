"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var focus_trap_1 = tslib_1.__importDefault(require("focus-trap"));
var noop = function () { };
exports.useFocusManager = function (_a) {
    var popupRef = _a.popupRef, initialFocusRef = _a.initialFocusRef;
    react_1.useEffect(function () {
        if (!popupRef) {
            return noop;
        }
        var trapConfig = {
            clickOutsideDeactivates: true,
            escapeDeactivates: true,
            initialFocus: initialFocusRef || popupRef,
            fallbackFocus: popupRef,
            returnFocusOnDeactivate: true,
        };
        var focusTrap = focus_trap_1.default(popupRef, trapConfig);
        focusTrap.activate();
        return function () {
            focusTrap.deactivate();
        };
    }, [popupRef, initialFocusRef]);
};
//# sourceMappingURL=useFocusManager.js.map