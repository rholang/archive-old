import { Rectangle, Bounds, Vector2 } from '@atlaskit/media-ui';
/**
 * maximum amount to allow scaling up from "100%"
 * - when the image is smaller than the view size, "100%" is the view size
 * - when the image is larger than the view size, "100%" is the images natural size
 */
export var MAX_SCALE = 1.5;
export var DEFAULT_WIDTH = 100;
export var DEFAULT_HEIGHT = 100;
export var DEFAULT_MARGIN = 10;
export var DEFAULT_INNER_WIDTH = DEFAULT_WIDTH - DEFAULT_MARGIN * 2;
export var DEFAULT_INNER_HEIGHT = DEFAULT_HEIGHT - DEFAULT_MARGIN * 2;
/**
 * This class abstracts viewing an item within a container.
 * This class is display agnostic, it only calculates the geometry.
 * The container can have a uniform margin which allows for transparent clipping of the view area.
 * This creates an inner bounds within the container, which is (container size - margin).
 * When given an item, the viewport will scale up the item bounds to fit the inner bounds.
 * The viewport can work with drag events, but will constrain the item bounds to never be smaller than the minimum container side length.
 * The viewport can work with zoom events, but will constrain the item bounds to never be smaller than the minimum container side length.
 * The viewport can map coordinates from the inner bounds, to the image local coordinates.
 *
 * use cases:
 *  - load image: this.setItemSize(w, h)
 *  - change scale: this.setScale(0 - 100);
 *  - pan image: this.startDrag().dragMove(deltaX, deltaY)
 *  - map view coord to image source: this.viewToLocalPoint(viewX, viewY)
 */
