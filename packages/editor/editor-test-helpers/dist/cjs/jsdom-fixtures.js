"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_view_1 = require("prosemirror-view");
/**
 * Converts the current image src in the form of http://some/url/128x256.png
 * into an object with the shape `{ width: number, height: number }`
 */
function getImageDimensions(src) {
    if (src.length) {
        var splitUrl = src.split('/');
        var filename = splitUrl[splitUrl.length - 1];
        var _a = tslib_1.__read(filename.split('.', 2), 1), dimensions = _a[0];
        var _b = tslib_1.__read(dimensions.split('x').map(Number), 2), width = _b[0], height = _b[1];
        return { width: width, height: height };
    }
    return null;
}
/**
 * Provides a mock HTMLImageElement that supports urls of the form
 * http://some.domain/path/to/mock/image/128x256.png
 *
 * Only `load` and `error` events are currently supported.
 */
var Image = /** @class */ (function () {
    function Image(width, height) {
        this._src = '';
        this.dimensions = null;
        this.eventListeners = {};
        this.onEvents = {};
        if (width && height) {
            this.dimensions = { width: width, height: height };
        }
    }
    Object.defineProperty(Image.prototype, "onload", {
        set: function (cb) {
            this.onEvents.load = cb;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "onerror", {
        set: function (cb) {
            this.onEvents.error = cb;
        },
        enumerable: true,
        configurable: true
    });
    Image.prototype.fireEvent = function (name) {
        var e_1, _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var onEvent = this.onEvents[name];
        if (onEvent) {
            onEvent(args);
        }
        var eventListeners = this.eventListeners[name];
        if (eventListeners) {
            try {
                for (var eventListeners_1 = tslib_1.__values(eventListeners), eventListeners_1_1 = eventListeners_1.next(); !eventListeners_1_1.done; eventListeners_1_1 = eventListeners_1.next()) {
                    var listener = eventListeners_1_1.value;
                    listener(args);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (eventListeners_1_1 && !eventListeners_1_1.done && (_a = eventListeners_1.return)) _a.call(eventListeners_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    Image.prototype.addEventListener = function (eventName, cb) {
        var eventSet = this.eventListeners[eventName];
        if (!eventSet) {
            eventSet = this.eventListeners[eventName] = new Set();
        }
        eventSet.add(cb);
    };
    Image.prototype.removeEventListener = function (eventName, cb) {
        var eventSet = this.eventListeners[eventName];
        if (!eventSet) {
            return;
        }
        eventSet.delete(cb);
    };
    Object.defineProperty(Image.prototype, "src", {
        get: function () {
            return this._src;
        },
        set: function (src) {
            this._src = src;
            if (!src) {
                this.fireEvent('error');
                return;
            }
            // re-trigger "loading" the image
            this.dimensions = getImageDimensions(src);
            if (this.dimensions) {
                this.fireEvent('load');
            }
            else {
                this.fireEvent('error');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "width", {
        get: function () {
            return this.dimensions && this.dimensions.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "naturalWidth", {
        get: function () {
            return this.dimensions && this.dimensions.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "height", {
        get: function () {
            return this.dimensions && this.dimensions.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "naturalHeight", {
        get: function () {
            return this.dimensions && this.dimensions.height;
        },
        enumerable: true,
        configurable: true
    });
    return Image;
}());
exports.Image = Image;
var NullSelectionReader = /** @class */ (function () {
    function NullSelectionReader(warnOnce) {
        this.warnOnce = warnOnce;
    }
    NullSelectionReader.prototype.destroy = function () { };
    NullSelectionReader.prototype.poll = function () { };
    NullSelectionReader.prototype.editableChanged = function () { };
    // : () → bool
    // Whether the DOM selection has changed from the last known state.
    NullSelectionReader.prototype.domChanged = function () {
        this.warnOnce();
        return true;
    };
    // Store the current state of the DOM selection.
    NullSelectionReader.prototype.storeDOMState = function (_selection) {
        this.warnOnce();
    };
    NullSelectionReader.prototype.clearDOMState = function () {
        this.warnOnce();
    };
    // : (?string) → bool
    // When the DOM selection changes in a notable manner, modify the
    // current selection state to match.
    NullSelectionReader.prototype.readFromDOM = function (_origin) {
        this.warnOnce();
        return true;
    };
    return NullSelectionReader;
}());
exports.NullSelectionReader = NullSelectionReader;
exports.default = (function (editorView) {
    var warnOnce = (function () {
        return function () {
            if (window.hasWarnedAboutJsdomFixtures) {
                return;
            }
            // eslint-disable-next-line no-console
            console.warn('Warning! Test depends on DOM selection API which is not supported in JSDOM/Node environment.');
            window.hasWarnedAboutJsdomFixtures = true;
        };
    })();
    // Ignore all DOM document selection changes and do nothing to update it
    editorView.selectionReader = new NullSelectionReader(warnOnce);
    // Make sure that we don't attempt to scroll down to selection when dispatching a transaction
    editorView.updateState = function (state) {
        warnOnce();
        state.scrollToSelection = 0;
        prosemirror_view_1.EditorView.prototype.updateState.apply(this, arguments);
    };
    // Do nothing to update selection
    editorView.setSelection = function (_anchor, _head, _root) {
        warnOnce();
    };
    editorView.destroy = function () {
        prosemirror_view_1.EditorView.prototype.destroy.apply(this, arguments);
    };
});
//# sourceMappingURL=jsdom-fixtures.js.map