import { __assign, __awaiter, __extends, __generator, __read } from "tslib";
import * as React from 'react';
import { ModalSpinner } from '@atlaskit/media-ui';
import { N700A } from '@atlaskit/theme/colors';
var AsyncSmartMediaEditor = /** @class */ (function (_super) {
    __extends(AsyncSmartMediaEditor, _super);
    function AsyncSmartMediaEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            // Set state value to equal to current static value of this class.
            SmartMediaEditor: AsyncSmartMediaEditor.SmartMediaEditor,
            isErrored: false,
        };
        return _this;
    }
    AsyncSmartMediaEditor.prototype.UNSAFE_componentWillMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, mediaClient, smartEditorModule, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.state.SmartMediaEditor) return [3 /*break*/, 4];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Promise.all([
                                import(/* webpackChunkName:"@atlaskit-media-client" */ '@atlaskit/media-client'),
                                import(/* webpackChunkName:"@atlaskit-internal_smart-media-editor" */ './smartMediaEditor'),
                            ])];
                    case 2:
                        _a = __read.apply(void 0, [_b.sent(), 2]), mediaClient = _a[0], smartEditorModule = _a[1];
                        AsyncSmartMediaEditor.SmartMediaEditor = mediaClient.withMediaClient(smartEditorModule.default);
                        this.setState({
                            SmartMediaEditor: AsyncSmartMediaEditor.SmartMediaEditor,
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        // eslint-disable-next-line no-console
                        console.error(e_1);
                        this.setState({ isErrored: true });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AsyncSmartMediaEditor.prototype.render = function () {
        var isErrored = this.state.isErrored;
        if (isErrored) {
            return null;
        }
        if (!this.state.SmartMediaEditor) {
            return React.createElement(ModalSpinner, { blankedColor: N700A, invertSpinnerColor: true });
        }
        return React.createElement(this.state.SmartMediaEditor, __assign({}, this.props));
    };
    AsyncSmartMediaEditor.displayName = 'AsyncSmartMediaEditor';
    return AsyncSmartMediaEditor;
}(React.PureComponent));
export default AsyncSmartMediaEditor;
//# sourceMappingURL=smartMediaEditorLoader.js.map