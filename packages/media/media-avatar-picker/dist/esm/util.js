export function fileSizeMb(file) {
    return file.size / 1024 / 1024;
}
export function getCanvas(width, height) {
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext('2d');
    return { canvas: canvas, context: context };
}
//# sourceMappingURL=util.js.map