"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mouseLocation(event) {
    return {
        x: event.clientX,
        y: event.clientY,
    };
}
exports.mouseLocation = mouseLocation;
// Used to prevent invalid mouse move detection on scroll
// lastPosition is object (x, y)
function actualMouseMove(oldPosition, newPosition) {
    if (!oldPosition ||
        oldPosition.x !== newPosition.x ||
        oldPosition.y !== newPosition.y) {
        return true;
    }
    return false;
}
exports.actualMouseMove = actualMouseMove;
function leftClick(reactEvent) {
    return (reactEvent.button === 0 &&
        !reactEvent.altKey &&
        !reactEvent.ctrlKey &&
        !reactEvent.metaKey &&
        !reactEvent.shiftKey);
}
exports.leftClick = leftClick;
//# sourceMappingURL=mouse.js.map