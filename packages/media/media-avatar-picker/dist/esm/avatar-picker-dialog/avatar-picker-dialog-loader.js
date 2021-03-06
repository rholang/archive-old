import { __assign, __awaiter, __extends, __generator } from "tslib";
import * as React from 'react';
import { ModalSpinner } from '@atlaskit/media-ui';
var AsyncAvatarPickerDialog = /** @class */ (function (_super) {
    __extends(AsyncAvatarPickerDialog, _super);
    function AsyncAvatarPickerDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            // Set state value to equal to current static value of this class.
            AvatarPickerDialog: AsyncAvatarPickerDialog.AvatarPickerDialog,
        };
        return _this;
    }
    AsyncAvatarPickerDialog.prototype.UNSAFE_componentWillMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var module_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.state.AvatarPickerDialog) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, import(/* webpackChunkName:"@atlaskit-internal_media-avatar-picker" */ '.')];
                    case 2:
                        module_1 = _a.sent();
                        AsyncAvatarPickerDialog.AvatarPickerDialog = module_1.AvatarPickerDialog;
                        this.setState({ AvatarPickerDialog: module_1.AvatarPickerDialog });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AsyncAvatarPickerDialog.prototype.render = function () {
        if (!this.state.AvatarPickerDialog) {
            var placeholder = this.props.placeholder;
            if (placeholder) {
                return placeholder;
            }
            return (React.createElement(ModalSpinner, { blankedColor: "rgba(255, 255, 255, 0.53)", invertSpinnerColor: false }));
        }
        return React.createElement(this.state.AvatarPickerDialog, __assign({}, this.props));
    };
    AsyncAvatarPickerDialog.displayName = 'AsyncAvatarPickerDialog';
    return AsyncAvatarPickerDialog;
}(React.PureComponent));
export default AsyncAvatarPickerDialog;
//# sourceMappingURL=avatar-picker-dialog-loader.js.map