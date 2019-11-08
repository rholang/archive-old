"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ReactDOM = tslib_1.__importStar(require("react-dom"));
var ssr_1 = require("@atlaskit/ssr");
// @ts-ignore FS-3905
var path = tslib_1.__importStar(require("path"));
exports.ssr_hydrate = function (dirName, relativeFilePath) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var filePath, Example, elem, _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                filePath = path.resolve(dirName, relativeFilePath);
                Example = require(filePath).default;
                elem = document.createElement('div');
                _a = elem;
                return [4 /*yield*/, ssr_1.ssr(filePath)];
            case 1:
                _a.innerHTML = _b.sent();
                // note: it is required to clear any dirty state to make sure hydration runs without interference
                jest.resetModules();
                ReactDOM.hydrate(React.createElement(Example, null), elem);
                return [2 /*return*/, elem];
        }
    });
}); };
//# sourceMappingURL=ssr-util.js.map