"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var folderView_1 = tslib_1.__importDefault(require("./folderView/folderView"));
var auth_1 = tslib_1.__importDefault(require("./auth/auth"));
var styled_1 = require("./styled");
var Browser = /** @class */ (function (_super) {
    tslib_1.__extends(Browser, _super);
    function Browser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Browser.prototype.render = function () {
        var service = this.props.service;
        var view = service.accountId ? React.createElement(folderView_1.default, null) : React.createElement(auth_1.default, null);
        return React.createElement(styled_1.Wrapper, null, view);
    };
    return Browser;
}(react_1.Component));
exports.Browser = Browser;
exports.default = react_redux_1.connect(function (_a) {
    var service = _a.view.service;
    return ({
        service: service,
    });
})(Browser);
//# sourceMappingURL=browser.js.map