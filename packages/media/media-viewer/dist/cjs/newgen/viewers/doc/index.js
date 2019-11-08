"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var domain_1 = require("../../domain");
var error_1 = require("../../error");
var loading_1 = require("../../loading");
var base_viewer_1 = require("../base-viewer");
var getObjectUrlFromFileState_1 = require("../../utils/getObjectUrlFromFileState");
var moduleLoader = function () {
    return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal_media-viewer-pdf-viewer" */ './pdfRenderer')); });
};
var componentLoader = function () {
    return moduleLoader().then(function (module) { return module.PDFRenderer; });
};
var DocViewer = /** @class */ (function (_super) {
    tslib_1.__extends(DocViewer, _super);
    function DocViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DocViewer.prototype, "initialState", {
        get: function () {
            return {
                content: domain_1.Outcome.pending(),
            };
        },
        enumerable: true,
        configurable: true
    });
    DocViewer.prototype.init = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, item, mediaClient, collectionName, src, err_1, src;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!DocViewer.PDFComponent) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadDocViewer()];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _a = this.props, item = _a.item, mediaClient = _a.mediaClient, collectionName = _a.collectionName;
                        if (!(item.status === 'processed')) return [3 /*break*/, 7];
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, mediaClient.file.getArtifactURL(item.artifacts, 'document.pdf', collectionName)];
                    case 4:
                        src = _b.sent();
                        this.onMediaDisplayed();
                        this.setState({
                            content: domain_1.Outcome.successful(src),
                        });
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _b.sent();
                        this.setState({
                            content: domain_1.Outcome.failed(error_1.createError('previewFailed', err_1, item)),
                        });
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, getObjectUrlFromFileState_1.getObjectUrlFromFileState(item)];
                    case 8:
                        src = _b.sent();
                        if (!src) {
                            this.setState({
                                content: domain_1.Outcome.pending(),
                            });
                            return [2 /*return*/];
                        }
                        this.setState({
                            content: domain_1.Outcome.successful(src),
                        });
                        _b.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    DocViewer.prototype.loadDocViewer = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = DocViewer;
                        return [4 /*yield*/, componentLoader()];
                    case 1:
                        _a.PDFComponent = _b.sent();
                        this.forceUpdate();
                        return [2 /*return*/];
                }
            });
        });
    };
    DocViewer.prototype.release = function () {
        var content = this.state.content;
        if (!content.data) {
            return;
        }
        URL.revokeObjectURL(content.data);
    };
    DocViewer.prototype.renderSuccessful = function (content) {
        var onClose = this.props.onClose;
        var PDFComponent = DocViewer.PDFComponent;
        if (!PDFComponent) {
            return React.createElement(loading_1.Spinner, null);
        }
        return React.createElement(PDFComponent, { src: content, onClose: onClose });
    };
    return DocViewer;
}(base_viewer_1.BaseViewer));
exports.DocViewer = DocViewer;
//# sourceMappingURL=index.js.map