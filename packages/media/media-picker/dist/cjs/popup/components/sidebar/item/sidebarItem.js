"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var changeService_1 = require("../../../actions/changeService");
var styled_1 = require("./styled");
var StatelessSidebarItem = /** @class */ (function (_super) {
    tslib_1.__extends(StatelessSidebarItem, _super);
    function StatelessSidebarItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function () { return _this.props.onChangeService(_this.props.serviceName); };
        return _this;
    }
    StatelessSidebarItem.prototype.render = function () {
        var _a = this.props, serviceFullName = _a.serviceFullName, isActive = _a.isActive, children = _a.children;
        return (React.createElement(styled_1.Wrapper, { isActive: isActive, onClick: this.onClick },
            React.createElement(styled_1.ServiceIcon, null, children),
            React.createElement(styled_1.ServiceName, null, serviceFullName)));
    };
    return StatelessSidebarItem;
}(react_1.Component));
exports.StatelessSidebarItem = StatelessSidebarItem;
var mapDispatchToProps = function (dispatch) { return ({
    onChangeService: function (serviceName) {
        return dispatch(changeService_1.changeService(serviceName));
    },
}); };
exports.default = react_redux_1.connect(null, mapDispatchToProps)(StatelessSidebarItem);
//# sourceMappingURL=sidebarItem.js.map