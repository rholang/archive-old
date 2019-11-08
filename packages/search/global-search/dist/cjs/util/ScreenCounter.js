"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SearchScreenCounter = /** @class */ (function () {
    function SearchScreenCounter() {
        this.count = 1;
    }
    SearchScreenCounter.prototype.getCount = function () {
        return this.count;
    };
    SearchScreenCounter.prototype.increment = function () {
        this.count++;
    };
    return SearchScreenCounter;
}());
exports.SearchScreenCounter = SearchScreenCounter;
//# sourceMappingURL=ScreenCounter.js.map