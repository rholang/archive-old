"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PDFJSViewer = tslib_1.__importStar(require("pdfjs-dist/web/pdf_viewer"));
var pdfjsLib = tslib_1.__importStar(require("pdfjs-dist/build/pdf"));
var styled_components_1 = require("styled-components");
var zoomControls_1 = require("../../zoomControls");
var styled_1 = require("../../styled");
var closeOnDirectClick_1 = require("../../utils/closeOnDirectClick");
var domain_1 = require("../../domain");
var loading_1 = require("../../loading");
var error_1 = tslib_1.__importStar(require("../../error"));
var zoomLevel_1 = require("../../domain/zoomLevel");
exports.pdfViewerClassName = 'pdfViewer';
/* eslint-disable no-unused-expressions */
styled_components_1.injectGlobal(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  .", " {\n    margin-top: 64px;\n    margin-bottom: 64px;\n    .page {\n      margin: 1px auto -8px auto;\n      border: 9px solid transparent;\n      position: relative;\n\n      .canvasWrapper {\n        overflow: hidden;\n      }\n\n      .textLayer {\n        position: absolute;\n        left: 0;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        overflow: hidden;\n        line-height: 1;\n        font-family: sans-serif;\n        opacity: 0.8;\n\n        ::selection {\n          background: rgb(0,0,255);\n        }\n      }\n\n      .annotationLayer {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n      }\n\n      .textLayer > div, .annotationLayer > section {\n        color: transparent;\n        position: absolute;\n        white-space: pre;\n        cursor: text;\n        transform-origin: 0% 0%;\n      }\n      .linkAnnotation > a {\n        position: absolute;\n        font-size: 1em;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n\n      .linkAnnotation > a {\n        background: url(\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\") 0 0 repeat;\n      }\n\n      .linkAnnotation > a:hover {\n        opacity: 0.2;\n        background: #ff0;\n        box-shadow: 0 2px 10px #ff0;\n      }\n    }\n  }\n"], ["\n  .", " {\n    margin-top: 64px;\n    margin-bottom: 64px;\n    .page {\n      margin: 1px auto -8px auto;\n      border: 9px solid transparent;\n      position: relative;\n\n      .canvasWrapper {\n        overflow: hidden;\n      }\n\n      .textLayer {\n        position: absolute;\n        left: 0;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        overflow: hidden;\n        line-height: 1;\n        font-family: sans-serif;\n        opacity: 0.8;\n\n        ::selection {\n          background: rgb(0,0,255);\n        }\n      }\n\n      .annotationLayer {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n      }\n\n      .textLayer > div, .annotationLayer > section {\n        color: transparent;\n        position: absolute;\n        white-space: pre;\n        cursor: text;\n        transform-origin: 0% 0%;\n      }\n      .linkAnnotation > a {\n        position: absolute;\n        font-size: 1em;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n\n      .linkAnnotation > a {\n        background: url(\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\") 0 0 repeat;\n      }\n\n      .linkAnnotation > a:hover {\n        opacity: 0.2;\n        background: #ff0;\n        box-shadow: 0 2px 10px #ff0;\n      }\n    }\n  }\n"])), exports.pdfViewerClassName);
/* eslint-enable no-unused-expressions */
pdfjsLib.GlobalWorkerOptions.workerSrc = '/'; // TODO: use web workers instead of fake worker.
var fetchPdf = function (url) {
    return pdfjsLib.getDocument(url).promise;
};
var initialState = {
    zoomLevel: new zoomLevel_1.ZoomLevel(1),
    doc: domain_1.Outcome.pending(),
};
var PDFRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(PDFRenderer, _super);
    function PDFRenderer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = initialState;
        _this.savePdfElement = function (el) {
            _this.el = el;
        };
        _this.handleZoom = function (zoomLevel) {
            _this.pdfViewer.currentScale = zoomLevel.value;
            _this.setState({ zoomLevel: zoomLevel });
        };
        _this.scaleToFit = function () {
            var pdfViewer = _this.pdfViewer;
            if (pdfViewer) {
                pdfViewer.currentScaleValue = 'page-width';
                _this.setState({
                    zoomLevel: new zoomLevel_1.ZoomLevel(pdfViewer.currentScale),
                });
            }
        };
        return _this;
    }
    PDFRenderer.prototype.componentDidMount = function () {
        this.init();
    };
    PDFRenderer.prototype.init = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var doc_1, err_1;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fetchPdf(this.props.src)];
                    case 1:
                        doc_1 = _a.sent();
                        this.setState({ doc: domain_1.Outcome.successful(doc_1) }, function () {
                            _this.pdfViewer = new PDFJSViewer.PDFViewer({ container: _this.el });
                            _this.pdfViewer.setDocument(doc_1);
                            _this.pdfViewer.firstPagePromise.then(_this.scaleToFit);
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        this.setState({
                            doc: domain_1.Outcome.failed(error_1.createError('previewFailed', err_1)),
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PDFRenderer.prototype.render = function () {
        var _this = this;
        return this.state.doc.match({
            pending: function () { return React.createElement(loading_1.Spinner, null); },
            successful: function () { return (React.createElement(styled_1.PDFWrapper, { innerRef: _this.savePdfElement },
                React.createElement("div", { className: exports.pdfViewerClassName, onClick: closeOnDirectClick_1.closeOnDirectClick(_this.props.onClose) }),
                React.createElement(zoomControls_1.ZoomControls, { zoomLevel: _this.state.zoomLevel, onChange: _this.handleZoom }))); },
            failed: function (err) { return React.createElement(error_1.default, { error: err }); },
        });
    };
    return PDFRenderer;
}(React.Component));
exports.PDFRenderer = PDFRenderer;
var templateObject_1;
//# sourceMappingURL=pdfRenderer.js.map