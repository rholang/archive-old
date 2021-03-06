import { __assign, __extends } from "tslib";
import * as React from 'react';
export var Context = React.createContext(new Map());
export var Provider = function (_a) {
    var children = _a.children;
    return React.createElement(Context.Provider, { value: new Map() }, children);
};
export var withSmartCardStorage = function (WrappedComponent) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.render = function () {
            var _this = this;
            return (React.createElement(Context.Consumer, null, function (storage) { return (React.createElement(WrappedComponent, __assign({}, _this.props, { smartCardStorage: storage }))); }));
        };
        return class_1;
    }(React.Component));
};
//# sourceMappingURL=SmartCardStorage.js.map