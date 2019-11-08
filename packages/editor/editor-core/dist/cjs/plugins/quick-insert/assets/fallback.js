"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
function IconFallback(_a) {
    var _b = _a.label, label = _b === void 0 ? '' : _b;
    return (React.createElement("div", { "aria-label": label, dangerouslySetInnerHTML: {
            __html: "<svg width=\"40\" height=\"40\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient x1=\"-26.046%\" y1=\"100%\" x2=\"62.626%\" y2=\"0%\" id=\"fallback-a\"><stop stop-color=\"#B3BAC5\" offset=\"0%\"/><stop stop-color=\"#A5ADBA\" offset=\"100%\"/></linearGradient></defs><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#FFF\" d=\"M0 0h40v40H0z\"/><path fill=\"#DFE1E6\" d=\"M20 16h12v12H20z\"/><path fill=\"url(#fallback-a)\" d=\"M8 16h12v12H8z\"/><path d=\"M20 16c-4 .5-6.029 2.5-6.086 6-.057 3.5-2.028 5.5-5.914 6h12V16z\" fill=\"#A5ADBA\"/><path fill=\"#B3BAC5\" d=\"M17.5 13h5v3h-5z\"/><path fill=\"#A5ADBA\" d=\"M10 13h5v3h-5z\"/><path fill=\"#DFE1E6\" d=\"M25 13h5v3h-5z\"/></g></svg>",
        } }));
}
exports.default = IconFallback;
//# sourceMappingURL=fallback.js.map