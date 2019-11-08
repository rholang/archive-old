"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var localUploadReact_1 = require("../localUploadReact");
var analytics_next_1 = require("@atlaskit/analytics-next");
var version_json_1 = require("../../version.json");
var media_picker_analytics_error_boundary_1 = require("../media-picker-analytics-error-boundary");
function dragContainsFiles(event) {
    if (!event.dataTransfer) {
        return false;
    }
    var types = event.dataTransfer.types;
    return Array.from(types).indexOf('Files') > -1;
}
var DropzoneBase = /** @class */ (function (_super) {
    tslib_1.__extends(DropzoneBase, _super);
    function DropzoneBase(props) {
        var _this = _super.call(this, props) || this;
        _this.uiActive = false;
        _this.addContainerListeners = function (container) {
            if (container === void 0) { container = _this.getContainer(); }
            container.addEventListener('dragover', _this.onDragOver, false);
            container.addEventListener('dragleave', _this.onDragLeave, false);
            container.addEventListener('drop', _this.onFileDropped);
        };
        _this.removeContainerListeners = function (container) {
            if (container === void 0) { container = _this.getContainer(); }
            container.removeEventListener('dragover', _this.onDragOver, false);
            container.removeEventListener('dragleave', _this.onDragLeave, false);
            container.removeEventListener('drop', _this.onFileDropped);
        };
        _this.onDragOver = function (e) {
            e.preventDefault();
            if (e.dataTransfer && dragContainsFiles(e)) {
                var dataTransfer = e.dataTransfer;
                var allowed = void 0;
                try {
                    allowed = dataTransfer.effectAllowed;
                }
                catch (e) { } // the error is expected in IE11
                dataTransfer.dropEffect =
                    'move' === allowed || 'linkMove' === allowed ? 'move' : 'copy';
                var length_1 = _this.getDraggedItemsLength(dataTransfer);
                _this.emitDragOver({ length: length_1 });
            }
        };
        _this.onDragLeave = function (e) {
            if (e.dataTransfer) {
                e.preventDefault();
                var length_2 = 0;
                if (dragContainsFiles(e)) {
                    var dataTransfer = e.dataTransfer;
                    length_2 = _this.getDraggedItemsLength(dataTransfer);
                }
                _this.emitDragLeave({ length: length_2 });
            }
        };
        _this.onFileDropped = function (dragEvent) {
            if (!dragEvent.dataTransfer) {
                return;
            }
            dragEvent.preventDefault();
            dragEvent.stopPropagation();
            _this.onDrop(dragEvent);
            var files = Array.from(dragEvent.dataTransfer.files);
            _this.uploadService.addFiles(files);
        };
        _this.onDrop = function (e) {
            if (e.dataTransfer && dragContainsFiles(e)) {
                var dataTransfer = e.dataTransfer;
                var fileCount = _this.getDraggedItemsLength(dataTransfer);
                _this.fireAnalyticsEvent('droppedInto', fileCount);
                if (_this.props.onDrop)
                    _this.props.onDrop();
                _this.emitDragLeave({ length: fileCount });
            }
        };
        return _this;
    }
    DropzoneBase.prototype.getContainer = function () {
        var container = this.props.config.container;
        return container || document.body;
    };
    DropzoneBase.prototype.componentDidMount = function () {
        var onCancelFn = this.props.onCancelFn;
        this.addContainerListeners(this.getContainer());
        if (onCancelFn) {
            onCancelFn(this.cancel);
        }
    };
    DropzoneBase.prototype.componentWillUnmount = function () {
        this.removeContainerListeners(this.getContainer());
    };
    DropzoneBase.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var newContainer = nextProps.config.container;
        var oldContainer = this.props.config.container;
        if (newContainer !== oldContainer) {
            this.removeContainerListeners(oldContainer);
            this.addContainerListeners(newContainer);
        }
    };
    // Cross-browser way of getting dragged items length, we prioritize "items" if present
    // https://www.w3.org/TR/html51/editing.html#the-datatransfer-interface
    // This method is used on 'dragover' and we have no way to retrieve FileSystemFileEntry,
    // which contains info about if the dropped item is a file or directory. That info is only
    // available on 'drop'
    DropzoneBase.prototype.getDraggedItemsLength = function (dataTransfer) {
        if (dataTransfer.items) {
            var items = Array.from(dataTransfer.items);
            return items.filter(function (i) { return i.kind === 'file'; }).length;
        }
        // This is required for IE11
        return dataTransfer.files.length;
    };
    DropzoneBase.prototype.emitDragOver = function (payload) {
        if (!this.uiActive) {
            var onDragEnter = this.props.onDragEnter;
            this.uiActive = true;
            this.fireAnalyticsEvent('draggedInto', payload.length);
            if (onDragEnter)
                onDragEnter(payload);
        }
    };
    DropzoneBase.prototype.emitDragLeave = function (payload) {
        var _this = this;
        if (this.uiActive) {
            this.uiActive = false;
            /*
             when drag over child elements, container will issue dragleave and then dragover immediately.
             The 50ms timeout will prevent from issuing that "false" dragleave event
             */
            window.setTimeout(function () {
                if (!_this.uiActive) {
                    var onDragLeave = _this.props.onDragLeave;
                    _this.fireAnalyticsEvent('draggedOut', payload.length);
                    if (onDragLeave)
                        onDragLeave(payload);
                }
            }, 50);
        }
    };
    DropzoneBase.prototype.fireAnalyticsEvent = function (action, fileCount) {
        var createAnalyticsEvent = this.props.createAnalyticsEvent;
        if (createAnalyticsEvent) {
            var analyticsEvent = createAnalyticsEvent({
                eventType: 'ui',
                actionSubject: 'dropzone',
                action: action,
                attributes: {
                    fileCount: fileCount,
                },
            });
            analyticsEvent.fire(media_picker_analytics_error_boundary_1.ANALYTICS_MEDIA_CHANNEL);
        }
    };
    DropzoneBase.prototype.render = function () {
        return null;
    };
    return DropzoneBase;
}(localUploadReact_1.LocalUploadComponentReact));
exports.DropzoneBase = DropzoneBase;
exports.Dropzone = analytics_next_1.withAnalyticsContext({
    componentName: 'dropzone',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents()(DropzoneBase));
//# sourceMappingURL=dropzone.js.map