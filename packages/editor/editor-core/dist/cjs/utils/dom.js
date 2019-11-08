"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Walks a DOM tree up to the provided `stopElement`, or if falsy before.
 * @param element
 * @param stopElement
 */
function walkUpTreeUntil(element, shouldStop) {
    var rootElement = element;
    while (rootElement && rootElement.parentElement && !shouldStop(rootElement)) {
        rootElement = rootElement.parentElement;
    }
    return rootElement;
}
exports.walkUpTreeUntil = walkUpTreeUntil;
/**
 * Takes all children out from wrapped el and puts them directly inside
 * the parent el, at the wrapped el's position
 */
function unwrap(parent, wrapped) {
    var docsFragment = document.createDocumentFragment();
    Array.from(wrapped.children).forEach(function (child) {
        docsFragment.appendChild(child);
    });
    parent.replaceChild(docsFragment, wrapped);
}
exports.unwrap = unwrap;
/**
 * Walks up DOM removing elements if they are empty until it finds
 * one that is not
 */
function removeNestedEmptyEls(el) {
    while (el.parentElement &&
        el.childElementCount === 0 &&
        el.textContent === '') {
        var parentEl = el.parentElement;
        parentEl.removeChild(el);
        el = parentEl;
    }
}
exports.removeNestedEmptyEls = removeNestedEmptyEls;
/**
 * IE11 doesn't support classList to SVGElements
 **/
exports.containsClassName = function (node, className) {
    if (!node) {
        return false;
    }
    if (node.classList && node.classList.contains) {
        return node.classList.contains(className);
    }
    if (!node.className) {
        return false;
    }
    var classNames = typeof node.className.baseVal === 'string'
        ? node.className.baseVal
        : node.className;
    return classNames.split(' ').indexOf(className) !== -1;
};
//# sourceMappingURL=dom.js.map