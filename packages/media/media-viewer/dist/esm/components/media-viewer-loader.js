import { __assign, __awaiter, __extends, __generator, __read } from "tslib";
import * as React from 'react';
import { ModalSpinner } from '@atlaskit/media-ui';
import * as colors from '@atlaskit/theme/colors';
var AsyncMediaViewer = /** @class */ (function (_super) {
    __extends(AsyncMediaViewer, _super);
    function AsyncMediaViewer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            // Set state value to equal to current static value of this class.
            MediaViewer: AsyncMediaViewer.MediaViewer,
            MediaViewerErrorBoundary: AsyncMediaViewer.MediaViewerErrorBoundary,
        };
        return _this;
    }
    AsyncMediaViewer.prototype.UNSAFE_componentWillMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, mediaClient, mediaViewerModule, mediaViewerErrorBoundaryModule, MediaViewerWithClient, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(!this.state.MediaViewer || !this.state.MediaViewerErrorBoundary)) return [3 /*break*/, 4];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Promise.all([
                                import(/* webpackChunkName:"@atlaskit-media-client" */ '@atlaskit/media-client'),
                                import(/* webpackChunkName:"@atlaskit-internal_media-viewer" */ './media-viewer'),
                                import(/* webpackChunkName:"@atlaskit-internal_MediaPickerErrorBoundary" */ './media-viewer-analytics-error-boundary'),
                            ])];
                    case 2:
                        _a = __read.apply(void 0, [_b.sent(), 3]), mediaClient = _a[0], mediaViewerModule = _a[1], mediaViewerErrorBoundaryModule = _a[2];
                        MediaViewerWithClient = mediaClient.withMediaClient(mediaViewerModule.MediaViewer);
                        AsyncMediaViewer.MediaViewer = MediaViewerWithClient;
                        AsyncMediaViewer.MediaViewerErrorBoundary =
                            mediaViewerErrorBoundaryModule.default;
                        this.setState({
                            MediaViewer: MediaViewerWithClient,
                            MediaViewerErrorBoundary: AsyncMediaViewer.MediaViewerErrorBoundary,
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AsyncMediaViewer.prototype.render = function () {
        var _a = this.state, MediaViewer = _a.MediaViewer, MediaViewerErrorBoundary = _a.MediaViewerErrorBoundary;
        if (!MediaViewer || !MediaViewerErrorBoundary) {
            return (React.createElement(ModalSpinner, { blankedColor: colors.DN30, invertSpinnerColor: true }));
        }
        return (React.createElement(MediaViewerErrorBoundary, null,
            React.createElement(MediaViewer, __assign({}, this.props))));
    };
    AsyncMediaViewer.displayName = 'AsyncMediaViewer';
    return AsyncMediaViewer;
}(React.PureComponent));
export default AsyncMediaViewer;
//# sourceMappingURL=media-viewer-loader.js.map