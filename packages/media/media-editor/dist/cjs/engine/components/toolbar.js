"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var signal_1 = require("../signal");
var DefaultToolbar = /** @class */ (function () {
    function DefaultToolbar(onUpdateByCore) {
        this.onUpdateByCore = onUpdateByCore;
        this.colorChanged = new signal_1.Signal();
        this.lineWidthChanged = new signal_1.Signal();
        this.addShadowChanged = new signal_1.Signal();
        this.toolChanged = new signal_1.Signal();
    }
    DefaultToolbar.prototype.unload = function () { };
    DefaultToolbar.prototype.updateByCore = function (parameters) {
        this.onUpdateByCore(parameters);
    };
    DefaultToolbar.prototype.setColor = function (color) {
        this.colorChanged.emit(color);
    };
    DefaultToolbar.prototype.setLineWidth = function (lineWidth) {
        this.lineWidthChanged.emit(lineWidth);
    };
    DefaultToolbar.prototype.setAddShadow = function (addShadow) {
        this.addShadowChanged.emit(addShadow);
    };
    DefaultToolbar.prototype.setTool = function (tool) {
        this.toolChanged.emit(tool);
    };
    return DefaultToolbar;
}());
exports.DefaultToolbar = DefaultToolbar;
//# sourceMappingURL=toolbar.js.map