"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var consumer_1 = require("../consumers/consumer");
var WithDocumentActions = /** @class */ (function (_super) {
    tslib_1.__extends(WithDocumentActions, _super);
    function WithDocumentActions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionsMapper = function (actions) { return ({
            createDocument: function (value) {
                return tslib_1.__awaiter(this, void 0, void 0, function () {
                    return tslib_1.__generator(this, function (_a) {
                        return [2 /*return*/, actions.createDocument(value)];
                    });
                });
            },
            editDocument: function () {
                return tslib_1.__awaiter(this, void 0, void 0, function () {
                    return tslib_1.__generator(this, function (_a) {
                        actions.setDocumentMode('edit');
                        return [2 /*return*/];
                    });
                });
            },
            updateDocument: function (value) {
                return tslib_1.__awaiter(this, void 0, void 0, function () {
                    return tslib_1.__generator(this, function (_a) {
                        return [2 /*return*/, actions.updateDocument(value)];
                    });
                });
            },
            cancelEdit: function () {
                return tslib_1.__awaiter(this, void 0, void 0, function () {
                    return tslib_1.__generator(this, function (_a) {
                        actions.setDocumentMode('view');
                        return [2 /*return*/];
                    });
                });
            },
        }); };
        return _this;
    }
    WithDocumentActions.prototype.render = function () {
        return (React.createElement(consumer_1.Consumer, { actionsMapper: this.actionsMapper }, this.props.render));
    };
    return WithDocumentActions;
}(react_1.PureComponent));
exports.default = WithDocumentActions;
//# sourceMappingURL=with-document-actions.js.map