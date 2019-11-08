import { useEffect } from 'react';
import createFocusTrap from 'focus-trap';
var noop = function () { };
export var useFocusManager = function (_a) {
    var popupRef = _a.popupRef, initialFocusRef = _a.initialFocusRef;
    useEffect(function () {
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
        var focusTrap = createFocusTrap(popupRef, trapConfig);
        focusTrap.activate();
        return function () {
            focusTrap.deactivate();
        };
    }, [popupRef, initialFocusRef]);
};
//# sourceMappingURL=useFocusManager.js.map