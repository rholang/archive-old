import { __assign, __extends } from "tslib";
import * as React from 'react';
import { NodeSelection } from 'prosemirror-state';
import { stateKey as SelectionChangePluginKey, } from '../plugins/base/pm-plugins/react-nodeview';
var ReactNodeView = /** @class */ (function () {
    function ReactNodeView(node, view, getPos, portalProviderAPI, reactComponentProps, reactComponent, hasContext, viewShouldUpdate) {
        var _this = this;
        if (hasContext === void 0) { hasContext = false; }
        this.handleRef = function (node) { return _this._handleRef(node); };
        this.node = node;
        this.view = view;
        this.getPos = getPos;
        this.portalProviderAPI = portalProviderAPI;
        this.reactComponentProps = reactComponentProps || {};
        this.reactComponent = reactComponent;
        this.hasContext = hasContext;
        this._viewShouldUpdate = viewShouldUpdate;
    }
    /**
     * This method exists to move initialization logic out of the constructor,
     * so object can be initialized properly before calling render first time.
     *
     * Example:
     * Instance properties get added to an object only after super call in
     * constructor, which leads to some methods being undefined during the
     * first render.
     */
    ReactNodeView.prototype.init = function () {
        var _this = this;
        this.domRef = this.createDomRef();
        this.setDomAttrs(this.node, this.domRef);
        var _a = this.getContentDOM() || {
            dom: undefined,
            contentDOM: undefined,
        }, contentDOMWrapper = _a.dom, contentDOM = _a.contentDOM;
        if (this.domRef && contentDOMWrapper) {
            this.domRef.appendChild(contentDOMWrapper);
            this.contentDOM = contentDOM ? contentDOM : contentDOMWrapper;
            this.contentDOMWrapper = contentDOMWrapper || contentDOM;
        }
        // @see ED-3790
        // something gets messed up during mutation processing inside of a
        // nodeView if DOM structure has nested plain "div"s, it doesn't see the
        // difference between them and it kills the nodeView
        this.domRef.classList.add(this.node.type.name + "View-content-wrap");
        this.renderReactComponent(function () {
            return _this.render(_this.reactComponentProps, _this.handleRef);
        });
        return this;
    };
    ReactNodeView.prototype.renderReactComponent = function (component) {
        if (!this.domRef || !component) {
            return;
        }
        this.portalProviderAPI.render(component, this.domRef, this.hasContext);
    };
    ReactNodeView.prototype.createDomRef = function () {
        return this.node.isInline
            ? document.createElement('span')
            : document.createElement('div');
    };
    ReactNodeView.prototype.getContentDOM = function () {
        return undefined;
    };
    ReactNodeView.prototype._handleRef = function (node) {
        var contentDOM = this.contentDOMWrapper || this.contentDOM;
        // move the contentDOM node inside the inner reference after rendering
        if (node && contentDOM && !node.contains(contentDOM)) {
            node.appendChild(contentDOM);
        }
    };
    ReactNodeView.prototype.render = function (props, forwardRef) {
        return this.reactComponent ? (React.createElement(this.reactComponent, __assign({ view: this.view, getPos: this.getPos, node: this.node, forwardRef: forwardRef }, props))) : null;
    };
    ReactNodeView.prototype.update = function (node, _decorations, validUpdate) {
        var _this = this;
        if (validUpdate === void 0) { validUpdate = function () { return true; }; }
        // @see https://github.com/ProseMirror/prosemirror/issues/648
        var isValidUpdate = this.node.type === node.type && validUpdate(this.node, node);
        if (!isValidUpdate) {
            return false;
        }
        if (this.domRef && !this.node.sameMarkup(node)) {
            this.setDomAttrs(node, this.domRef);
        }
        // View should not process a re-render if this is false.
        // We dont want to destroy the view, so we return true.
        if (!this.viewShouldUpdate(node)) {
            this.node = node;
            return true;
        }
        this.node = node;
        this.renderReactComponent(function () {
            return _this.render(_this.reactComponentProps, _this.handleRef);
        });
        return true;
    };
    ReactNodeView.prototype.viewShouldUpdate = function (nextNode) {
        if (this._viewShouldUpdate) {
            return this._viewShouldUpdate(nextNode);
        }
        return true;
    };
    /**
     * Copies the attributes from a ProseMirror Node to a DOM node.
     * @param node The Prosemirror Node from which to source the attributes
     */
    ReactNodeView.prototype.setDomAttrs = function (node, element) {
        Object.keys(node.attrs || {}).forEach(function (attr) {
            element.setAttribute(attr, node.attrs[attr]);
        });
    };
    Object.defineProperty(ReactNodeView.prototype, "dom", {
        get: function () {
            return this.domRef;
        },
        enumerable: true,
        configurable: true
    });
    ReactNodeView.prototype.destroy = function () {
        if (!this.domRef) {
            return;
        }
        this.portalProviderAPI.remove(this.domRef);
        this.domRef = undefined;
        this.contentDOM = undefined;
    };
    ReactNodeView.fromComponent = function (component, portalProviderAPI, props, viewShouldUpdate) {
        return function (node, view, getPos) {
            return new ReactNodeView(node, view, getPos, portalProviderAPI, props, component, false, viewShouldUpdate).init();
        };
    };
    return ReactNodeView;
}());
export default ReactNodeView;
/**
 * A ReactNodeView that handles React components sensitive
 * to selection changes.
 *
 * If the selection changes, it will attempt to re-render the
 * React component. Otherwise it does nothing.
 *
 * You can subclass `viewShouldUpdate` to include other
 * props that your component might want to consider before
 * entering the React lifecycle. These are usually props you
 * compare in `shouldComponentUpdate`.
 *
 * An example:
 *
 * ```
 * viewShouldUpdate(nextNode) {
 *   if (nextNode.attrs !== this.node.attrs) {
 *     return true;
 *   }
 *
 *   return super.viewShouldUpdate(nextNode);
 * }```
 */
