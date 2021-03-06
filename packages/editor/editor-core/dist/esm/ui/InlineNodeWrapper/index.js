import { __makeTemplateObject } from "tslib";
import * as React from 'react';
import styled from 'styled-components';
/**
 * @see ED-6102: Deleting inline nodes doesn't work properly on Android
 * @see discussion here: https://github.com/ProseMirror/prosemirror/issues/903
 *
 * Implemented a workaround, namely wrapping affected inline nodes into an inline block + block using following helpers.
 * As outcome deletion is handled properly, albeit cursor is still jumping impredictably
 * (this moderately affects the editing experience on Android)
 */
export function createMobileInlineDomRef() {
    var domRef = document.createElement('span');
    domRef.contentEditable = 'false';
    domRef.classList.add('inline-node--mobile');
    return domRef;
}
export var InlineNodeInnerWrapper = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n"], ["\n  display: block;\n"])));
var InlineNodeWrapper = function (_a) {
    var useInlineWrapper = _a.useInlineWrapper, children = _a.children;
    return useInlineWrapper ? (React.createElement(InlineNodeInnerWrapper, null, children)) : (React.createElement(React.Fragment, null, children));
};
export default InlineNodeWrapper;
var templateObject_1;
//# sourceMappingURL=index.js.map