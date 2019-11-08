"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var path_1 = require("../../utils/path");
var react_2 = require("../../utils/react");
var TreeItem = /** @class */ (function (_super) {
    tslib_1.__extends(TreeItem, _super);
    function TreeItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.patchDraggableProps = function (draggableProps, snapshot) {
            var _a = _this.props, path = _a.path, offsetPerLevel = _a.offsetPerLevel;
            var transitions = draggableProps.style && draggableProps.style.transition
                ? [draggableProps.style.transition]
                : [];
            if (snapshot.dropAnimation) {
                transitions.push(
                // @ts-ignore
                "padding-left " + snapshot.dropAnimation.duration + "s " + snapshot.dropAnimation.curve);
            }
            var transition = transitions.join(', ');
            return tslib_1.__assign(tslib_1.__assign({}, draggableProps), { style: tslib_1.__assign(tslib_1.__assign({}, draggableProps.style), { 
                    // @ts-ignore
                    paddingLeft: (path.length - 1) * offsetPerLevel, transition: transition }) });
        };
        return _this;
    }
    TreeItem.prototype.shouldComponentUpdate = function (nextProps) {
        return (!react_2.sameProps(this.props, nextProps, ['item', 'provided', 'snapshot']) ||
            !path_1.isSamePath(this.props.path, nextProps.path));
    };
    TreeItem.prototype.render = function () {
        var _a = this.props, item = _a.item, path = _a.path, onExpand = _a.onExpand, onCollapse = _a.onCollapse, renderItem = _a.renderItem, provided = _a.provided, snapshot = _a.snapshot, itemRef = _a.itemRef;
        var innerRef = function (el) {
            itemRef(item.id, el);
            provided.innerRef(el);
        };
        var finalProvided = {
            draggableProps: this.patchDraggableProps(provided.draggableProps, snapshot),
            dragHandleProps: provided.dragHandleProps,
            innerRef: innerRef,
        };
        return renderItem({
            item: item,
            depth: path.length - 1,
            onExpand: function (itemId) { return onExpand(itemId, path); },
            onCollapse: function (itemId) { return onCollapse(itemId, path); },
            provided: finalProvided,
            snapshot: snapshot,
        });
    };
    return TreeItem;
}(react_1.Component));
exports.default = TreeItem;
//# sourceMappingURL=TreeItem.js.map