var SelectionBasedNodeView = /** @class */ (function (_super) {
    __extends(SelectionBasedNodeView, _super);
    function SelectionBasedNodeView(node, view, getPos, portalProviderAPI, reactComponentProps, reactComponent, hasContext, viewShouldUpdate) {
        if (hasContext === void 0) { hasContext = false; }
        var _this = _super.call(this, node, view, getPos, portalProviderAPI, reactComponentProps, reactComponent, hasContext, viewShouldUpdate) || this;
        _this.isSelectionInsideNode = function (from, to, pos, posEnd) {
            pos = typeof pos !== 'number' ? _this.pos : pos;
            posEnd = typeof posEnd !== 'number' ? _this.posEnd : posEnd;
            if (typeof pos !== 'number' || typeof posEnd !== 'number') {
                return false;
            }
            return pos < from && to < posEnd;
        };
        _this.isSelectedNode = function (selection) {
            if (selection instanceof NodeSelection) {
                var _a = _this.view.state.selection, from = _a.from, to = _a.to;
                return (selection.node === _this.node ||
                    // If nodes are not the same object, we check if they are referring to the same document node
                    (_this.pos === from &&
                        _this.posEnd === to &&
                        selection.node.eq(_this.node)));
            }
            return false;
        };
        _this.insideSelection = function () {
            var _a = _this.view.state.selection, from = _a.from, to = _a.to;
            return (_this.isSelectedNode(_this.view.state.selection) ||
                _this.isSelectionInsideNode(from, to));
        };
        _this.onSelectionChange = function () {
            _this.update(_this.node, []);
        };
        _this.updatePos();
        _this.oldSelection = view.state.selection;
        _this.selectionChangeState = SelectionChangePluginKey.getState(_this.view.state);
        _this.selectionChangeState.subscribe(_this.onSelectionChange);
        return _this;
    }
    /**
     * Update current node's start and end positions.
     *
     * Prefer `this.pos` rather than getPos(), because calling getPos is
     * expensive, unless you know you're definitely going to render.
     */
    SelectionBasedNodeView.prototype.updatePos = function () {
        this.pos = this.getPos();
        this.posEnd = this.pos + this.node.nodeSize;
    };
    SelectionBasedNodeView.prototype.viewShouldUpdate = function (_nextNode) {
        var selection = this.view.state.selection;
        // update selection
        var oldSelection = this.oldSelection;
        this.oldSelection = selection;
        // update cached positions
        var _a = this, oldPos = _a.pos, oldPosEnd = _a.posEnd;
        this.updatePos();
        var from = selection.from, to = selection.to;
        var oldFrom = oldSelection.from, oldTo = oldSelection.to;
        if (this.node.type.spec.selectable) {
            var newNodeSelection = selection instanceof NodeSelection && selection.from === this.pos;
            var oldNodeSelection = oldSelection instanceof NodeSelection && oldSelection.from === this.pos;
            if ((newNodeSelection && !oldNodeSelection) ||
                (oldNodeSelection && !newNodeSelection)) {
                return true;
            }
        }
        var movedInToSelection = this.isSelectionInsideNode(from, to) &&
            !this.isSelectionInsideNode(oldFrom, oldTo);
        var movedOutOfSelection = !this.isSelectionInsideNode(from, to) &&
            this.isSelectionInsideNode(oldFrom, oldTo);
        var moveOutFromOldSelection = this.isSelectionInsideNode(from, to, oldPos, oldPosEnd) &&
            !this.isSelectionInsideNode(from, to);
        if (movedInToSelection || movedOutOfSelection || moveOutFromOldSelection) {
            return true;
        }
        return false;
    };
    SelectionBasedNodeView.prototype.destroy = function () {
        this.selectionChangeState.unsubscribe(this.onSelectionChange);
        _super.prototype.destroy.call(this);
    };
    return SelectionBasedNodeView;
}(ReactNodeView));
export { SelectionBasedNodeView };
//# sourceMappingURL=ReactNodeView.js.map