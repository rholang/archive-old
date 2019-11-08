import { __awaiter, __generator } from "tslib";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ssr } from '@atlaskit/ssr';
// @ts-ignore FS-3905
import * as path from 'path';
export var ssr_hydrate = function (dirName, relativeFilePath) { return __awaiter(void 0, void 0, void 0, function () {
    var filePath, Example, elem, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                filePath = path.resolve(dirName, relativeFilePath);
                Example = require(filePath).default;
                elem = document.createElement('div');
                _a = elem;
                return [4 /*yield*/, ssr(filePath)];
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