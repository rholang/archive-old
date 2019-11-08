"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Rusha = tslib_1.__importStar(require("rusha"));
var SimpleHasher = /** @class */ (function () {
    function SimpleHasher() {
    }
    SimpleHasher.prototype.hash = function (blob) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsArrayBuffer(blob);
            reader.onload = function () {
                resolve(Rusha.createHash()
                    .update(reader.result)
                    .digest('hex'));
            };
            reader.onerror = reject;
        });
    };
    return SimpleHasher;
}());
exports.SimpleHasher = SimpleHasher;
//# sourceMappingURL=simpleHasher.js.map