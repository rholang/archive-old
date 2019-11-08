"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var analytics_next_1 = require("@atlaskit/analytics-next");
var localUploadReact_1 = require("../localUploadReact");
var types_1 = require("../../service/types");
var media_picker_analytics_error_boundary_1 = require("../media-picker-analytics-error-boundary");
var appendTimestamp_1 = require("../../util/appendTimestamp");
var version_json_1 = require("../../version.json");
exports.getFilesFromClipboard = function (files) {
    return Array.from(files).map(function (file) {
        if (file.type.indexOf('image/') === 0) {
            var name_1 = appendTimestamp_1.appendTimestamp(file.name, file.lastModified);
            return new File([file], name_1, {
                type: file.type,
            });
        }
        else {
            return file;
        }
    });
};
var defaultConfig = { uploadParams: {} };
var ClipboardImpl = /** @class */ (function () {
    function ClipboardImpl(uploadService) {
        this.uploadService = uploadService;
    }
    Object.defineProperty(ClipboardImpl, "latestInstance", {
        get: function () {
            return ClipboardImpl.instances[ClipboardImpl.instances.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    ClipboardImpl.prototype.activate = function (opts) {
        this.deactivate();
        if (opts && opts.createAnalyticsEvent) {
            this.createAnalyticsEvent = opts.createAnalyticsEvent;
        }
        document.addEventListener('paste', ClipboardImpl.handleEvent);
        ClipboardImpl.instances.push(this);
    };
    ClipboardImpl.prototype.deactivate = function () {
        var index = ClipboardImpl.instances.indexOf(this);
        if (index > -1) {
            ClipboardImpl.instances.splice(index, 1);
        }
        else {
            /**
             * We want to remove the handleEvent only when there are no more instances.
             * Since handleEvent is static, if we remove it right away, and there is still an active instance,
             * we will loose the clipboard functionality.
             */
            document.removeEventListener('paste', ClipboardImpl.handleEvent);
        }
    };
    ClipboardImpl.prototype.onFilesPasted = function (files) {
        this.uploadService.addFilesWithSource(files);
        this.fireAnalyticsEvent('pasted', files);
    };
    ClipboardImpl.prototype.fireAnalyticsEvent = function (action, files) {
        if (this.createAnalyticsEvent) {
            var analyticsEvent = this.createAnalyticsEvent({
                eventType: 'ui',
                actionSubject: 'clipboard',
                action: action,
                attributes: {
                    fileCount: files.length,
                    fileAttributes: files.map(function (_a) {
                        var _b = _a.file, name = _b.name, type = _b.type, size = _b.size;
                        return ({
                            fileName: name,
                            fileMimetype: type,
                            fileSize: size,
                        });
                    }),
                },
            });
            analyticsEvent.fire(media_picker_analytics_error_boundary_1.ANALYTICS_MEDIA_CHANNEL);
        }
    };
    ClipboardImpl.instances = [];
    ClipboardImpl.handleEvent = function (event) {
        // last in, first served to support multiple instances listening at once
        var instance = ClipboardImpl.latestInstance;
        if (instance) {
            /*
              Browser behaviour for getting files from the clipboard is very inconsistent and buggy.
              @see https://extranet.atlassian.com/display/FIL/RFC+099%3A+Clipboard+browser+inconsistency
            */
            var clipboardData = event.clipboardData;
            if (clipboardData && clipboardData.files) {
                var fileSource_1 = clipboardData.types.length === 1
                    ? types_1.LocalFileSource.PastedScreenshot
                    : types_1.LocalFileSource.PastedFile;
                var filesArray = exports.getFilesFromClipboard(clipboardData.files).map(function (file) { return ({ file: file, source: fileSource_1 }); });
                // only the latest instance gets the event
                if (filesArray.length > 0) {
                    instance.onFilesPasted.call(instance, filesArray);
                }
            }
        }
    };
    return ClipboardImpl;
}());
var ClipboardBase = /** @class */ (function (_super) {
    tslib_1.__extends(ClipboardBase, _super);
    function ClipboardBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clipboard = new ClipboardImpl(_this.uploadService);
        return _this;
    }
    ClipboardBase.prototype.componentDidMount = function () {
        this.clipboard.activate({
            createAnalyticsEvent: this.props.createAnalyticsEvent,
        });
    };
    ClipboardBase.prototype.componentWillUnmount = function () {
        this.clipboard.deactivate();
    };
    ClipboardBase.prototype.render = function () {
        return null;
    };
    ClipboardBase.defaultProps = {
        config: defaultConfig,
    };
    return ClipboardBase;
}(localUploadReact_1.LocalUploadComponentReact));
exports.ClipboardBase = ClipboardBase;
exports.Clipboard = analytics_next_1.withAnalyticsContext({
    componentName: 'clipboard',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents()(ClipboardBase));
//# sourceMappingURL=clipboard.js.map