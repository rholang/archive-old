import { __awaiter, __extends, __generator } from "tslib";
import * as React from 'react';
import { PureComponent } from 'react';
import { Consumer } from '../consumers/consumer';
var WithDocumentActions = /** @class */ (function (_super) {
    __extends(WithDocumentActions, _super);
    function WithDocumentActions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionsMapper = function (actions) { return ({
            createDocument: function (value) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, actions.createDocument(value)];
                    });
                });
            },
            editDocument: function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        actions.setDocumentMode('edit');
                        return [2 /*return*/];
                    });
                });
            },
            updateDocument: function (value) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, actions.updateDocument(value)];
                    });
                });
            },
            cancelEdit: function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        actions.setDocumentMode('view');
                        return [2 /*return*/];
                    });
                });
            },
        }); };
        return _this;
    }
    WithDocumentActions.prototype.render = function () {
        return (React.createElement(Consumer, { actionsMapper: this.actionsMapper }, this.props.render));
    };
    return WithDocumentActions;
}(PureComponent));
export default WithDocumentActions;
//# sourceMappingURL=with-document-actions.js.map