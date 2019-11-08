import { __read } from "tslib";
import { browser } from '@atlaskit/editor-common';
import keyCodes from './key-codes';
/**
 * Sends a key to ProseMirror content area, simulating user key press.
 * Accepts key descriptions similar to Keymap, i.e. 'Shift-Ctrl-L'
 */
export default function sendKeyToPm(editorView, keys) {
    var event = new CustomEvent('keydown', {
        bubbles: true,
        cancelable: true,
    });
    event.DOM_KEY_LOCATION_LEFT = 1;
    event.DOM_KEY_LOCATION_RIGHT = 2;
    var parts = keys.split(/-(?!'?$)/);
    // set location property of event if Left or Right version of key specified
    var location = 0;
    var locationKeyRegex = /^(Left|Right)(Ctrl|Alt|Mod|Shift|Cmd)$/;
    parts = parts.map(function (part) {
        if (part.search(locationKeyRegex) === -1) {
            return part;
        }
        var _a = __read(part.match(locationKeyRegex), 3), pLocation = _a[1], pKey = _a[2];
        location =
            pLocation === 'Left'
                ? event.DOM_KEY_LOCATION_LEFT
                : event.DOM_KEY_LOCATION_RIGHT;
        return pKey;
    });
    var modKey = parts.indexOf('Mod') !== -1;
    var cmdKey = parts.indexOf('Cmd') !== -1;
    var ctrlKey = parts.indexOf('Ctrl') !== -1;
    var shiftKey = parts.indexOf('Shift') !== -1;
    var altKey = parts.indexOf('Alt') !== -1;
    var key = parts[parts.length - 1];
    // all of the browsers are using the same keyCode for alphabetical keys
    // and it's the uppercased character code in real world
    var code = keyCodes[key] ? keyCodes[key] : key.toUpperCase().charCodeAt(0);
    event.key = key.replace(/Space/g, ' ');
    event.shiftKey = shiftKey;
    event.altKey = altKey;
    event.ctrlKey = ctrlKey || (!browser.mac && modKey);
    event.metaKey = cmdKey || (browser.mac && modKey);
    event.keyCode = code;
    event.which = code;
    event.view = window;
    event.location = location;
    // try {
    editorView.dispatchEvent(event);
    // } catch (error) {
    // throw new Error(error.message || error.name);
    // }
}
//# sourceMappingURL=send-key-to-pm.js.map