"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isRetina() {
    var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)';
    return (window.devicePixelRatio > 1 ||
        (window.matchMedia && window.matchMedia(mediaQuery).matches));
}
exports.isRetina = isRetina;
//# sourceMappingURL=isRetina.js.map