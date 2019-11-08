"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var media_ui_1 = require("@atlaskit/media-ui");
function zoomToFit(imageWidth, imageHeight, visibleBounds) {
    var itemRect = new media_ui_1.Rectangle(imageWidth, imageHeight);
    var scaleFactor = itemRect.scaleToFitSmallestSide(visibleBounds);
    return itemRect.scaled(scaleFactor);
}
exports.zoomToFit = zoomToFit;
function applyConstraints(useConstraints, imageBounds, visibleBounds) {
    if (useConstraints) {
        /* stop imageBounds edges from going inside visibleBounds - this is when useConstraints is true */
        return applyFullConstraints(imageBounds, visibleBounds);
    }
    else {
        /* stop imageBounds edges from going outside visibleBounds - this is when useConstraints is false */
        return applyPartialConstraints(imageBounds, visibleBounds);
    }
}
exports.applyConstraints = applyConstraints;
function applyFullConstraints(imageBounds, visibleBounds) {
    var deltaLeft = visibleBounds.left - imageBounds.left;
    var deltaTop = visibleBounds.top - imageBounds.top;
    var deltaBottom = visibleBounds.bottom - imageBounds.bottom;
    var deltaRight = visibleBounds.right - imageBounds.right;
    var deltaX = 0;
    var deltaY = 0;
    if (imageBounds.right > visibleBounds.right &&
        imageBounds.left > visibleBounds.left) {
        deltaX += deltaLeft;
    }
    if (imageBounds.bottom > visibleBounds.bottom &&
        imageBounds.top > visibleBounds.top) {
        deltaY += deltaTop;
    }
    if (imageBounds.top < visibleBounds.top &&
        imageBounds.bottom < visibleBounds.bottom) {
        deltaY += deltaBottom;
    }
    if (imageBounds.left < visibleBounds.left &&
        imageBounds.right < visibleBounds.right) {
        deltaX += deltaRight;
    }
    return new media_ui_1.Vector2(deltaX, deltaY);
}
exports.applyFullConstraints = applyFullConstraints;
function applyPartialConstraints(imageBounds, visibleBounds) {
    var deltaTop = visibleBounds.top - imageBounds.bottom;
    var deltaBottom = visibleBounds.bottom - imageBounds.top;
    var deltaLeft = visibleBounds.left - imageBounds.right;
    var deltaRight = visibleBounds.right - imageBounds.left;
    var deltaX = 0;
    var deltaY = 0;
    if (imageBounds.right < visibleBounds.left) {
        deltaX += deltaLeft;
    }
    if (imageBounds.bottom < visibleBounds.top) {
        deltaY += deltaTop;
    }
    if (imageBounds.top > visibleBounds.bottom) {
        deltaY += deltaBottom;
    }
    if (imageBounds.left > visibleBounds.right) {
        deltaX += deltaRight;
    }
    return new media_ui_1.Vector2(deltaX, deltaY);
}
exports.applyPartialConstraints = applyPartialConstraints;
function transformVisibleBoundsToImageCoords(visibleBoundsX, visibleBoundsY, imageSourceRect, imageBounds, visibleBounds) {
    var offset = visibleBounds.origin.sub(imageBounds.origin);
    var rect = imageBounds.rect;
    var x = (offset.x + visibleBoundsX) / rect.width;
    var y = (offset.y + visibleBoundsY) / rect.height;
    return new media_ui_1.Vector2(imageSourceRect.width * x, imageSourceRect.height * y).rounded();
}
exports.transformVisibleBoundsToImageCoords = transformVisibleBoundsToImageCoords;
//# sourceMappingURL=constraints.js.map