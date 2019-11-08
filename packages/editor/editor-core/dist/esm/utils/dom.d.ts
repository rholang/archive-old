/**
 * Walks a DOM tree up to the provided `stopElement`, or if falsy before.
 * @param element
 * @param stopElement
 */
export declare function walkUpTreeUntil(element: HTMLElement, shouldStop: (element: HTMLElement) => boolean): HTMLElement;
/**
 * Takes all children out from wrapped el and puts them directly inside
 * the parent el, at the wrapped el's position
 */
export declare function unwrap(parent: HTMLElement, wrapped: HTMLElement): void;
/**
 * Walks up DOM removing elements if they are empty until it finds
 * one that is not
 */
export declare function removeNestedEmptyEls(el: HTMLElement): void;
/**
 * IE11 doesn't support classList to SVGElements
 **/
export declare const containsClassName: (node: HTMLElement | SVGElement, className: string) => boolean;
