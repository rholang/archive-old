"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_1 = tslib_1.__importDefault(require("./styled"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var grid_1 = require("./grid");
exports.DEFAULT_IMAGE_WIDTH = 250;
exports.DEFAULT_IMAGE_HEIGHT = 200;
function MediaSingle(_a) {
    var children = _a.children, layout = _a.layout, width = _a.width, height = _a.height, _b = _a.containerWidth, containerWidth = _b === void 0 ? width : _b, _c = _a.isLoading, isLoading = _c === void 0 ? false : _c, pctWidth = _a.pctWidth, lineLength = _a.lineLength, className = _a.className, fullWidthMode = _a.fullWidthMode;
    var usePctWidth = pctWidth && grid_1.layoutSupportsWidth(layout);
    if (pctWidth && usePctWidth) {
        var pxWidth = Math.ceil(grid_1.calcPxFromPct(pctWidth / 100, lineLength || containerWidth));
        // scale, keeping aspect ratio
        height = (height / width) * pxWidth;
        width = pxWidth;
    }
    return (React.createElement(styled_1.default, { layout: layout, width: width, height: height, containerWidth: containerWidth, pctWidth: pctWidth, fullWidthMode: fullWidthMode, "data-node-type": "mediaSingle", "data-layout": layout, "data-width": pctWidth, className: classnames_1.default('media-single', "image-" + layout, className, {
            'is-loading': isLoading,
            'media-wrapped': layout === 'wrap-left' || layout === 'wrap-right',
        }) }, React.Children.only(children)));
}
exports.default = MediaSingle;
//# sourceMappingURL=index.js.map