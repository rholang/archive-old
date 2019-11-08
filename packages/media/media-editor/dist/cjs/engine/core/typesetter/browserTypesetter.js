"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeset_1 = require("./typeset");
var fontInfo_1 = require("./fontInfo");
// The core needs typesets to render text.
// This class is responsible for storing and providing typesets.
var BrowserTypesetter = /** @class */ (function () {
    function BrowserTypesetter(config) {
        this.config = config;
        this.typesets = [];
        this.fontInfo = new fontInfo_1.FontInfo(this.config.textHelperDiv);
    }
    BrowserTypesetter.prototype.unload = function () {
        this.typesets.forEach(function (typeset) { return typeset.unload(); });
    };
    // Creates a new typeset, returns its index.
    // The newly created typeset must exist until it is explicitly deleted with deleteTypeset() regardless context loss.
    BrowserTypesetter.prototype.createTypeset = function () {
        var typeset = new typeset_1.Typeset(tslib_1.__assign(tslib_1.__assign({}, this.config), { fontInfo: this.fontInfo }));
        return this.typesets.push(typeset) - 1;
    };
    BrowserTypesetter.prototype.deleteTypeset = function (index) {
        this.typesets[index].unload();
    };
    BrowserTypesetter.prototype.getTypeset = function (index) {
        return this.typesets[index];
    };
    BrowserTypesetter.prototype.handleContextLost = function () {
        this.typesets.forEach(function (typeset) { return typeset.contextLost(); });
    };
    BrowserTypesetter.prototype.handleContextRestored = function () {
        this.typesets.forEach(function (typeset) { return typeset.contextRestored(); });
    };
    return BrowserTypesetter;
}());
exports.BrowserTypesetter = BrowserTypesetter;
//# sourceMappingURL=browserTypesetter.js.map