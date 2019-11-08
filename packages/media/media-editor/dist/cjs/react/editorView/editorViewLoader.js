"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var media_ui_1 = require("@atlaskit/media-ui");
var AsyncEditorView = /** @class */ (function (_super) {
    tslib_1.__extends(AsyncEditorView, _super);
    function AsyncEditorView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            // Set state value to equal to current static value of this class.
            EditorView: AsyncEditorView.EditorView,
        };
        return _this;
    }
    AsyncEditorView.prototype.UNSAFE_componentWillMount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var module_1, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.state.EditorView) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal_media-editor-view" */ './editorView')); })];
                    case 2:
                        module_1 = _a.sent();
                        AsyncEditorView.EditorView = module_1.default;
                        this.setState({ EditorView: module_1.default });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AsyncEditorView.prototype.render = function () {
        if (!this.state.EditorView) {
            return React.createElement(media_ui_1.ModalSpinner, { blankedColor: "none", invertSpinnerColor: false });
        }
        return React.createElement(this.state.EditorView, tslib_1.__assign({}, this.props));
    };
    AsyncEditorView.displayName = 'AsyncEditorView';
    return AsyncEditorView;
}(React.PureComponent));
exports.default = AsyncEditorView;
//# sourceMappingURL=editorViewLoader.js.map