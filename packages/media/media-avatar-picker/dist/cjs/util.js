"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fileSizeMb(file) {
    return file.size / 1024 / 1024;
}
exports.fileSizeMb = fileSizeMb;
function getCanvas(width, height) {
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext('2d');
    return { canvas: canvas, context: context };
}
exports.getCanvas = getCanvas;
//# sourceMappingURL=util.js.map