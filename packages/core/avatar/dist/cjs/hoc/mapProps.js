"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var utils_1 = require("../utils");
function mapProps(mapping) {
    return function (DecoratedComponent) { var _a; return _a = /** @class */ (function (_super) {
            tslib_1.__extends(MapProps, _super);
            function MapProps() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                // expose blur/focus to consumers via ref
                _this.blur = function () {
                    // @ts-ignore accessing component internals
                    if (_this.component && _this.component.blur)
                        _this.component.blur();
                };
                _this.focus = function () {
                    // @ts-ignore accessing component internals
                    if (_this.component && _this.component.focus)
                        _this.component.focus();
                };
                _this.setComponent = function (component) {
                    _this.component = component;
                };
                return _this;
            }
            MapProps.prototype.render = function () {
                var _this = this;
                var mapped = tslib_1.__assign(tslib_1.__assign({}, this.props), Object.keys(mapping).reduce(function (acc, key) {
                    var _a;
                    return (tslib_1.__assign(tslib_1.__assign({}, acc), (_a = {}, _a[key] = mapping[key](_this.props), _a)));
                }, {}));
                return react_1.default.createElement(DecoratedComponent, tslib_1.__assign({ ref: this.setComponent }, mapped));
            };
            return MapProps;
        }(react_1.Component)),
        _a.displayName = utils_1.getDisplayName('mapProps', DecoratedComponent),
        _a.DecoratedComponent = DecoratedComponent,
        _a; };
}
exports.default = mapProps;
//# sourceMappingURL=mapProps.js.map