/**
 * Walks a DOM tree up to the provided `stopElement`, or if falsy before.
 * @param element
 * @param stopElement
 */
export function walkUpTreeUntil(
  element: HTMLElement,
  shouldStop: (element: HTMLElement) => boolean,
) {
  let rootElement = element;
  while (rootElement && rootElement.parentElement && !shouldStop(rootElement)) {
    rootElement = rootElement.parentElement;
  }

  return rootElement;
}

/**
 * Takes all children out from wrapped el and puts them directly inside
 * the parent el, at the wrapped el's position
 */
export function unwrap(parent: HTMLElement, wrapped: HTMLElement) {
  const docsFragment = document.createDocumentFragment();
  Array.from(wrapped.children).forEach((child: Node) => {
    docsFragment.appendChild(child);
  });
  parent.replaceChild(docsFragment, wrapped);
}

/**
 * Walks up DOM removing elements if they are empty until it finds
 * one that is not
 */
export function removeNestedEmptyEls(el: HTMLElement) {
  while (
    el.parentElement &&
    el.childElementCount === 0 &&
    el.textContent === ''
  ) {
    const parentEl = el.parentElement;
    parentEl.removeChild(el);
    el = parentEl;
  }
}

/**
 * IE11 doesn't support classList to SVGElements
 **/
export const containsClassName = (
  node: HTMLElement | SVGElement,
  className: string,
): boolean => {
  if (!node) {
    return false;
  }

  if (node.classList && node.classList.contains) {
    return node.classList.contains(className);
  }

  if (!node.className) {
    return false;
  }

  const classNames =
    typeof node.className.baseVal === 'string'
      ? node.className.baseVal
      : node.className;
  return classNames.split(' ').indexOf(className) !== -1;
};
