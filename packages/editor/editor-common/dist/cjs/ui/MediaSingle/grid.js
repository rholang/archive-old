"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handleMargin = 12;
var gutterSize = handleMargin * 2;
var validWidthModes = [
    'center',
    'wrap-left',
    'wrap-right',
    'align-start',
    'align-end',
];
exports.layoutSupportsWidth = function (layout) {
    return validWidthModes.indexOf(layout) > -1;
};
function calcPxFromColumns(columns, lineLength, gridSize) {
    var maxWidth = lineLength + gutterSize;
    return (maxWidth / gridSize) * columns - gutterSize;
}
exports.calcPxFromColumns = calcPxFromColumns;
function calcColumnsFromPx(width, lineLength, gridSize) {
    var maxWidth = lineLength + gutterSize;
    return ((width + gutterSize) * gridSize) / maxWidth;
}
exports.calcColumnsFromPx = calcColumnsFromPx;
function calcPxFromPct(pct, lineLength) {
    var maxWidth = lineLength + gutterSize;
    return maxWidth * pct - gutterSize;
}
exports.calcPxFromPct = calcPxFromPct;
function calcPctFromPx(width, lineLength) {
    var maxWidth = lineLength + gutterSize;
    return (width + gutterSize) / maxWidth;
}
exports.calcPctFromPx = calcPctFromPx;
exports.snapToGrid = function (gridWidth, width, height, lineLength, gridSize) {
    var pxWidth = calcPxFromPct(gridWidth / 100, lineLength);
    var columnSpan = Math.round(calcColumnsFromPx(pxWidth, lineLength, gridSize));
    var alignedWidth = calcPxFromColumns(columnSpan, lineLength, gridSize);
    return {
        height: (height / width) * alignedWidth,
        width: alignedWidth,
    };
};
//# sourceMappingURL=grid.js.map