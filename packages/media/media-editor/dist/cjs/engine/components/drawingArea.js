"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var signal_1 = require("../signal");
var DefaultDrawingArea = /** @class */ (function () {
    function DefaultDrawingArea(canvas, size, backgroundColor) {
        this.canvas = canvas;
        this.size = size;
        this.backgroundColor = backgroundColor;
        this.resize = new signal_1.Signal();
        this.setCanvasSize();
    }
    Object.defineProperty(DefaultDrawingArea.prototype, "outputSize", {
        get: function () {
            return this.size;
        },
        enumerable: true,
        configurable: true
    });
    DefaultDrawingArea.prototype.unload = function () { };
    DefaultDrawingArea.prototype.setSize = function (size) {
        this.size = size;
        this.setCanvasSize();
        this.resize.emit(size);
    };
    DefaultDrawingArea.prototype.setCanvasSize = function () {
        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;
    };
    return DefaultDrawingArea;
}());
exports.DefaultDrawingArea = DefaultDrawingArea;
//# sourceMappingURL=drawingArea.js.map