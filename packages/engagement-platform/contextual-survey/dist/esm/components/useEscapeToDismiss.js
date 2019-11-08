import { useEffect, useRef } from 'react';
export var escape = 27;
function bind(target, eventName, handler, options) {
    target.addEventListener(eventName, handler, options);
    return function unbind() {
        target.removeEventListener(eventName, handler, options);
    };
}
function shouldDismiss(target) {
    if (!target) {
        return true;
    }
    if (!(target instanceof HTMLElement)) {
        return true;
    }
    // Closest doesn't exist for ie11
    // Because we cannot be sure if in a text area - just don't allow dismissing
    if (!target.closest) {
        return false;
    }
    var inTextArea = Boolean(target.closest('textarea'));
    // Allow dismissing if not in a textarea
    return !inTextArea;
}
export default function useEscapeToDismiss(_a) {
    var onDismiss = _a.onDismiss;
    var onDismissRef = useRef(onDismiss);
    // Defensively accounting for consumer passing in a new function
    // each time. We just want to call the latest one
    useEffect(function () {
        onDismissRef.current = onDismiss;
    }, [onDismiss]);
    useEffect(function () {
        var unbind;
        function onKeyDown(event) {
            if (event.keyCode !== escape) {
                return;
            }
            // Escape pressed
            // We don't want to close if the user is typing in the text area
            if (!shouldDismiss(event.target)) {
                return;
            }
            if (unbind) {
                // only want to call dismiss once
                unbind();
            }
            onDismissRef.current();
        }
        unbind = bind(window, 'keydown', 
        // @ts-ignore: the typescript for this is lame
        onKeyDown, { passive: true });
        // double calls to unbind is fine
        return unbind;
    }, []);
}
//# sourceMappingURL=useEscapeToDismiss.js.map