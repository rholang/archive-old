"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_keymap_1 = require("prosemirror-keymap");
var w3c_keyname_1 = require("w3c-keyname");
/**
 * A workaround for mostly Cyrillic but should have a positive affect
 * on other languages / layouts. Attempts a similar approach to OS X.
 * @see ED-7310
 * @see https://github.com/ProseMirror/prosemirror/issues/957
 * @param bindings
 */
function keymap(bindings) {
    return new prosemirror_state_1.Plugin({
        props: {
            handleKeyDown: function (view, event) {
                var name = w3c_keyname_1.keyName(event);
                var keyboardEvent = event;
                if (event.ctrlKey &&
                    name.length === 1 &&
                    // Check the unicode of the character to
                    // assert that its not an ASCII character.
                    // These are characters outside Latin's range.
                    /[^\u0000-\u007f]/.test(name)) {
                    keyboardEvent = new KeyboardEvent('keydown', {
                        key: w3c_keyname_1.base[event.keyCode],
                        code: event.code,
                        ctrlKey: true,
                    });
                }
                return prosemirror_keymap_1.keydownHandler(bindings)(view, keyboardEvent);
            },
        },
    });
}
exports.keymap = keymap;
//# sourceMappingURL=keymap.js.map