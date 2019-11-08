"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snapTo = function (target, points) {
    return points.length === 0
        ? // extreme last case if there are no points somehow
            target
        : points.reduce(function (point, closest) {
            return Math.abs(closest - target) < Math.abs(point - target)
                ? closest
                : point;
        });
};
exports.handleSides = ['left', 'right'];
exports.alignmentLayouts = ['align-start', 'align-end'];
exports.imageAlignmentMap = {
    left: 'start',
    right: 'end',
};
//# sourceMappingURL=utils.js.map