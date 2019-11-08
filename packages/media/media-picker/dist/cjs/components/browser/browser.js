"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var localUploadReact_1 = require("../localUploadReact");
var defaultConfig = { uploadParams: {} };
var Browser = /** @class */ (function (_super) {
    tslib_1.__extends(Browser, _super);
    function Browser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.browserRef = React.createRef();
        _this.onFilePicked = function () {
            if (!_this.browserRef.current) {
                return;
            }
            var filesArray = [].slice.call(_this.browserRef.current.files);
            _this.uploadService.addFiles(filesArray);
        };
        _this.browse = function () {
            var onClose = _this.props.onClose;
            if (!_this.browserRef.current) {
                return;
            }
            _this.browserRef.current.click();
            // Calling onClose directly since there is no dom api to notify us when
            // the native file picker is closed
            if (onClose) {
                onClose();
            }
        };
        return _this;
    }
    Browser.prototype.componentDidMount = function () {
        var _a = this.props, onBrowseFn = _a.onBrowseFn, onCancelFn = _a.onCancelFn, isOpen = _a.isOpen;
        if (onBrowseFn) {
            onBrowseFn(this.browse);
        }
        if (onCancelFn) {
            onCancelFn(this.cancel);
        }
        if (isOpen) {
            this.browse();
        }
    };
    Browser.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var isOpen = this.props.isOpen;
        var nextIsOpen = nextProps.isOpen;
        if (nextIsOpen && nextIsOpen !== isOpen) {
            this.browse();
        }
    };
    Browser.prototype.render = function () {
        var config = this.props.config;
        var multiple = config.multiple;
        var fileExtensions = config.fileExtensions && config.fileExtensions.join(',');
        return (React.createElement("input", { ref: this.browserRef, type: "file", style: { display: 'none' }, multiple: multiple, accept: fileExtensions, onChange: this.onFilePicked }));
    };
    Browser.defaultProps = {
        config: defaultConfig,
    };
    return Browser;
}(localUploadReact_1.LocalUploadComponentReact));
exports.Browser = Browser;
//# sourceMappingURL=browser.js.map