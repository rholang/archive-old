export var radians = function (deg) { return deg * (Math.PI / 180); };
export var renderViewport = function (viewport, image, canvas) {
    if (canvas === void 0) { canvas = document.createElement('canvas'); }
    var visibleSourceBounds = viewport.visibleSourceBounds, innerBounds = viewport.innerBounds, itemSourceBounds = viewport.itemSourceBounds, orientation = viewport.orientation;
    var sourceBounds = visibleSourceBounds;
    var width = innerBounds.width, height = innerBounds.height;
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');
    if (ctx && image) {
        switch (orientation) {
            case 2:
                sourceBounds = sourceBounds.hFlipWithin(itemSourceBounds);
                ctx.translate(width, 0);
                ctx.scale(-1, 1);
                break;
            case 3:
                sourceBounds = sourceBounds
                    .hFlipWithin(itemSourceBounds)
                    .vFlipWithin(itemSourceBounds);
                ctx.translate(width, height);
                ctx.scale(-1, -1);
                break;
            case 4:
                sourceBounds = sourceBounds.vFlipWithin(itemSourceBounds);
                ctx.translate(0, height);
                ctx.scale(1, -1);
                break;
            case 5:
                sourceBounds = sourceBounds
                    .hFlipWithin(itemSourceBounds)
                    .rotate90DegWithin(itemSourceBounds);
                ctx.translate(height, 0);
                ctx.rotate(radians(90));
                ctx.translate(0, height);
                ctx.scale(1, -1);
                break;
            case 6:
                sourceBounds = sourceBounds.rotate90DegWithin(itemSourceBounds);
                ctx.translate(height, 0);
                ctx.rotate(radians(90));
                break;
            case 7:
                sourceBounds = sourceBounds
                    .vFlipWithin(itemSourceBounds)
                    .rotate90DegWithin(itemSourceBounds);
                ctx.translate(height, 0);
                ctx.rotate(radians(90));
                ctx.translate(width, 0);
                ctx.scale(-1, 1);
                break;
            case 8:
                sourceBounds = sourceBounds
                    .hFlipWithin(itemSourceBounds)
                    .vFlipWithin(itemSourceBounds)
                    .rotate90DegWithin(itemSourceBounds);
                ctx.translate(height, 0);
                ctx.rotate(radians(90));
                ctx.translate(width, height);
                ctx.scale(-1, -1);
                break;
        }
        ctx.drawImage(image, sourceBounds.x, sourceBounds.y, sourceBounds.width, sourceBounds.height, 0, 0, width, height);
        return canvas;
    }
    else {
        return null;
    }
};
//# sourceMappingURL=viewport-render.js.map