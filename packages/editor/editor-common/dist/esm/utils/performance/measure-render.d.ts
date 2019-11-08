/**
 * Measures time it takes to render a frame including -> style, paint, layout and composition.
 *
 * How does it work:
 * 1. We mark the beginning of a render with the `startMark`
 * 2. We schedule `requestAnimationFrame` callback for the next frame
 * 3. Framework (e.g. prosemirror) does its magic and mounts dom nodes "synchronously"
 * 4. When the main thread is unblocked our callback gets executed and onMeasureComplete is being called
 *
 * Why does it work:
 * | javascript (framework)           | style | layout | paint | composite | javascript  | ...
 *  | startMark + scheduling rAF |                                                       | rAF callback, endMark
 */
export declare function measureRender(measureName: string, onMeasureComplete: (duration: number, startTime: number) => void): void;
