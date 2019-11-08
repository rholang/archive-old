"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
// We need to import Bricks in both ways because the way they create the dist doesn't play well with TS
var bricks_js_1 = tslib_1.__importDefault(require("bricks.js"));
var Bricks = tslib_1.__importStar(require("bricks.js"));
var BricksLayout = /** @class */ (function (_super) {
    tslib_1.__extends(BricksLayout, _super);
    function BricksLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BricksLayout.prototype.componentDidMount = function () {
        var _a = this.props, id = _a.id, _b = _a.packed, packed = _b === void 0 ? 'data-packed' : _b, _c = _a.sizes, sizes = _c === void 0 ? [{ columns: 3, gutter: 10 }] : _c;
        // We try to use the TS import, otherwise we use the "default" export
        var BricksConstructor = (typeof Bricks === 'function'
            ? Bricks
            : bricks_js_1.default);
        var instance = BricksConstructor({
            container: "#" + id,
            packed: packed,
            sizes: sizes,
        });
        instance.resize(true);
        this.setState({ instance: instance });
    };
    BricksLayout.prototype.componentDidUpdate = function (_a) {
        var prevChildren = _a.children;
        var children = this.props.children;
        var instance = this.state.instance;
        if (prevChildren.length === 0 && children.length === 0) {
            return;
        }
        return instance.pack();
    };
    BricksLayout.prototype.componentWillUnmount = function () {
        this.state.instance.resize(false);
    };
    BricksLayout.prototype.render = function () {
        var _a = this.props, id = _a.id, children = _a.children;
        return React.createElement("div", { id: id }, children);
    };
    BricksLayout.defaultProps = {
        packed: 'data-packed',
        sizes: [{ columns: 3, gutter: 10 }],
    };
    return BricksLayout;
}(react_1.Component));
exports.BricksLayout = BricksLayout;
//# sourceMappingURL=bricksGrid.js.map