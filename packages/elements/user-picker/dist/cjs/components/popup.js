"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var memoize_one_1 = tslib_1.__importDefault(require("memoize-one"));
exports.getPopupProps = memoize_one_1.default(function (width, target, onFlip, popupTitle, boundariesElement) { return ({
    searchThreshold: -1,
    controlShouldRenderValue: true,
    minMenuWidth: width,
    maxMenuWidth: width,
    autoFocus: false,
    target: target,
    popupTitle: popupTitle,
    popperProps: {
        modifiers: {
            handleFlipStyle: {
                enabled: true,
                order: 910,
                fn: function (data) { return onFlip(data); },
            },
            preventOverflow: {
                boundariesElement: boundariesElement || 'viewport',
            },
        },
    },
}); });
//# sourceMappingURL=popup.js.map