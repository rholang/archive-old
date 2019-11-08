"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResourceManager = /** @class */ (function () {
    function ResourceManager() {
        this.releaseFunctions = [];
    }
    ResourceManager.prototype.add = function (resource) {
        this.releaseFunctions.push(function () {
            resource.unload();
        });
    };
    ResourceManager.prototype.addCustom = function (releaseFunction) {
        this.releaseFunctions.push(releaseFunction);
    };
    ResourceManager.prototype.releaseAll = function () {
        this.releaseFunctions.reverse();
        this.releaseFunctions.forEach(function (fn) { return fn(); });
        this.releaseFunctions = [];
    };
    return ResourceManager;
}());
exports.ResourceManager = ResourceManager;
//# sourceMappingURL=resourceManager.js.map