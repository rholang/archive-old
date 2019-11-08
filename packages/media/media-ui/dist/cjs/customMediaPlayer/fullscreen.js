"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var capitalize = function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
};
exports.vendorify = function (propName, capitalizeText) {
    if (capitalizeText === void 0) { capitalizeText = true; }
    var prefix = '';
    if (HTMLElement.prototype.webkitRequestFullscreen) {
        prefix = 'webkit';
    }
    else if (HTMLElement.prototype['mozRequestFullScreen']) {
        prefix = 'moz';
    }
    else if (HTMLElement.prototype['msRequestFullScreen']) {
        prefix = 'ms';
    }
    var capitalizeProp = capitalizeText !== undefined ? capitalizeText : !!prefix;
    return "" + prefix + (capitalizeProp ? capitalize(propName) : propName);
};
exports.requestFullscreen = function (element) {
    var methodName = exports.vendorify('requestFullScreen');
    if (methodName && element[methodName]) {
        element[methodName]();
    }
};
exports.exitFullscreen = function () {
    var methodName = exports.vendorify('exitFullscreen');
    if (methodName && document[methodName]) {
        document[methodName]();
    }
};
exports.getFullscreenElement = function () {
    var propertyName = exports.vendorify('fullscreenElement');
    return propertyName && document[propertyName];
};
exports.toggleFullscreen = function (element) {
    if (exports.getFullscreenElement()) {
        exports.exitFullscreen();
    }
    else if (element) {
        exports.requestFullscreen(element);
    }
};
//# sourceMappingURL=fullscreen.js.map