"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var signal_1 = require("../signal");
var platformDetector_1 = require("./platformDetector");
var DefaultUndoerRedoer = /** @class */ (function () {
    function DefaultUndoerRedoer() {
        var _this = this;
        this.undo = new signal_1.Signal();
        this.redo = new signal_1.Signal();
        this.keyDownListener = function (event) {
            return _this.keyDown(event);
        };
        this.isUndoEnabled = false;
        this.isRedoEnabled = false;
        document.addEventListener('keydown', this.keyDownListener);
    }
    DefaultUndoerRedoer.prototype.unload = function () {
        document.removeEventListener('keydown', this.keyDownListener);
    };
    DefaultUndoerRedoer.prototype.undoEnabled = function () {
        this.isUndoEnabled = true;
    };
    DefaultUndoerRedoer.prototype.undoDisabled = function () {
        this.isUndoEnabled = false;
    };
    DefaultUndoerRedoer.prototype.redoEnabled = function () {
        this.isRedoEnabled = true;
    };
    DefaultUndoerRedoer.prototype.redoDisabled = function () {
        this.isRedoEnabled = false;
    };
    DefaultUndoerRedoer.prototype.keyDown = function (event) {
        var isModKeyPressed = platformDetector_1.isMac() ? event.metaKey : event.ctrlKey;
        var yKeyWithoutShift = event.key === 'y' && !event.shiftKey;
        var zKeyWithShift = event.key === 'z' && event.shiftKey;
        var zKeyWithoutShift = event.key === 'z' && !event.shiftKey;
        if (this.isUndoEnabled && isModKeyPressed && zKeyWithoutShift) {
            this.undo.emit({});
            event.preventDefault();
        }
        if (this.isRedoEnabled &&
            isModKeyPressed &&
            (platformDetector_1.isWindows() ? yKeyWithoutShift : zKeyWithShift)) {
            this.redo.emit({});
            event.preventDefault();
        }
    };
    return DefaultUndoerRedoer;
}());
exports.DefaultUndoerRedoer = DefaultUndoerRedoer;
//# sourceMappingURL=undoerRedoer.js.map