var Viewport = /** @class */ (function () {
    function Viewport(width, height, margin) {
        if (width === void 0) { width = DEFAULT_WIDTH; }
        if (height === void 0) { height = DEFAULT_HEIGHT; }
        if (margin === void 0) { margin = DEFAULT_MARGIN; }
        this.width = width;
        this.height = height;
        this.margin = margin;
        this.itemSourceRect = new Rectangle(0, 0);
        this.dragStartPos = new Vector2(0, 0);
        this.itemBounds = new Bounds(0, 0, 0, 0);
        this.orientation = 1;
        // it's assumed we won't have an item size yet as it is something that requires async loading.
        // when ready, call setItemSize(w, h) to "load/init" the item for the viewport
    }
    Viewport.prototype.zoomToFit = function () {
        this.itemBounds = this.fittedItemBounds;
        return this;
    };
    Viewport.prototype.applyConstraints = function () {
        var _a = this, innerBounds = _a.innerBounds, itemBounds = _a.itemBounds;
        var deltaLeft = innerBounds.left - itemBounds.left;
        var deltaTop = innerBounds.top - itemBounds.top;
        var deltaBottom = innerBounds.bottom - itemBounds.bottom;
        var deltaRight = innerBounds.right - itemBounds.right;
        var x = itemBounds.left;
        var y = itemBounds.top;
        if (itemBounds.right > innerBounds.right &&
            itemBounds.left > innerBounds.left) {
            x += deltaLeft;
        }
        if (itemBounds.bottom > innerBounds.bottom &&
            itemBounds.top > innerBounds.top) {
            y += deltaTop;
        }
        if (itemBounds.top < innerBounds.top &&
            itemBounds.bottom < innerBounds.bottom) {
            y += deltaBottom;
        }
        if (itemBounds.left < innerBounds.left &&
            itemBounds.right < innerBounds.right) {
            x += deltaRight;
        }
        this.itemBounds = new Bounds(x, y, itemBounds.width, itemBounds.height);
    };
    Object.defineProperty(Viewport.prototype, "innerBounds", {
        get: function () {
            var _a = this, margin = _a.margin, width = _a.width, height = _a.height;
            return new Bounds(margin, margin, width - margin * 2, height - margin * 2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "outerBounds", {
        get: function () {
            return new Bounds(0, 0, this.width, this.height);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "visibleSourceBounds", {
        get: function () {
            var innerBounds = this.innerBounds;
            var origin = this.viewToLocalPoint(0, 0);
            var corner = this.viewToLocalPoint(innerBounds.width, innerBounds.height);
            return new Bounds(origin.x, origin.y, corner.x - origin.x, corner.y - origin.y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "itemSourceBounds", {
        get: function () {
            var itemSourceRect = this.itemSourceRect;
            return new Bounds(0, 0, itemSourceRect.width, itemSourceRect.height);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "fittedItemBounds", {
        get: function () {
            var _a = this, margin = _a.margin, itemSourceRect = _a.itemSourceRect, innerBounds = _a.innerBounds;
            var ratio = itemSourceRect.scaleToFitSmallestSide(innerBounds.rect);
            var width = itemSourceRect.width * ratio;
            var height = itemSourceRect.height * ratio;
            var x = margin + (innerBounds.width - width) * 0.5;
            var y = margin + (innerBounds.height - height) * 0.5;
            return new Bounds(x, y, width, height);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "isEmpty", {
        get: function () {
            return this.itemSourceRect.width <= 0 && this.itemSourceRect.height <= 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "maxScale", {
        get: function () {
            var _a = this, itemSourceBounds = _a.itemSourceBounds, innerBounds = _a.innerBounds;
            var minSize = Math.min(itemSourceBounds.width, itemSourceBounds.height);
            if (minSize <= innerBounds.width) {
                return MAX_SCALE;
            }
            else {
                return (minSize * MAX_SCALE) / innerBounds.width;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "maxItemViewRect", {
        get: function () {
            var _a = this, fittedItemBounds = _a.fittedItemBounds, maxScale = _a.maxScale;
            var maxWidth = fittedItemBounds.width * maxScale;
            var maxHeight = fittedItemBounds.height * maxScale;
            return new Rectangle(maxWidth, maxHeight);
        },
        enumerable: true,
        configurable: true
    });
    Viewport.prototype.clear = function () {
        this.itemBounds = new Bounds(0, 0, 0, 0);
        this.itemSourceRect = new Rectangle(0, 0);
        delete this.item;
    };
    Viewport.prototype.setItemSize = function (width, height) {
        this.itemSourceRect = new Rectangle(width, height);
        this.zoomToFit();
        return this;
    };
    Viewport.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    Viewport.prototype.setScale = function (scale) {
        // number between 0 - 100
        var _a = this, fittedItemBounds = _a.fittedItemBounds, maxItemViewRect = _a.maxItemViewRect, itemBounds = _a.itemBounds, innerBounds = _a.innerBounds;
        if (scale <= 1) {
            this.itemBounds = fittedItemBounds;
        }
        else {
            var clampedScale = Math.min(100, scale);
            var floatingScale = clampedScale / 100;
            var width = fittedItemBounds.width +
                (maxItemViewRect.width - fittedItemBounds.width) * floatingScale;
            var height = fittedItemBounds.height +
                (maxItemViewRect.height - fittedItemBounds.height) * floatingScale;
            var scaledBounds = new Bounds(itemBounds.x, itemBounds.y, width, height);
            var localCenterBefore = this.viewToLocalPoint(innerBounds.width * 0.5, innerBounds.height * 0.5);
            var center = itemBounds.center;
            var left = center.x - scaledBounds.width * 0.5;
            var top_1 = center.y - scaledBounds.height * 0.5;
            this.itemBounds = new Bounds(left, top_1, scaledBounds.width, scaledBounds.height);
            var localCenterAfter = this.viewToLocalPoint(innerBounds.width * 0.5, innerBounds.height * 0.5);
            this.itemBounds = this.itemBounds.translated(localCenterAfter.x - localCenterBefore.x, localCenterAfter.y - localCenterBefore.y);
            this.applyConstraints();
        }
        return this;
    };
    Viewport.prototype.startDrag = function () {
        this.dragStartPos = this.itemBounds.origin;
        return this;
    };
    Viewport.prototype.dragBy = function (xDelta, yDelta) {
        return this.startDrag().dragMove(xDelta, yDelta);
    };
    Viewport.prototype.dragMove = function (xDelta, yDelta) {
        var _a = this, dragStartPos = _a.dragStartPos, itemBounds = _a.itemBounds;
        var x = dragStartPos.x + xDelta;
        var y = dragStartPos.y + yDelta;
        this.itemBounds = new Bounds(x, y, itemBounds.width, itemBounds.height);
        this.applyConstraints();
        return this;
    };
    Viewport.prototype.viewToLocalPoint = function (viewX, viewY) {
        var _a = this, itemSourceRect = _a.itemSourceRect, itemBounds = _a.itemBounds, innerBounds = _a.innerBounds;
        var offset = innerBounds.origin.sub(itemBounds.origin);
        var rect = itemBounds.rect;
        var localX = (offset.x + viewX) / rect.width;
        var localY = (offset.y + viewY) / rect.height;
        return new Vector2(itemSourceRect.width * localX, itemSourceRect.height * localY);
    };
    return Viewport;
}());
export { Viewport };
//# sourceMappingURL=viewport.js.map