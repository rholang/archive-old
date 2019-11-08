"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var media_ui_1 = require("@atlaskit/media-ui");
var analytics_next_1 = require("@atlaskit/analytics-next");
var styled_1 = require("../../styled");
var zoomLevel_1 = require("../../domain/zoomLevel");
var closeOnDirectClick_1 = require("../../utils/closeOnDirectClick");
var zoomControls_1 = require("../../zoomControls");
var domain_1 = require("../../domain");
var closed_1 = require("../../analytics/closed");
var analytics_1 = require("../../analytics");
function zoomLevelAfterResize(newCamera, oldCamera, oldZoomLevel) {
    var isImgScaledToFit = oldZoomLevel.value === oldCamera.scaleDownToFit;
    var zoomLevelToRefit = new zoomLevel_1.ZoomLevel(newCamera.scaleDownToFit);
    return isImgScaledToFit ? zoomLevelToRefit : oldZoomLevel;
}
exports.zoomLevelAfterResize = zoomLevelAfterResize;
var clientRectangle = function (el) {
    var clientWidth = el.clientWidth, clientHeight = el.clientHeight;
    return new media_ui_1.Rectangle(clientWidth, clientHeight);
};
var naturalSizeRectangle = function (el) {
    var naturalWidth = el.naturalWidth, naturalHeight = el.naturalHeight;
    return new media_ui_1.Rectangle(naturalWidth, naturalHeight);
};
var initialState = {
    zoomLevel: new zoomLevel_1.ZoomLevel(1),
    camera: domain_1.Outcome.pending(),
    isDragging: false,
    cursorPos: new media_ui_1.Vector2(0, 0),
};
var InteractiveImgComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InteractiveImgComponent, _super);
    function InteractiveImgComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = initialState;
        _this.saveWrapperRef = function (ref) { return (_this.wrapper = ref); };
        _this.onImageClicked = function (e) {
            var _a = _this.props, onClose = _a.onClose, onBlanketClicked = _a.onBlanketClicked;
            if (e.target === e.currentTarget && onBlanketClicked) {
                onBlanketClicked();
            }
            closeOnDirectClick_1.closeOnDirectClick(onClose)(e);
        };
        _this.onImgLoad = function (ev) {
            if (_this.wrapper) {
                var onLoad = _this.props.onLoad;
                var viewport = clientRectangle(_this.wrapper);
                var originalImg = naturalSizeRectangle(ev.currentTarget);
                var camera = new media_ui_1.Camera(viewport, originalImg);
                _this.setState({
                    camera: domain_1.Outcome.successful(camera),
                    zoomLevel: new zoomLevel_1.ZoomLevel(camera.scaleDownToFit),
                });
                if (onLoad) {
                    onLoad();
                }
            }
        };
        _this.onResize = function () {
            _this.state.camera.whenSuccessful(function (oldCamera) {
                if (!_this.wrapper) {
                    return;
                }
                var oldZoomLevel = _this.state.zoomLevel;
                var newViewport = clientRectangle(_this.wrapper);
                var newCamera = oldCamera.resizedViewport(newViewport);
                var newZoomLevel = zoomLevelAfterResize(newCamera, oldCamera, oldZoomLevel);
                _this.setState({
                    camera: domain_1.Outcome.successful(newCamera),
                    zoomLevel: newZoomLevel,
                });
            });
        };
        _this.onZoomChange = function (nextZoomLevel) {
            _this.state.camera.whenSuccessful(function (camera) {
                var wrapper = _this.wrapper;
                if (!wrapper) {
                    return;
                }
                var scrollLeft = wrapper.scrollLeft, scrollTop = wrapper.scrollTop;
                var prevOffset = new media_ui_1.Vector2(scrollLeft, scrollTop);
                var prevZoomLevel = _this.state.zoomLevel;
                _this.setState({ zoomLevel: nextZoomLevel }, function () {
                    var _a = camera.scaledOffset(prevOffset, prevZoomLevel.value, nextZoomLevel.value), x = _a.x, y = _a.y;
                    wrapper.scrollLeft = x;
                    wrapper.scrollTop = y;
                });
            });
        };
        _this.startDragging = function (ev) {
            ev.preventDefault();
            _this.setState({
                isDragging: true,
                cursorPos: new media_ui_1.Vector2(ev.screenX, ev.screenY),
            });
        };
        _this.stopDragging = function (ev) {
            ev.preventDefault();
            _this.setState({ isDragging: false });
        };
        _this.panImage = function (ev) {
            if (_this.state.isDragging && _this.wrapper) {
                var cursorPos = new media_ui_1.Vector2(ev.screenX, ev.screenY);
                var delta = _this.state.cursorPos.sub(cursorPos);
                _this.setState({ cursorPos: cursorPos });
                _this.wrapper.scrollLeft += delta.x;
                _this.wrapper.scrollTop += delta.y;
            }
        };
        return _this;
    }
    InteractiveImgComponent.prototype.componentDidMount = function () {
        this.state = initialState;
        window.addEventListener('resize', this.onResize);
        document.addEventListener('mousemove', this.panImage);
        document.addEventListener('mouseup', this.stopDragging);
    };
    InteractiveImgComponent.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.onResize);
        document.removeEventListener('mousemove', this.panImage);
        document.removeEventListener('mouseup', this.stopDragging);
    };
    InteractiveImgComponent.prototype.render = function () {
        var _a = this.props, src = _a.src, orientation = _a.orientation, onError = _a.onError;
        var _b = this.state, zoomLevel = _b.zoomLevel, camera = _b.camera, isDragging = _b.isDragging;
        var canDrag = camera.match({
            successful: function (camera) { return zoomLevel.value > camera.scaleToFit; },
            pending: function () { return false; },
            failed: function () { return false; },
        });
        // We use style attr instead of SC prop for perf reasons
        var imgStyle = camera.match({
            successful: function (camera) { return camera.scaledImg(zoomLevel.value); },
            pending: function () { return ({}); },
            failed: function () { return ({}); },
        });
        if (orientation) {
            var transform = media_ui_1.getCssFromImageOrientation(orientation);
            imgStyle.transform = transform;
        }
        return (React.createElement(styled_1.ImageWrapper, { onClick: this.onImageClicked, innerRef: this.saveWrapperRef },
            React.createElement(styled_1.Img, { canDrag: canDrag, isDragging: isDragging, src: src, style: imgStyle, onLoad: this.onImgLoad, onError: onError, onMouseDown: this.startDragging, shouldPixelate: zoomLevel.value > 1 }),
            React.createElement(styled_1.BaselineExtend, null),
            React.createElement(zoomControls_1.ZoomControls, { zoomLevel: zoomLevel, onChange: this.onZoomChange })));
    };
    return InteractiveImgComponent;
}(React.Component));
exports.InteractiveImgComponent = InteractiveImgComponent;
exports.InteractiveImg = analytics_next_1.withAnalyticsEvents({
    onBlanketClicked: function (createAnalyticsEvent) {
        var event = createAnalyticsEvent(closed_1.closedEvent('blanket'));
        event.fire(analytics_1.channel);
    },
})(InteractiveImgComponent);
//# sourceMappingURL=interactive-img.js.map