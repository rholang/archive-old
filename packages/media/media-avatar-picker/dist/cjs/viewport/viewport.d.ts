import { Rectangle, Bounds, Vector2 } from '@atlaskit/media-ui';
/**
 * maximum amount to allow scaling up from "100%"
 * - when the image is smaller than the view size, "100%" is the view size
 * - when the image is larger than the view size, "100%" is the images natural size
 */
export declare const MAX_SCALE = 1.5;
export declare const DEFAULT_WIDTH = 100;
export declare const DEFAULT_HEIGHT = 100;
export declare const DEFAULT_MARGIN = 10;
export declare const DEFAULT_INNER_WIDTH: number;
export declare const DEFAULT_INNER_HEIGHT: number;
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
export declare class Viewport {
    readonly width: number;
    readonly height: number;
    readonly margin: number;
    private itemSourceRect;
    private dragStartPos;
    itemBounds: Bounds;
    orientation: number;
    item?: any;
    constructor(width?: number, height?: number, margin?: number);
    private zoomToFit;
    private applyConstraints;
    readonly innerBounds: Bounds;
    readonly outerBounds: Bounds;
    readonly visibleSourceBounds: Bounds;
    readonly itemSourceBounds: Bounds;
    readonly fittedItemBounds: Bounds;
    readonly isEmpty: boolean;
    readonly maxScale: number;
    readonly maxItemViewRect: Rectangle;
    clear(): void;
    setItemSize(width: number, height: number): this;
    setItem(item: any): this;
    setScale(scale: number): this;
    startDrag(): this;
    dragBy(xDelta: number, yDelta: number): this;
    dragMove(xDelta: number, yDelta: number): this;
    viewToLocalPoint(viewX: number, viewY: number): Vector2;
}
