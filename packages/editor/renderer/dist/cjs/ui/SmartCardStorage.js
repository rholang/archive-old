"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
exports.Context = React.createContext(new Map());
exports.Provider = function (_a) {
    var children = _a.children;
    return React.createElement(exports.Context.Provider, { value: new Map() }, children);
};
exports.withSmartCardStorage = function (WrappedComponent) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.render = function () {
            var _this = this;
            return (React.createElement(exports.Context.Consumer, null, function (storage) { return (React.createElement(WrappedComponent, tslib_1.__assign({}, _this.props, { smartCardStorage: storage }))); }));
        };
        return class_1;
    }(React.Component));
};
//# sourceMappingURL=SmartCardStorage.js.map