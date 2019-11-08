"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_loadable_1 = tslib_1.__importDefault(require("react-loadable"));
exports.ToolbarLoader = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal-editor-core-floating-toolbar" */ './Toolbar')); });
    },
    loading: function () { return null; },
});
//# sourceMappingURL=ToolbarLoader.js.map